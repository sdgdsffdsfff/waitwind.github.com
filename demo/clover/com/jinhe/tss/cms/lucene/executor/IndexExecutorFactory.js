var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":18,"id":16689,"methods":[{"el":9,"sc":5,"sl":8},{"el":17,"sc":5,"sl":11}],"name":"IndexExecutorFactory","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_22":{"methods":[{"sl":11}],"name":"testIndexJob2","pass":true,"statements":[{"sl":12},{"sl":13},{"sl":16}]},"test_29":{"methods":[{"sl":11}],"name":"testCreateIndex","pass":true,"statements":[{"sl":12},{"sl":16}]},"test_88":{"methods":[{"sl":11}],"name":"testIndexJob","pass":true,"statements":[{"sl":12},{"sl":13}]},"test_99":{"methods":[{"sl":11}],"name":"testArticlePublish","pass":true,"statements":[{"sl":12},{"sl":13}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [22, 99, 29, 88], [22, 99, 29, 88], [22, 99, 88], [], [], [22, 29], [], [], []]
