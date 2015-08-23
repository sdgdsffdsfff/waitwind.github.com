var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":23,"id":17233,"methods":[{"el":21,"sc":2,"sl":12}],"name":"ArticleHelperTest","sl":10}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_205":{"methods":[{"sl":12}],"name":"test","pass":true,"statements":[{"sl":14},{"sl":15},{"sl":16},{"sl":18},{"sl":19}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [205], [], [205], [205], [205], [], [205], [205], [], [], [], []]
