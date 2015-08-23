var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":25,"id":12361,"methods":[{"el":16,"sc":17,"sl":14},{"el":20,"sc":5,"sl":18},{"el":23,"sc":5,"sl":11}],"name":"MockIdentityGetterFactory","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_129":{"methods":[{"sl":14}],"name":"testIdentify4Login","pass":true,"statements":[{"sl":15}]},"test_201":{"methods":[{"sl":11},{"sl":14}],"name":"testDoFilter4OnlineOk","pass":true,"statements":[{"sl":12},{"sl":15}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [201], [201], [], [201, 129], [201, 129], [], [], [], [], [], [], [], [], [], []]
