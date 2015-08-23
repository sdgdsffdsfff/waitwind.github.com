var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":47,"id":10178,"methods":[{"el":27,"sc":5,"sl":25},{"el":46,"sc":5,"sl":33}],"name":"Servlet1Login","sl":22}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_121":{"methods":[{"sl":25},{"sl":33}],"name":"testCrossAppAndLogout","pass":true,"statements":[{"sl":26},{"sl":35},{"sl":43},{"sl":44},{"sl":45}]},"test_134":{"methods":[{"sl":25},{"sl":33}],"name":"testLoginFirstTime","pass":true,"statements":[{"sl":26},{"sl":35},{"sl":43},{"sl":44},{"sl":45}]},"test_159":{"methods":[{"sl":25},{"sl":33}],"name":"testDoPost","pass":true,"statements":[{"sl":26},{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":43},{"sl":44},{"sl":45}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [121, 159, 134], [121, 159, 134], [], [], [], [], [], [], [121, 159, 134], [], [121, 159, 134], [159], [159], [159], [159], [], [], [], [121, 159, 134], [121, 159, 134], [121, 159, 134], [], [], [], []]
