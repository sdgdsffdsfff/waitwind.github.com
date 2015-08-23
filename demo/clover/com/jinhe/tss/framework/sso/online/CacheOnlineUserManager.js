var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":114,"id":9283,"methods":[{"el":53,"sc":5,"sl":34},{"el":69,"sc":2,"sl":55},{"el":73,"sc":5,"sl":71},{"el":77,"sc":5,"sl":75},{"el":97,"sc":5,"sl":79},{"el":109,"sc":5,"sl":107},{"el":113,"sc":5,"sl":111}],"name":"CacheOnlineUserManager","sl":28}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_108":{"methods":[{"sl":75},{"sl":79},{"sl":107}],"name":"testIdentify4Ok","pass":true,"statements":[{"sl":76},{"sl":80},{"sl":83},{"sl":86},{"sl":87},{"sl":93},{"sl":95},{"sl":96},{"sl":108}]},"test_115":{"methods":[{"sl":75}],"name":"testIdentify4NotLogin","pass":true,"statements":[{"sl":76}]},"test_119":{"methods":[{"sl":75},{"sl":79},{"sl":107}],"name":"testDoFilter4OnlineException2Anonymous","pass":true,"statements":[{"sl":76},{"sl":80},{"sl":83},{"sl":86},{"sl":87},{"sl":93},{"sl":95},{"sl":96},{"sl":108}]},"test_121":{"methods":[{"sl":34},{"sl":55},{"sl":75},{"sl":79},{"sl":107}],"name":"testCrossAppAndLogout","pass":true,"statements":[{"sl":36},{"sl":38},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":63},{"sl":64},{"sl":65},{"sl":68},{"sl":76},{"sl":80},{"sl":83},{"sl":86},{"sl":87},{"sl":93},{"sl":95},{"sl":96},{"sl":108}]},"test_129":{"methods":[{"sl":75},{"sl":79},{"sl":107}],"name":"testIdentify4Login","pass":true,"statements":[{"sl":76},{"sl":80},{"sl":83},{"sl":86},{"sl":87},{"sl":93},{"sl":95},{"sl":96},{"sl":108}]},"test_130":{"methods":[{"sl":34},{"sl":71},{"sl":75},{"sl":79},{"sl":107},{"sl":111}],"name":"testDBOnlineUserManager","pass":true,"statements":[{"sl":36},{"sl":38},{"sl":40},{"sl":41},{"sl":42},{"sl":45},{"sl":46},{"sl":47},{"sl":49},{"sl":50},{"sl":52},{"sl":72},{"sl":76},{"sl":80},{"sl":83},{"sl":86},{"sl":87},{"sl":93},{"sl":95},{"sl":96},{"sl":108},{"sl":112}]},"test_134":{"methods":[{"sl":79},{"sl":107}],"name":"testLoginFirstTime","pass":true,"statements":[{"sl":80},{"sl":83},{"sl":86},{"sl":87},{"sl":93},{"sl":95},{"sl":96},{"sl":108}]},"test_154":{"methods":[{"sl":75}],"name":"testDoFilter4OnlineException2AnonymousException","pass":true,"statements":[{"sl":76}]},"test_159":{"methods":[{"sl":55},{"sl":79},{"sl":107}],"name":"testDoPost","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":63},{"sl":64},{"sl":65},{"sl":68},{"sl":80},{"sl":83},{"sl":86},{"sl":87},{"sl":93},{"sl":95},{"sl":96},{"sl":108}]},"test_166":{"methods":[{"sl":79},{"sl":107}],"name":"testDoFilter4AnonymousLogin","pass":true,"statements":[{"sl":80},{"sl":83},{"sl":86},{"sl":87},{"sl":93},{"sl":95},{"sl":96},{"sl":108}]},"test_173":{"methods":[{"sl":79},{"sl":107}],"name":"testDoFilter4LoginOk","pass":true,"statements":[{"sl":80},{"sl":83},{"sl":86},{"sl":87},{"sl":93},{"sl":95},{"sl":96},{"sl":108}]},"test_18":{"methods":[{"sl":79},{"sl":107}],"name":"testIdentifyInUM","pass":true,"statements":[{"sl":80},{"sl":83},{"sl":86},{"sl":87},{"sl":93},{"sl":95},{"sl":96},{"sl":108}]},"test_189":{"methods":[{"sl":34},{"sl":71},{"sl":75},{"sl":107},{"sl":111}],"name":"testOnlineUserService","pass":true,"statements":[{"sl":36},{"sl":38},{"sl":72},{"sl":76},{"sl":108},{"sl":112}]},"test_201":{"methods":[{"sl":75},{"sl":79},{"sl":107}],"name":"testDoFilter4OnlineOk","pass":true,"statements":[{"sl":76},{"sl":80},{"sl":83},{"sl":86},{"sl":87},{"sl":93},{"sl":95},{"sl":96},{"sl":108}]},"test_28":{"methods":[{"sl":79},{"sl":107}],"name":"test","pass":true,"statements":[{"sl":80},{"sl":83},{"sl":86},{"sl":87},{"sl":93},{"sl":95},{"sl":96},{"sl":108}]},"test_66":{"methods":[{"sl":111}],"name":"getUserInfo","pass":true,"statements":[{"sl":112}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [121, 189, 130], [], [121, 189, 130], [], [121, 189, 130], [], [130], [130], [130], [], [], [130], [130], [130], [], [130], [130], [], [130], [], [], [159, 121], [159, 121], [159, 121], [159, 121], [159, 121], [], [], [], [159, 121], [159, 121], [159, 121], [], [], [159, 121], [], [], [189, 130], [189, 130], [], [], [108, 119, 115, 121, 201, 129, 154, 189, 130], [108, 119, 115, 121, 201, 129, 154, 189, 130], [], [], [108, 119, 159, 173, 18, 28, 121, 201, 129, 134, 130, 166], [108, 119, 159, 173, 18, 28, 121, 201, 129, 134, 130, 166], [], [], [108, 119, 159, 173, 18, 28, 121, 201, 129, 134, 130, 166], [], [], [108, 119, 159, 173, 18, 28, 121, 201, 129, 134, 130, 166], [108, 119, 159, 173, 18, 28, 121, 201, 129, 134, 130, 166], [], [], [], [], [], [108, 119, 159, 173, 18, 28, 121, 201, 129, 134, 130, 166], [], [108, 119, 159, 173, 18, 28, 121, 201, 129, 134, 130, 166], [108, 119, 159, 173, 18, 28, 121, 201, 129, 134, 130, 166], [], [], [], [], [], [], [], [], [], [], [108, 119, 159, 173, 18, 28, 121, 201, 129, 134, 189, 130, 166], [108, 119, 159, 173, 18, 28, 121, 201, 129, 134, 189, 130, 166], [], [], [66, 189, 130], [66, 189, 130], [], []]