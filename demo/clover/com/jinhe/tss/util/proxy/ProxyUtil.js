var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":23631,"methods":[{"el":41,"sc":2,"sl":27}],"name":"ProxyUtil","sl":19}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_162":{"methods":[{"sl":27}],"name":"testProxy","pass":true,"statements":[{"sl":28},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":36},{"sl":37},{"sl":38},{"sl":40}]},"test_211":{"methods":[{"sl":27}],"name":"test","pass":true,"statements":[{"sl":28},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":36},{"sl":37},{"sl":38},{"sl":40}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [162, 211], [162, 211], [], [162, 211], [162, 211], [162, 211], [162, 211], [], [], [162, 211], [162, 211], [162, 211], [], [162, 211], [], []]
