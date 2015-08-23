var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":20,"id":8972,"methods":[{"el":13,"sc":2,"sl":9},{"el":18,"sc":2,"sl":16}],"name":"FrameworkTest","sl":7}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_165":{"methods":[{"sl":9}],"name":"testGetVersion","pass":true,"statements":[{"sl":11},{"sl":12}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [165], [], [165], [165], [], [], [], [], [], [], [], []]
