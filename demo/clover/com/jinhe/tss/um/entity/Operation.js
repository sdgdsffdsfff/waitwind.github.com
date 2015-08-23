var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":174,"id":4255,"methods":[{"el":70,"sc":2,"sl":68},{"el":74,"sc":2,"sl":72},{"el":78,"sc":2,"sl":76},{"el":82,"sc":2,"sl":80},{"el":86,"sc":2,"sl":84},{"el":90,"sc":2,"sl":88},{"el":94,"sc":2,"sl":92},{"el":98,"sc":2,"sl":96},{"el":102,"sc":2,"sl":100},{"el":106,"sc":2,"sl":104},{"el":110,"sc":2,"sl":108},{"el":114,"sc":2,"sl":112},{"el":118,"sc":2,"sl":116},{"el":122,"sc":2,"sl":120},{"el":126,"sc":2,"sl":124},{"el":130,"sc":2,"sl":128},{"el":134,"sc":2,"sl":132},{"el":138,"sc":2,"sl":136},{"el":146,"sc":2,"sl":140},{"el":157,"sc":2,"sl":148},{"el":166,"sc":2,"sl":159},{"el":169,"sc":2,"sl":168},{"el":173,"sc":2,"sl":171}],"name":"Operation","sl":31}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_30":{"methods":[{"sl":80},{"sl":88},{"sl":104},{"sl":112},{"sl":120},{"sl":128},{"sl":136}],"name":"test","pass":true,"statements":[{"sl":81},{"sl":89},{"sl":105},{"sl":113},{"sl":121},{"sl":129},{"sl":137}]},"test_4":{"methods":[{"sl":68},{"sl":84},{"sl":108},{"sl":132}],"name":"testResourceType","pass":true,"statements":[{"sl":69},{"sl":85},{"sl":109},{"sl":133}]},"test_61":{"methods":[{"sl":84},{"sl":132},{"sl":140}],"name":"testApplication","pass":true,"statements":[{"sl":85},{"sl":133},{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":145}]},"test_78":{"methods":[{"sl":68},{"sl":72},{"sl":76},{"sl":80},{"sl":84},{"sl":88},{"sl":92},{"sl":96},{"sl":100},{"sl":104},{"sl":108},{"sl":112},{"sl":116},{"sl":120},{"sl":124},{"sl":128},{"sl":132},{"sl":136},{"sl":140},{"sl":148},{"sl":171}],"name":"testOperation","pass":true,"statements":[{"sl":69},{"sl":73},{"sl":77},{"sl":81},{"sl":85},{"sl":89},{"sl":93},{"sl":97},{"sl":101},{"sl":105},{"sl":109},{"sl":113},{"sl":117},{"sl":121},{"sl":125},{"sl":129},{"sl":133},{"sl":137},{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":145},{"sl":149},{"sl":150},{"sl":151},{"sl":152},{"sl":153},{"sl":154},{"sl":155},{"sl":156},{"sl":172}]},"test_87":{"methods":[{"sl":76},{"sl":100},{"sl":108},{"sl":159}],"name":"testRolePermission","pass":true,"statements":[{"sl":77},{"sl":101},{"sl":109},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":165}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [78, 4], [78, 4], [], [], [78], [78], [], [], [78, 87], [78, 87], [], [], [30, 78], [30, 78], [], [], [61, 78, 4], [61, 78, 4], [], [], [30, 78], [30, 78], [], [], [78], [78], [], [], [78], [78], [], [], [78, 87], [78, 87], [], [], [30, 78], [30, 78], [], [], [78, 87, 4], [78, 87, 4], [], [], [30, 78], [30, 78], [], [], [78], [78], [], [], [30, 78], [30, 78], [], [], [78], [78], [], [], [30, 78], [30, 78], [], [], [61, 78, 4], [61, 78, 4], [], [], [30, 78], [30, 78], [], [], [61, 78], [61, 78], [61, 78], [61, 78], [61, 78], [61, 78], [], [], [78], [78], [78], [78], [78], [78], [78], [78], [78], [], [], [87], [87], [87], [87], [87], [87], [87], [], [], [], [], [], [78], [78], [], []]