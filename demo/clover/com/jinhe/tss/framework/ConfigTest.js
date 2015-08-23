var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":17,"id":8921,"methods":[{"el":16,"sc":2,"sl":8}],"name":"ConfigTest","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_175":{"methods":[{"sl":8}],"name":"testConfig","pass":true,"statements":[{"sl":10},{"sl":12},{"sl":14},{"sl":15}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [175], [], [175], [], [175], [], [175], [175], [], []]
