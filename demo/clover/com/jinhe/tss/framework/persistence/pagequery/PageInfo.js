var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":140,"id":6124,"methods":[{"el":30,"sc":5,"sl":28},{"el":35,"sc":5,"sl":33},{"el":40,"sc":5,"sl":38},{"el":45,"sc":5,"sl":43},{"el":54,"sc":5,"sl":48},{"el":62,"sc":5,"sl":60},{"el":67,"sc":5,"sl":65},{"el":72,"sc":5,"sl":70},{"el":77,"sc":5,"sl":75},{"el":82,"sc":5,"sl":80},{"el":87,"sc":5,"sl":85},{"el":96,"sc":5,"sl":90},{"el":101,"sc":5,"sl":99},{"el":106,"sc":5,"sl":104},{"el":115,"sc":5,"sl":109},{"el":131,"sc":5,"sl":118},{"el":139,"sc":5,"sl":133}],"name":"PageInfo","sl":11}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":28},{"sl":33},{"sl":38},{"sl":43},{"sl":48},{"sl":60},{"sl":65},{"sl":70},{"sl":75},{"sl":80},{"sl":85},{"sl":90},{"sl":99},{"sl":104},{"sl":109},{"sl":118}],"name":"test","pass":true,"statements":[{"sl":29},{"sl":34},{"sl":39},{"sl":44},{"sl":49},{"sl":50},{"sl":52},{"sl":53},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":81},{"sl":86},{"sl":91},{"sl":92},{"sl":93},{"sl":95},{"sl":100},{"sl":105},{"sl":110},{"sl":111},{"sl":112},{"sl":119},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":130}]},"test_102":{"methods":[{"sl":28},{"sl":33},{"sl":48},{"sl":60},{"sl":75},{"sl":99},{"sl":104}],"name":"testMenuModule","pass":true,"statements":[{"sl":29},{"sl":34},{"sl":49},{"sl":50},{"sl":61},{"sl":76},{"sl":100},{"sl":105}]},"test_122":{"methods":[{"sl":48},{"sl":70},{"sl":75},{"sl":90},{"sl":99},{"sl":104},{"sl":109}],"name":"testGetPageRows","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":52},{"sl":53},{"sl":71},{"sl":76},{"sl":91},{"sl":92},{"sl":93},{"sl":95},{"sl":100},{"sl":105},{"sl":110},{"sl":111},{"sl":112},{"sl":114}]},"test_123":{"methods":[{"sl":75},{"sl":90},{"sl":99},{"sl":104}],"name":"testGetTotalPages","pass":true,"statements":[{"sl":76},{"sl":91},{"sl":92},{"sl":93},{"sl":95},{"sl":100},{"sl":105}]},"test_126":{"methods":[{"sl":28},{"sl":33},{"sl":48},{"sl":60},{"sl":75},{"sl":104}],"name":"testPaginationQueryBySQL","pass":true,"statements":[{"sl":29},{"sl":34},{"sl":49},{"sl":50},{"sl":61},{"sl":76},{"sl":105}]},"test_127":{"methods":[{"sl":48},{"sl":70},{"sl":75},{"sl":90},{"sl":99},{"sl":104}],"name":"testGetPageNum","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":52},{"sl":53},{"sl":71},{"sl":76},{"sl":91},{"sl":92},{"sl":93},{"sl":95},{"sl":100},{"sl":105}]},"test_128":{"methods":[{"sl":75},{"sl":80}],"name":"testGetPageSize","pass":true,"statements":[{"sl":76},{"sl":81}]},"test_132":{"methods":[{"sl":28},{"sl":33},{"sl":48},{"sl":60},{"sl":75},{"sl":99},{"sl":104}],"name":"testSchedulerBean","pass":true,"statements":[{"sl":29},{"sl":34},{"sl":49},{"sl":50},{"sl":61},{"sl":76},{"sl":100},{"sl":105}]},"test_146":{"methods":[{"sl":28},{"sl":33},{"sl":48},{"sl":60},{"sl":75},{"sl":99},{"sl":104}],"name":"testUMToCreateLog","pass":true,"statements":[{"sl":29},{"sl":34},{"sl":49},{"sl":50},{"sl":61},{"sl":76},{"sl":100},{"sl":105}]},"test_156":{"methods":[{"sl":28},{"sl":33}],"name":"testGetItems","pass":true,"statements":[{"sl":29},{"sl":34}]},"test_160":{"methods":[{"sl":28},{"sl":33},{"sl":38},{"sl":43},{"sl":48},{"sl":60},{"sl":65},{"sl":70},{"sl":75},{"sl":85},{"sl":90},{"sl":99},{"sl":104},{"sl":109},{"sl":118}],"name":"testLogAction","pass":true,"statements":[{"sl":29},{"sl":34},{"sl":39},{"sl":44},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":86},{"sl":91},{"sl":92},{"sl":93},{"sl":95},{"sl":100},{"sl":105},{"sl":110},{"sl":111},{"sl":114},{"sl":119},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":130}]},"test_163":{"methods":[{"sl":38},{"sl":48},{"sl":70},{"sl":75},{"sl":90},{"sl":99},{"sl":104}],"name":"testGetNextPageNum","pass":true,"statements":[{"sl":39},{"sl":49},{"sl":50},{"sl":52},{"sl":53},{"sl":71},{"sl":76},{"sl":91},{"sl":92},{"sl":93},{"sl":95},{"sl":100},{"sl":105}]},"test_167":{"methods":[{"sl":28},{"sl":33},{"sl":48},{"sl":60},{"sl":75},{"sl":99},{"sl":104}],"name":"testParamAction","pass":true,"statements":[{"sl":29},{"sl":34},{"sl":49},{"sl":50},{"sl":61},{"sl":76},{"sl":100},{"sl":105}]},"test_170":{"methods":[{"sl":43},{"sl":70},{"sl":75},{"sl":90},{"sl":99},{"sl":104}],"name":"testGetLastPageNum","pass":true,"statements":[{"sl":44},{"sl":71},{"sl":76},{"sl":91},{"sl":92},{"sl":93},{"sl":95},{"sl":100},{"sl":105}]},"test_172":{"methods":[{"sl":70},{"sl":85},{"sl":104}],"name":"testGetPrePageNum","pass":true,"statements":[{"sl":71},{"sl":86},{"sl":105}]},"test_177":{"methods":[{"sl":65},{"sl":70},{"sl":104}],"name":"testGetFirstPageNum","pass":true,"statements":[{"sl":66},{"sl":71},{"sl":105}]},"test_179":{"methods":[{"sl":38},{"sl":43},{"sl":48},{"sl":65},{"sl":75},{"sl":85},{"sl":90},{"sl":99},{"sl":109},{"sl":118},{"sl":133}],"name":"testToString","pass":true,"statements":[{"sl":39},{"sl":44},{"sl":49},{"sl":50},{"sl":66},{"sl":76},{"sl":86},{"sl":91},{"sl":92},{"sl":95},{"sl":100},{"sl":110},{"sl":111},{"sl":112},{"sl":119},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":130},{"sl":134},{"sl":135},{"sl":136},{"sl":137},{"sl":138}]},"test_31":{"methods":[{"sl":70}],"name":"getUMQueryCondition","pass":true,"statements":[{"sl":71}]},"test_37":{"methods":[{"sl":28},{"sl":33},{"sl":38},{"sl":43},{"sl":48},{"sl":60},{"sl":65},{"sl":70},{"sl":75},{"sl":85},{"sl":90},{"sl":99},{"sl":104},{"sl":109},{"sl":118}],"name":"test3","pass":true,"statements":[{"sl":29},{"sl":34},{"sl":39},{"sl":44},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":86},{"sl":91},{"sl":92},{"sl":93},{"sl":95},{"sl":100},{"sl":105},{"sl":110},{"sl":111},{"sl":112},{"sl":119},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":130}]},"test_39":{"methods":[{"sl":28},{"sl":33},{"sl":48},{"sl":60},{"sl":75},{"sl":99},{"sl":104}],"name":"testDecoratorFunctions","pass":true,"statements":[{"sl":29},{"sl":34},{"sl":49},{"sl":50},{"sl":61},{"sl":76},{"sl":100},{"sl":105}]},"test_46":{"methods":[{"sl":28},{"sl":33},{"sl":38},{"sl":43},{"sl":48},{"sl":60},{"sl":65},{"sl":70},{"sl":75},{"sl":85},{"sl":90},{"sl":99},{"sl":104},{"sl":109},{"sl":118}],"name":"getUsersByGroup","pass":true,"statements":[{"sl":29},{"sl":34},{"sl":39},{"sl":44},{"sl":49},{"sl":52},{"sl":53},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":86},{"sl":91},{"sl":92},{"sl":93},{"sl":95},{"sl":100},{"sl":105},{"sl":110},{"sl":111},{"sl":112},{"sl":119},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":130}]},"test_54":{"methods":[{"sl":38},{"sl":43},{"sl":48},{"sl":65},{"sl":70},{"sl":75},{"sl":80},{"sl":85},{"sl":90},{"sl":99},{"sl":104},{"sl":109},{"sl":118}],"name":"testReportDisplay","pass":true,"statements":[{"sl":39},{"sl":44},{"sl":49},{"sl":52},{"sl":53},{"sl":66},{"sl":71},{"sl":76},{"sl":81},{"sl":86},{"sl":91},{"sl":92},{"sl":93},{"sl":95},{"sl":100},{"sl":105},{"sl":110},{"sl":111},{"sl":112},{"sl":119},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":130}]},"test_71":{"methods":[{"sl":28},{"sl":33},{"sl":48},{"sl":60},{"sl":75},{"sl":99},{"sl":104}],"name":"testPortalCRUD","pass":true,"statements":[{"sl":29},{"sl":34},{"sl":49},{"sl":50},{"sl":61},{"sl":76},{"sl":100},{"sl":105}]},"test_74":{"methods":[{"sl":38},{"sl":43},{"sl":48},{"sl":65},{"sl":70},{"sl":75},{"sl":80},{"sl":85},{"sl":90},{"sl":99},{"sl":104},{"sl":109},{"sl":118}],"name":"debugSQL","pass":true,"statements":[{"sl":39},{"sl":44},{"sl":49},{"sl":52},{"sl":53},{"sl":66},{"sl":71},{"sl":76},{"sl":81},{"sl":86},{"sl":91},{"sl":92},{"sl":93},{"sl":95},{"sl":100},{"sl":105},{"sl":110},{"sl":111},{"sl":112},{"sl":119},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":130}]},"test_75":{"methods":[{"sl":28},{"sl":33},{"sl":48},{"sl":60},{"sl":75},{"sl":99},{"sl":104}],"name":"testChannelModule","pass":true,"statements":[{"sl":29},{"sl":34},{"sl":49},{"sl":50},{"sl":61},{"sl":76},{"sl":100},{"sl":105}]},"test_81":{"methods":[{"sl":28},{"sl":33},{"sl":48},{"sl":60},{"sl":75},{"sl":104}],"name":"testRecordCRUD","pass":true,"statements":[{"sl":29},{"sl":34},{"sl":49},{"sl":50},{"sl":61},{"sl":76},{"sl":105}]},"test_84":{"methods":[{"sl":28},{"sl":33},{"sl":48},{"sl":60},{"sl":75},{"sl":104}],"name":"testReportCRUD","pass":true,"statements":[{"sl":29},{"sl":34},{"sl":49},{"sl":50},{"sl":61},{"sl":76},{"sl":105}]},"test_93":{"methods":[{"sl":28},{"sl":33},{"sl":38},{"sl":43},{"sl":48},{"sl":60},{"sl":65},{"sl":70},{"sl":75},{"sl":85},{"sl":90},{"sl":99},{"sl":104},{"sl":109},{"sl":118}],"name":"testArticleModule","pass":true,"statements":[{"sl":29},{"sl":34},{"sl":39},{"sl":44},{"sl":49},{"sl":50},{"sl":52},{"sl":53},{"sl":61},{"sl":66},{"sl":71},{"sl":76},{"sl":86},{"sl":91},{"sl":92},{"sl":93},{"sl":95},{"sl":100},{"sl":105},{"sl":110},{"sl":111},{"sl":112},{"sl":119},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":130}]},"test_99":{"methods":[{"sl":28},{"sl":33},{"sl":48},{"sl":60},{"sl":70},{"sl":75},{"sl":80},{"sl":90},{"sl":99},{"sl":104}],"name":"testArticlePublish","pass":true,"statements":[{"sl":29},{"sl":34},{"sl":49},{"sl":50},{"sl":52},{"sl":53},{"sl":61},{"sl":71},{"sl":76},{"sl":81},{"sl":91},{"sl":92},{"sl":93},{"sl":95},{"sl":100},{"sl":105}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [71, 46, 39, 99, 81, 132, 102, 126, 167, 146, 93, 84, 0, 160, 37, 75, 156], [71, 46, 39, 99, 81, 132, 102, 126, 167, 146, 93, 84, 0, 160, 37, 75, 156], [], [], [], [71, 46, 39, 99, 81, 132, 102, 126, 167, 146, 93, 84, 0, 160, 37, 75, 156], [71, 46, 39, 99, 81, 132, 102, 126, 167, 146, 93, 84, 0, 160, 37, 75, 156], [], [], [], [46, 74, 93, 54, 163, 0, 160, 37, 179], [46, 74, 93, 54, 163, 0, 160, 37, 179], [], [], [], [46, 74, 93, 54, 0, 160, 37, 179, 170], [46, 74, 93, 54, 0, 160, 37, 179, 170], [], [], [], [71, 46, 39, 127, 99, 81, 132, 102, 122, 126, 167, 74, 146, 93, 84, 54, 163, 0, 160, 37, 75, 179], [71, 46, 39, 127, 99, 81, 132, 102, 122, 126, 167, 74, 146, 93, 84, 54, 163, 0, 160, 37, 75, 179], [71, 39, 127, 99, 81, 132, 102, 122, 126, 167, 146, 93, 84, 163, 0, 75, 179], [], [46, 127, 99, 122, 74, 93, 54, 163, 0, 160, 37], [46, 127, 99, 122, 74, 93, 54, 163, 0, 160, 37], [], [], [], [], [], [], [71, 46, 39, 99, 81, 132, 102, 126, 167, 146, 93, 84, 0, 160, 37, 75], [71, 46, 39, 99, 81, 132, 102, 126, 167, 146, 93, 84, 0, 160, 37, 75], [], [], [], [46, 74, 93, 177, 54, 0, 160, 37, 179], [46, 74, 93, 177, 54, 0, 160, 37, 179], [], [], [], [46, 127, 99, 31, 122, 172, 74, 93, 177, 54, 163, 0, 160, 37, 170], [46, 127, 99, 31, 122, 172, 74, 93, 177, 54, 163, 0, 160, 37, 170], [], [], [], [71, 46, 39, 127, 99, 81, 132, 102, 122, 126, 167, 123, 74, 128, 146, 93, 84, 54, 163, 0, 160, 37, 75, 179, 170], [71, 46, 39, 127, 99, 81, 132, 102, 122, 126, 167, 123, 74, 128, 146, 93, 84, 54, 163, 0, 160, 37, 75, 179, 170], [], [], [], [99, 74, 128, 54, 0], [99, 74, 128, 54, 0], [], [], [], [46, 172, 74, 93, 54, 0, 160, 37, 179], [46, 172, 74, 93, 54, 0, 160, 37, 179], [], [], [], [46, 127, 99, 122, 123, 74, 93, 54, 163, 0, 160, 37, 179, 170], [46, 127, 99, 122, 123, 74, 93, 54, 163, 0, 160, 37, 179, 170], [46, 127, 99, 122, 123, 74, 93, 54, 163, 0, 160, 37, 179, 170], [46, 127, 99, 122, 123, 74, 93, 54, 163, 0, 160, 37, 170], [], [46, 127, 99, 122, 123, 74, 93, 54, 163, 0, 160, 37, 179, 170], [], [], [], [71, 46, 39, 127, 99, 132, 102, 122, 167, 123, 74, 146, 93, 54, 163, 0, 160, 37, 75, 179, 170], [71, 46, 39, 127, 99, 132, 102, 122, 167, 123, 74, 146, 93, 54, 163, 0, 160, 37, 75, 179, 170], [], [], [], [71, 46, 39, 127, 99, 81, 132, 102, 122, 126, 172, 167, 123, 74, 146, 93, 84, 177, 54, 163, 0, 160, 37, 75, 170], [71, 46, 39, 127, 99, 81, 132, 102, 122, 126, 172, 167, 123, 74, 146, 93, 84, 177, 54, 163, 0, 160, 37, 75, 170], [], [], [], [46, 122, 74, 93, 54, 0, 160, 37, 179], [46, 122, 74, 93, 54, 0, 160, 37, 179], [46, 122, 74, 93, 54, 0, 160, 37, 179], [46, 122, 74, 93, 54, 0, 37, 179], [], [122, 160], [], [], [], [46, 74, 93, 54, 0, 160, 37, 179], [46, 74, 93, 54, 0, 160, 37, 179], [46, 74, 93, 54, 0, 160, 37, 179], [46, 74, 93, 54, 0, 160, 37, 179], [46, 74, 93, 54, 0, 160, 37, 179], [46, 74, 93, 54, 0, 160, 37, 179], [46, 74, 93, 54, 0, 160, 37, 179], [46, 74, 93, 54, 0, 160, 37, 179], [46, 74, 93, 54, 0, 160, 37, 179], [46, 74, 93, 54, 0, 160, 37, 179], [46, 74, 93, 54, 0, 160, 37, 179], [46, 74, 93, 54, 0, 160, 37, 179], [46, 74, 93, 54, 0, 160, 37, 179], [], [], [179], [179], [179], [179], [179], [179], [], []]