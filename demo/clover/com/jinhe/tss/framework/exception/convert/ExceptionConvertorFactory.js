var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":34,"id":5754,"methods":[{"el":33,"sc":5,"sl":17}],"name":"ExceptionConvertorFactory","sl":10}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":17}],"name":"test","pass":true,"statements":[{"sl":18},{"sl":19},{"sl":20},{"sl":28},{"sl":29},{"sl":32}]},"test_145":{"methods":[{"sl":17}],"name":"testCreateConvter","pass":true,"statements":[{"sl":18},{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":25},{"sl":28},{"sl":29},{"sl":32}]},"test_202":{"methods":[{"sl":17}],"name":"test","pass":true,"statements":[{"sl":18},{"sl":32}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [202, 145, 0], [202, 145, 0], [145, 0], [145, 0], [145], [145], [145], [], [145], [], [], [145, 0], [145, 0], [], [], [202, 145, 0], [], []]
