(function(window, undefined) {

    if( window.attachEvent ) {
        alert("您当前的IE浏览器版本过低，为能有更好的展示效果，建议升级到IE11，或换最新版Chrome、FireFox。");
    } 
    
    var _tssJS = (function() {

        // 构建tssJS对象
        var tssJS = function(selector, parent) {
            return new tssJS.fn.init(selector, parent, rootTssJS);
        },

        version = "1.0.0",

        // Map over the $ in case of overwrite
        _$ = window.$,

        rootTssJS,

        // The deferred used on DOM ready
        readyList = [],

        // Check if a string has a non-whitespace character in it
        rnotwhite = /\S/,

        // Used for trimming whitespace
        trimLeft = /^\s+/,
        trimRight = /\s+$/,

        // JSON RegExp
        rvalidchars = /^[\],:{}\s]*$/,

        toString = Object.prototype.toString,
        trim = String.prototype.trim,
        push    = Array.prototype.push,
        slice   = Array.prototype.slice,     
        indexOf = Array.prototype.indexOf,

        ua = navigator.userAgent.toLowerCase(),
        mc = function(e) {
            return e.test(ua)
        },

        // [[Class]] -> type pairs
        class2type = {};

        // tssJS对象原型
        tssJS.fn = tssJS.prototype = {

            tssjs: version,

            constructor: tssJS,

            init: function(selector, parent, rootTssJS) {
                // Handle $(""), $(null), or $(undefined)
                if (!selector) {
                    return this;
                }

                // Handle $(DOMElement)
                if (selector.nodeType || selector === document) {
                    this[0] = selector;
                    this.length = 1;
                    return this;
                }

                if (typeof selector === "string") {
                    return this.find(selector, parent);
                }

                if (tssJS.isFunction(selector)) {
                    return rootTssJS.ready(selector);
                }
            },

            size: function() {
                return this.length;
            },

            each: function(callback, args) {
                return tssJS.each(this, callback, args);
            },

            ready: function(fn, args) {
                // Attach the listeners
                tssJS.bindReady.call(this, fn, args);

                return this;
            },
        };

        // Give the init function the tssJS prototype for later instantiation
        tssJS.fn.init.prototype = tssJS.fn;

        // 通过tssJS.fn.extend扩展的函数，大部分都会调用通过tssJS.extend扩展的同名函数
        tssJS.extend = tssJS.fn.extend = function(fnMap) {
            fnMap = fnMap || {};
            for (var name in fnMap) {
                this[name] = fnMap[name];
            }

            // Return the modified object
            return this;
        };

        // 在tssJS上扩展静态方法
        tssJS.extend({

            // 释放$的 tssJS 控制权
            // 许多 JavaScript 库使用 $ 作为函数或变量名，tssJS 也一样。
            // 在 tssJS 中，$ 仅仅是 tssJS 的别名，因此即使不使用 $ 也能保证所有功能性。
            // 假如我们需要使用 tssJS 之外的另一 JavaScript 库，我们可以通过调用 $.noConflict() 向该库返回控制权。
            noConflict: function(deep) {
                // 交出$的控制权
                if (window.$ === tssJS) {
                    window.$ = _$;
                }

                return tssJS;
            },

            // Is the DOM ready to be used? Set to true once it occurs.
            isReady: false,

            // Handle when the DOM is ready
            ready: function(fn, args) {
                if (!tssJS.isReady) {
                    // 确保document.body存在
                    if (!document.body) {
                        setTimeout(function() {
                            tssJS.ready(fn, args);
                        },
                        10);
                        return;
                    }

                    // Remember that the DOM is ready
                    tssJS.isReady = true;

                    // If there are functions bound, to execute
                    if (fn) {
                        fn(args);
                    } else {
                        tssJS.each(readyList,
                        function(i, name) {
                            var _ = readyList[i];
                            _.fn.call(_._this, _.args);
                        });

                        readyList = [];
                    }
                }
            },

            bindReady: function(fn, args) {
                readyList.push({
                    "_this": this,
                    "fn": fn,
                    "args": args
                });

                if (document.readyState === "complete") {
                    return setTimeout(tssJS.ready, 1);
                }

                document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
                window.addEventListener("load", tssJS.ready, false);
            },

            // 是否函数
            isFunction: function(obj) {
                return tssJS.type(obj) === "function";
            },

            // 是否数组
            isArray: Array.isArray ||
                function(obj) {
                    return tssJS.type(obj) === "array";
                },

            // 简单的判断（判断setInterval属性）是否window对象
            isWindow: function(obj) {
                return obj && typeof obj === "object" && "setInterval" in obj;
            },

            // 获取对象的类型
            type: function(obj) {
                // class2type[ "[object " + name + "]" ] = name.toLowerCase();
                return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
            },

            // 是否空对象
            isEmptyObject: function(obj) {
                for (var name in obj) {
                    return false;
                }
                return true;
            },

            isNullOrEmpty: function(value) {
                return (value == null || (typeof(value) == 'string' && value.trim() == ""));
            },

            // 抛出一个异常
            error: function(msg) {
                throw msg;
            },

            // parseJSON把一个字符串变成JSON对象。
            parseJSON: function(data) {
                if (typeof data !== "string" || !data) {
                    return null;
                }

                // Make sure leading/trailing whitespace is removed 
                data = tssJS.trim(data);

                // 原生JSON API。反序列化是JSON.stringify(object)
                if (window.JSON && window.JSON.parse) {
                    return window.JSON.parse(data);
                }

                // ... 大致地检查一下字符串合法性
                if (rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {
                    return (new Function("return " + data))();
                }
                tssJS.error("Invalid JSON: " + data);
            },

            // 解析XML 
            parseXML: function(data) {
                var parser = new DOMParser();
                var xml = parser.parseFromString(data, "text/xml");

                var tmp = xml.documentElement;

                if (!tmp || !tmp.nodeName || tmp.nodeName === "parsererror") {
                    console.log("Invalid XML: " + data);
                }

                return xml;
            },

            // globalEval函数把一段脚本加载到全局context（window）中。
            // IE中可以使用window.execScript, 其他浏览器 需要使用eval。
            // 因为整个tssJS代码都是一整个匿名函数，所以当前context是tssJS，如果要将上下文设置为window则需使用globalEval。
            globalEval: function(data) {
                if (data && /\S/.test(data)) { // data非空
                    ( window.execScript || function(data) { window["eval"].call(window, data); } ) (data);
                }
            },

            "execCommand": function(callback, param) {
                var returnVal;
                try {
                    if(tssJS.isFunction(callback)) {
                        returnVal = callback(param);
                    }
                    else if(callback) {
                        var rightKH = callback.indexOf(")");
                        if(rightKH < 0 && param) {
                            callback = callback + "('" + param + "')";
                        }
                        returnVal = eval(callback);
                    }
                } catch (e) {
                    alert(e.message);
                    console.log(e.stack);
                    returnVal = false;
                }
                return returnVal;
            },

            // 遍历对象或数组
            each: function(object, callback, args) {
                var name, i = 0,
                length = object.length,
                isObj = length === undefined || tssJS.isFunction(object);

                // 如果有参数args，调用apply，上下文设置为当前遍历到的对象，参数使用args
                if (args) {
                    if (isObj) {
                        for (name in object) {
                            if (callback.apply(object[name], args) === false) {
                                break;
                            }
                        }
                    } else {
                        for (; i < length;) {
                            if (callback.apply(object[i++], args) === false) {
                                break;
                            }
                        }
                    }
                }
                // 没有参数args则调用，则调用call，上下文设置为当前遍历到的对象，参数设置为key/index和value
                else {
                    if (isObj) {
                        for (name in object) {
                            if (callback.call(object[name], name, object[name]) === false) {
                                break;
                            }
                        }
                    } else {
                        for (; i < length; i++) {
                            if (callback.call(object[i], i, object[i]) === false) {
                                break;
                            }
                        }
                    }
                }

                return object;
            },

            // 尽可能的使用本地String.trim方法，否则先过滤开头的空格，再过滤结尾的空格
            trim: trim ? function(text) { return trim.call(text); } :
                function(text) { return text.toString().replace(trimLeft, "").replace(trimRight, ""); },

            // 过滤数组，返回新数组；callback返回true时保留
            grep: function(elems, callback) {
                var ret = [],
                retVal;

                for (var i = 0, length = elems.length; i < length; i++) {
                    retVal = !!callback(elems[i], i);
                    if (retVal) {
                        ret.push(elems[i]);
                    }
                }

                return ret;
            },

            /* 缓存页面数据（xml、变量等） */
            "cache": {
                "Variables": {},
                "XmlDatas":  {}
            },

            /* 负责生成对象唯一编号（为了兼容FF） */
            "uid": 0,
            "getUniqueID": function(prefix) {
                return (prefix || "_") + String($.uid ++ );
            },

            // 获取当前时间的便捷函数
            now: function() {
                return (new Date()).getTime();
            },

            // 对数据进行简单加密
            encode: function(info, key) {
                if( info == null || typeof(info) != 'string') return "";

                var result = [];
                for(var i=0, length = info.length; i < length; i++) {
                    result.push( info.charCodeAt(i) ^ (key || 100) % 127 );
                }

                return result.join("X");
            },

            decode: function(info, key) {
                if( info == null || typeof(info) != 'string') return "";

                var result = [];
                info.split("X").each(function(){
                    result.push( String.fromCharCode(this ^ (key || 100) % 127) );
                });

                return result.join("");
            },

            isIE: mc(/.net/),
            isChrome: mc(/\bchrome\b/),
            isWebKit: mc(/webkit/),
            supportCanvas: !!document.createElement('canvas').getContext,
            isMobile: mc(/ipod|ipad|iphone|android/gi),
        });

        // Populate the class2type map
        tssJS.each("Boolean Number String Function Array Date RegExp Object".split(" "),
        function(i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
        });

        var DOMContentLoaded = (function() {
            return function() {
                document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
                tssJS.ready();
            };
        })();

 
        rootTssJS = tssJS(document);

        // 到这里，tssJS对象构造完成，后边的代码都是对tssJS或tssJS对象的扩展
        return tssJS;

    })();

    /** -------------------------------- Add useful method --------------------------------------- */

    Array.prototype.each = function(fn, args) {
        $.each(this, fn, args);
        return this;
    };

    Array.prototype.contains = function(obj) {
        var i = this.length;
        while (i--) {
            if (this[i] === obj) {
                return true;
            }
        }
        return false;
    };

    Array.prototype.remove = function(item) {
        for(var i=0, n=0; i < this.length; i++) {
            if(this[i] != item) {
                this[n++] = this[i];
            }
        }
        this.length -= 1;
    };

    Date.prototype.format = function(format) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),  // quarter
            "S": this.getMilliseconds()
        }

        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }

        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    };

    window.tssJS = window.$ = _tssJS;

    window.$1 = function(id) {
        return $("#" + id.replace(/\./gi, "\\."))[0];
    }

    window.$$ = function(id) {
        return document.getElementById(id);
    }

})(window);


// 扩展tssJS原型方法
; (function($) {
    $.fn.extend({

        find: function(selector, parent) {
            parent = parent || document;
            var elements = parent.querySelectorAll(selector);

            this.length = elements.length;
            for (var i = 0; i < this.length; i++) {
                this[i] = elements[i];
            }

            return this;
        },

        //设置CSS
        css: function(attr, value) {
            for (var i = 0; i < this.length; i++) {
                var el = this[i];
                if (arguments.length == 1) {
                    return $.getStyle(el, attr);
                }
                el.style[attr] = value;
            }
            return this;
        },

        hasClass: function(className) {
            if(this.length == 0) {
                return false;
            }
            return $.hasClass(this[0], className);
        },

        // 添加Class
        addClass: function(className) {
            for (var i = 0; i < this.length; i++) {
                var element = this[i];
                if (!$.hasClass(element, className)) {
                    element.className += ' ' + className;
                }
            }
            return this;
        },

        // 移除Class
        removeClass: function(className) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            for (var i = 0; i < this.length; i++) {
                var element = this[i];
                if ($.hasClass(element, className)) {
                    element.className = element.className.replace(reg, ' ').trim();
                }
            }
            return this;
        },

        removeClasses: function(classNames) {
            var tjObj = this;
            classNames.split(",").each(function(i, className){
                tjObj.removeClass(className);
            });

            return this;
        },

        // 设置innerHTML
        html: function(str) {
            for (var i = 0; i < this.length; i++) {
                var element = this[i];
                if (arguments.length == 0) {
                    return element.innerHTML;
                }
                element.innerHTML = str;
            }
            return this;
        },

        appendChild: function(el) {
            if ( this.length > 0 ) {
                this[0].appendChild(el);
            }
            return this;
        },

        title: function(str) {
            for (var i = 0; i < this.length; i++) {
                this[i].title = str;
            }
            return this;
        },

        // 设置鼠标移入移出方法
        hover: function(over, out) {
            for (var i = 0; i < this.length; i++) {
                $.Event.addEvent(this[i], 'mouseover', over);
                $.Event.addEvent(this[i], 'mouseout', out);
            }
            return this;
        },

        // 设置点击切换方法
        toggle: function() {
            for (var i = 0; i < this.length; i++) { 
                (function(element, args) {
                    var count = 0;
                    $.Event.addEvent(element, 'click', function() {
                        args[count++%args.length].call(this);
                    });
                })(this[i], arguments);
            }
            return this;
        },

        //设置显示
        show: function(block) {
            for (var i = 0; i < this.length; i++) {
                this[i].style.display = block ? 'block' : '';
            }
            return this;
        },

        focus: function() {
            if ( this.length > 0 ) {
                this[0].focus();
            }
            return this;
        },

        //设置隐藏
        hide: function() {
            for (var i = 0; i < this.length; i++) {
                this[i].style.display = 'none';
            }
            return this;
        },

        // 设置物体居中
        center: function(width, height) {
            var left = ($.getInner().width - (width || 100) ) / 2;
            var top  = ($.getInner().height - (height || 100) ) / 2;
            return this.position(left, top);
        },

        position: function(left, top) {
            for (var i = 0; i < this.length; i++) {
                this[i].style.position = "absolute";
                this[i].style.left = left + 'px';
                this[i].style.top  = top + 'px';
            }
            return this;
        },

        // 触发点击事件
        click: function(fn) {
            for (var i = 0; i < this.length; i++) {
                this[i].onclick = fn;
            }
            return this;
        },

        focus: function() {
            if(this.length > 0) {
                this[0].focus();
            }
        }
    });
})(tssJS);

// 扩展tssJS操作HTML DOMElement的静态方法
; (function($) {
    $.extend({

        hasClass: function(el, cn) {
            var reg = new RegExp('(\\s|^)' + cn + '(\\s|$)');
            return (' ' + el.className + ' ').match(reg);
        },

        // 获取视口大小
        getInner: function() {
            if (typeof window.innerWidth != 'undefined') {
                return {
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            } else {
                return {
                    width: document.documentElement.clientWidth,
                    height: document.documentElement.clientHeight
                }
            }
        },

        // 获取Style。注：computedStyle: style 和 runtimeStyle 的结合
        getStyle: function(element, attr) {
            if (window.getComputedStyle) { // W3C
                return window.getComputedStyle(element, null)[attr];
            } 
            else if (element.currentStyle) { //IE
                return element.currentStyle[attr];
            }
            return null;
        },

        //  获取绝对位置
        absPosition: function(node) {
            var left, top, pEl = node;

            if (typeof node.getBoundingClientRect === 'function') {
                var clientRect = node.getBoundingClientRect();
                left = clientRect.left + window.pageXOffset;
                top = clientRect.bottom + window.pageYOffset;
            } else {
                left = pEl.offsetLeft;
                top = pEl.offsetTop + pEl.offsetHeight;
                while ((pEl = pEl.offsetParent)) {
                    left += pEl.offsetLeft;
                    top += pEl.offsetTop;
                }
            }
            return {
                "left": left,
                "top": top
            };
        },

        createElement: function(tagName, className) {
            var element = document.createElement(tagName);
            if (className) {
                $(element).addClass(className)
            }
            return element;
        },

        // 创建带命名空间的对象
        createNSElement: function(tagName, ns) {
            var tempDiv = document.createElement("DIV");
            tempDiv.innerHTML = "<" + ns + ":" + tagName + "/>";
            var element = tempDiv.firstChild.cloneNode(false);
            element.uniqueID = $.getUniqueID();

            $.removeNode(tempDiv);

            return element;
        },

        getNSElements: function(element, tagName, ns) {
            return element.getElementsByTagName(ns + ":" + tagName);
        },

        removeNode: function(node) {
            if (node == null) return;

            var parentNode = node.parentNode;
            if (parentNode) {
                parentNode.removeChild(node);
            }
        },

        /* 动态创建脚本 */
        createScript: function(script) {
            var head = document.head || document.getElementsByTagName('head')[0];
            if( head ) {
                var scriptNode = $.createElement("script");
                $.XML.setText(scriptNode, script);
                head.appendChild(scriptNode);
            }
        },

        /* 设置透明度 */
        setOpacity: function(obj, opacity) {
            if(opacity == null || opacity == "") {
                opacity = 100;
            }

            obj.style.opacity = opacity / 100;
            obj.style.filter = "alpha(opacity=" + opacity + ")";
        },

        waitingLayerCount: 0,

        showWaitingLayer: function () {
            var waitingObj = $("#_waiting");
            if(waitingObj.length == 0) {
                var waitingDiv = document.createElement("div");    
                waitingDiv.id = "_waiting";
                document.body.appendChild(waitingDiv);

                $(waitingDiv).css("width", "100%").css("height", "100%")
                             .css("position", "absolute").css("left", "0px").css("top", "0px")
                             .css("cursor", "wait").css("zIndex", "10000").css("background", "black");
                $.setOpacity(waitingDiv, 33);
            }
            else {
                waitingObj.css("display", "block");
            }

            $.waitingLayerCount ++;
        },

        hideWaitingLayer: function() {
            $.waitingLayerCount --;

            var waitingObj = $("#_waiting");
            if( waitingObj.length > 0 && $.waitingLayerCount <= 0 ) {
                waitingObj.css("display", "none");
            }
        }

    });
})(tssJS);

// 扩展tssJS 单元测试的静态方法
; (function($) {
    $.extend({
        /* 前台单元测试断言 */
        assertEquals: function(expect, actual, msg) {
            if (expect != actual) {
                $.error(msg + ": " + "[expect: " + expect + ", actual: " + actual + "]");
            }
        },

        assertTrue: function(result, msg) {
            if (!result && msg) {
                $.error(msg);
            }
        },

        assertNotNull: function(result, msg) {
            if (result == null && msg) {
                $.error(msg);
            }
        }
    });
})(tssJS);


/* 负责获取当前页面地址参数 */
; (function($) {

    $.extend({        
        Query: {
            items: {},

            get: function(name, decode) {
                var str = items[name];
                return decode ? unescape(str) : str; // decode=true，对参数值（可能为中文等）进行编码
            },

            init: function(queryString) {
                items = {}; // 先清空
                queryString = queryString || window.location.search.substring(1);

                var params = queryString.split("&");
                for (var i = 0; i < params.length; i++) {
                    var param = params[i].split("=");
                    items[param[0]] = param[1];
                }
            }
        }
    });

    $.Query.init();

})(tssJS);

/* 
 * 负责管理页面上cookie数据.
 * Chrome只支持在线网站的cookie的读写操作，对本地html的cookie操作是禁止的。
 */
; (function($) {

    $.extend({
        Cookie: {
            setValue: function(name, value, expires, path) {
                if (expires == null) {
                    var exp = new Date();
                    exp.setTime(exp.getTime() + 365 * 24 * 60 * 60 * 1000);
                    expires = exp.toGMTString();
                }

                path = path || "/";
                window.document.cookie = name + "=" + escape(value) + ";expires=" + expires + ";path=" + path;
            },

            getValue: function(name) {
                var value = null;
                var cookies = window.document.cookie.split(";");
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i];
                    var index = cookie.indexOf("=");
                    var curName = cookie.substring(0, index).replace(/^ /gi, "");
                    var curValue = cookie.substring(index + 1);

                    if (name == curName) {
                        value = unescape(curValue);
                    }
                }
                return value;
            },

            del: function(name, path) {
                var expires = new Date(0).toGMTString();
                this.setValue(name, "", expires, path);
            },

            delAll: function(path) {
                var cookies = window.document.cookie.split(";");
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i];
                    var index = cookie.indexOf("=");
                    var curName = cookie.substring(0, index).replace(/^ /gi, "");
                    $.Cookie.del(curName, path);
                }
            }

        }
    });
})(tssJS);

/*********************************** 事件（Event）函数  start **********************************/
;(function($){

    $.extend({
        Event: {
            MOUSEDOWN: 1,
            MOUSEUP: 2,
            MOUSEOVER: 4,
            MOUSEOUT: 8,
            MOUSEMOVE:16,
            MOUSEDRAG: 32,

            timeout: {},

            addEvent: function(element, eventName, fn, capture) {
                element.addEventListener(eventName, fn, !!capture);
            },

            removeEvent: function(element, eventName, fn, capture) {
                element.removeEventListener(eventName, fn, !!capture);
            },

            /* 取消事件 */
            cancel: function(ev) { 
                ev = ev || window.event;
                if (ev.preventDefault) {
                    ev.preventDefault();
                } else {
                    ev.returnValue = false;
                }
            },

            // 获得事件触发对象
            getSrcElement: function(ev) {
                return ev.target || ev.srcElement;
            },

            /* 使事件始终捕捉对象。设置事件捕获范围。 */
            setCapture: function(srcElement, eventType) {
                if (srcElement.setCapture) {             
                    srcElement.setCapture();         
                } 
                else if (window.captureEvents) {           
                    window.captureEvents(eventType);         
                }
            },

            /* 使事件放弃始终捕捉对象。 */
            releaseCapture: function(srcElement, eventType) {
                if(srcElement.releaseCapture){
                    srcElement.releaseCapture();
                }
                else if(window.captureEvents) {
                    window.captureEvents(eventType);
                }
            },

            /* 阻止事件向上冒泡 */
            cancelBubble: function(ev) {
                if( ev.stopPropagation ) {
                    ev.stopPropagation();
                }
                else {
                    ev.cancelBubble = true;
                }
            },

            /** 模拟事件 */
            createEventObject: function() { return new Object(); }
        }
    });

    $.extend({

        EventFirer: function(obj, eventName) {
            this.fire = function (ev) {
                var func = obj[eventName];
                if( func ) {
                    var funcType = typeof(func);
                    if("string" == funcType) {
                        return eval(func + "(ev)");
                    }
                    else if ("function" == funcType) {
                        if(ev) ev._source = obj;
                        return func(ev);
                    }
                }
            }
        }

    });

})(tssJS);

/*********************************** 事件（Event）函数  end **********************************/

/*********************************** XML相关操作函数  start **********************************/

;(function($) {

    String.prototype.convertEntry = function() {
        return this.replace(/\&/g, "&amp;").replace(/\"/g, "&quot;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
    }

    String.prototype.revertEntity = function() {
        return this.replace(/&quot;/g, "\"").replace(/&lt;/g, "\<").replace(/&gt;/g, "\>").replace(/&amp;/g, "\&");
    }

    String.prototype.convertCDATA = function() {
        return this.replace(/\<\!\[CDATA\[/g, "&lt;![CDATA[").replace(/\]\]>/g, "]]&gt;");
    }

    String.prototype.revertCDATA = function() {
        return this.replace(/&lt;\!\[CDATA\[/g, "<![CDATA[").replace(/\]\]&gt;/g, "]]>");
    }

    $.extend({

        XML : {
            _NODE_TYPE_ELEMENT    : 1,
            _NODE_TYPE_ATTRIBUTE  : 2,
            _NODE_TYPE_TEXT       : 3,
            _NODE_TYPE_CDATA      : 4,
            _NODE_TYPE_COMMENT    : 8,
            _NODE_TYPE_DOCUMENT   : 9,

            /* 将字符串转化成xml节点对象 */
            toNode: function(xml) {
                xml = xml.revertEntity();
                return $.parseXML(xml).documentElement;
            },

            toString: function(element) {
                return $.XML.toXml(element);
            },

            getText: function(node) {
                return node ? (node.text || node.textContent || "").trim() : ""; // chrome 用 textContent
            },

            setText: function(node, textValue) {
                node.text = textValue;
                if (node.textContent || node.textContent == "") {
                    node.textContent = textValue; // chrome
                }
            },

            EMPTY_XML_DOM: (function() {
                var parser = new DOMParser();
                var xmlDom = parser.parseFromString("<null/>", "text/xml");
                xmlDom.parser = parser;
 
                return xmlDom;
            })(),

            createNode: function(name) {
                return $.XML.EMPTY_XML_DOM.createElement(name);
            },

            createCDATA: function(data) {
                data = String(data).convertCDATA();
                if(window.DOMParser) {
                    return $.parseXML("<root><![CDATA[" + data + "]]></root>").documentElement.firstChild;
                }
                else {
                    return $.XML.EMPTY_XML_DOM.createCDATASection(data);
                }
            },

            appendCDATA: function(name, data) {
                var xmlNode   = $.XML.createNode(name);
                var cdataNode = $.XML.createCDATA(data);
                xmlNode.appendChild(cdataNode);
                return xmlNode;
            },

            getCDATA: function(pnode, name) {
                var nodes = pnode.getElementsByTagName(name);
                if(nodes.length == 0) return null;

                var cdataValue = $.XML.getText(nodes[0]);
                return cdataValue.revertCDATA();
            },

            setCDATA: function(pnode, name, value) {               
                var cdateNode = $.XML.appendCDATA(name, value);

                var oldNode = pnode.getElementsByTagName(name)[0];
                if(oldNode == null) {
                    pnode.appendChild(cdateNode);
                }
                else {
                    $.removeNode(oldNode.firstChild);
                    oldNode.appendChild(cdateNode);
                }
            },

            removeCDATA: function(pnode, name) {
                var node = pnode.getElementsByTagName(name)[0];
                if( node ) {
                    pnode.removeChild(node);
                }
            },

            /* 获取解析错误 */
            getParseError: function(xmlDom) {
                if(xmlDom == null) return "";

                var errorNodes = xmlDom.getElementsByTagName("parsererror");
                if(errorNodes.length > 0) {
                    return errorNodes[0].innerHTML;
                }
                return "";
            },

            toXml: function(xml) {
                var xmlSerializer = new XMLSerializer();
                return xmlSerializer.serializeToString(xml.documentElement || xml);
            }
        }
    });

})(tssJS);