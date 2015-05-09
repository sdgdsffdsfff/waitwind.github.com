

/* 将json格式数据转换成Form组件 */
;(function($) {

var Field = function(info) {
		this.name  = info.name;
		this.label = info.label;
		this.type  = info.type || "string";
		this.nullable = (info.nullable == null ? "true" : info.nullable);
		this.checkReg = info.checkReg;
		this.errorMsg = info.errorMsg;
		this.options = info.options;
		this.jsonUrl = info.jsonUrl;
		this.multiple = (info.multiple == "true") || false;
		this.onchange = info.onchange;
		this.defaultValue = info.defaultValue;

		this.width  = (info.width || "250px").trim();
		if( !this.jsonUrl ) {
			this.height = info.height;	
		}

		if( /^\d*$/.test(this.width) ) {
			this.width += "px";
		}
		if( this.height && /^\d*$/.test(this.height.trim()) ) {
			this.height = this.height.trim() + "px";
		}

		this.mode = this.type.toLowerCase();
		if(this.jsonUrl) {
			this.mode = "combotree";
		} else if(this.options && this.options.codes && this.options.codes.length) {
			this.mode = "combo";
		}
		switch(this.mode) {
			case "number":
				this.checkReg = this.checkReg || "^(-?\\d+)(\\.\\d+)?$"; // 浮点数
				this.errorMsg = this.errorMsg || "请输入数字";
				break;
			case "string":
			case "combo":
			case "combotree":
			case "hidden":
				break;
			case "date":
			case "datetime":
				this.width = "200px";
				var defaultValue = this.defaultValue;
				if( defaultValue && (/today[\s]*-/gi).test(defaultValue) ) {
					var deltaDays = parseInt(defaultValue.split("-")[1]);
					var today = new Date();
					today.setDate(today.getDate() - deltaDays);
					this.defaultValue = today.format('yyyy-MM-dd') + (this.mode == "datetime" ? " 00:00:00" : "");
				} 
				break;
		}
	};

	Field.prototype = {
		createColumn: function() {
			var column = "<column name='" +this.name+ "' caption='" +this.label+ "' mode='" +this.mode+ "' empty='" +this.nullable+ "' ";
			if(this.checkReg) {
				column += " checkReg='" +this.checkReg+ "' ";
			}
			if(this.errorMsg) {
				column += " errorMsg='" +this.errorMsg+ "' ";
			}
			if(this.multiple) {
				column += " multiple='multiple' ";
			}
			if(this.onchange) {
				column += " onchange='" + this.onchange + "' ";
			}
			if(this.height) {
				column += " height='" + this.height + "' ";
			}

			// 如果下拉列表需要后续生成，可先填入任意值，默认初始化成为codes和names都为空
			if(this.options && this.options.codes == undefined) {
				this.options = {"codes": "", "names": ""};
			}
			if(this.options) {
				if (this.options.codes == "year") {
					this.options.codes = '2010|2011|2012|2013|2014|2015|2016|2017|2018|2019|2020';
					this.options.names = '2010|2011|2012|2013|2014|2015|2016|2017|2018|2019|2020';
				}
				if (this.options.codes == "month") {
					this.options.codes = '1|2|3|4|5|6|7|8|9|10|11|12';
					this.options.names = '一月|二月|三月|四月|五月|六月|七月|八月|九月|十月|十一月|十二月';
				}
				column += " values='" + this.options.codes + "' texts='" + this.options.names + "'";
			}

			return column + "/>";
		},

		createLayout: function() {	
			var height = this.height||'18px';
			var tag = (parseInt(height.replace('px', '')) > 18 && !this.options && !this.jsonUrl) ? 'textarea' : 'input';		
			var layout = [];
			layout[layout.length] = " <TR>";
			layout[layout.length] = "    <TD width='88'><label binding='" + this.name + "'/></TD>";
			layout[layout.length] = "    <TD><" + tag + " binding='" + this.name + "' style='width:" + this.width + ";height:" + height + ";'/></TD>";
			layout[layout.length] = " </TR>";

			return layout.join("");
		},		

		createDataNode: function() {
		 	if(this.defaultValue) {
		 		return "<" + this.name + "><![CDATA[" + this.defaultValue + "]]></" + this.name + ">";
		 	}
			return "";
		}
	}

	$.json2Form = function(formId, defines, buttonBox, customizeJS) {
		var infos = defines ? (typeof(defines) === "string" ? $.parseJSON(defines) : defines) : [];

		var fields = [];
		var columns = [];
		var layouts = [];
		var datarow = [];
		infos.each(function(i, info) {
			info.name = info.name || info.code || "param" + (i+1);
			
			var item = new Field(info);
			fields.push(item);

			columns.push(item.createColumn());
			if(item.mode !== "hidden") {
				layouts.push(item.createLayout());
			}
			datarow.push(item.createDataNode());
		});
		
		var str = [];
		str[str.length] = "<xform>";
		str[str.length] = "    <declare>";
		str[str.length] = columns.join("");
		str[str.length] = "    </declare>";
		str[str.length] = "    <layout>";
		str[str.length] = layouts.join("") + (buttonBox || "");
		str[str.length] = "    </layout>";
		str[str.length] = "    <data><row>" + datarow.join("") + "</row></data>";
		if(customizeJS) {
			str[str.length] = "<script> <![CDATA[" + customizeJS + "]]> </script>";
		}
		str[str.length] = "</xform>";
		
		var tssForm = $.F(formId, $.XML.toNode(str.join("")));
		fields.each(function(i, field){
			if( !field.jsonUrl ) return;
			$.ajax({
				url : field.jsonUrl,
				method: "GET",
				type : "json",
				ondata : function() { 
					var result = this.getResponseJSON();
					if( result && result.length ) {
						var values = [], texts = [];
						result.each(function(i, item){
							values.push( $.vt(item).value );
							texts.push( $.vt(item).text );
						});
						tssForm.updateField(field.name, [
							{"name": "texts", "value": texts.join('|')},
						 	{"name": "values", "value": values.join('|')}
						 ]);
					}			
				}
			});
		});

		return tssForm;
	};

	// ---------------------------- 多级下拉选择联动 ------------------------------------------------
	$.getNextLevelOption = function(form, currLevel, currLevelValue, service, nextLevel) {
		if(currLevel == null || currLevelValue == null || service == null || nextLevel == "") return;
		
		var params = {};
		params[currLevel] = currLevelValue;
 
		$.ajax({
			url : service,
			method: "POST",
			params : params,
			type : "json",
			ondata : function() { 
				var result = this.getResponseJSON();
				if( result && result.length ) {
					var values = [], texts = [];
					result.each(function(i, item){
						values.push( $.vt(item).value );
						texts.push( $.vt(item).text );
					});
					
					$("#" + nextLevel).css("height", "18px");
					form.updateField(nextLevel, [
						{"name": "mode", "value": "combotree"},
						{"name": "texts", "value": texts.join('|')},
					 	{"name": "values", "value": values.join('|')}
					 ]);
				}				
			}
		});
	};

	/* 判断方法是否相等 */
	$.funcCompare = function(func1, func2) {
		if(func1 == null && func2 != null) {
			return false;
		}
		if(func2 == null && func1 != null) {
			return false;
		}
		if(func2 == null && func1 == null) {
			return true;
		}

		var fn = /^(function\s*)(\w*\b)/;
		return func1.toString().replace(fn,'$1') === func2.toString().replace(fn,'$1'); 
	}

	// item的类型允许为[id, code, name] or [pk, id, text]
	$.createOption = function(item) {
		var option = new Option();
		$.copy(option, $.vt(item));
		return option;
	};

	$.vt = function(item) {
		var result = {};
		result.value = item.id   || item.pk   || item[0] || '';
		result.text  = item.name || item.text || item[2] || '';
		return result;
	};

	$.copy = function(to, from) {
		$.each(from, function(name, value) {
			to[name] = value;
		});
	}

}) (tssJS);