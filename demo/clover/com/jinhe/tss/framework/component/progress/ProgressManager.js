var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":39,"id":8300,"methods":[{"el":22,"sc":2,"sl":18},{"el":34,"sc":4,"sl":32},{"el":38,"sc":2,"sl":24}],"name":"ProgressManager","sl":12}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_111":{"methods":[{"sl":32}],"name":"testProgressInMultiThread2","pass":true,"statements":[{"sl":33}]},"test_199":{"methods":[{"sl":32}],"name":"testProgressInMultiThread","pass":true,"statements":[{"sl":33}]},"test_65":{"methods":[{"sl":18},{"sl":24},{"sl":32}],"name":"syncData","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":25},{"sl":26},{"sl":27},{"sl":29},{"sl":31},{"sl":33},{"sl":37}]},"test_99":{"methods":[{"sl":18},{"sl":24},{"sl":32}],"name":"testArticlePublish","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":25},{"sl":26},{"sl":27},{"sl":29},{"sl":31},{"sl":33},{"sl":37}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [99, 65], [99, 65], [99, 65], [99, 65], [], [], [99, 65], [99, 65], [99, 65], [99, 65], [], [99, 65], [], [99, 65], [111, 99, 65, 199], [111, 99, 65, 199], [], [], [], [99, 65], [], []]
