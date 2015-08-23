var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":46,"id":9090,"methods":[{"el":17,"sc":2,"sl":14},{"el":27,"sc":2,"sl":24},{"el":38,"sc":2,"sl":35}],"name":"ContextSupportThread","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_111":{"methods":[{"sl":35}],"name":"testProgressInMultiThread2","pass":true,"statements":[{"sl":36},{"sl":37}]},"test_164":{"methods":[{"sl":14}],"name":"testGetRequestContext4MultiThread","pass":true,"statements":[{"sl":15},{"sl":16}]},"test_199":{"methods":[{"sl":35}],"name":"testProgressInMultiThread","pass":true,"statements":[{"sl":36},{"sl":37}]},"test_65":{"methods":[{"sl":24},{"sl":35}],"name":"syncData","pass":true,"statements":[{"sl":25},{"sl":26},{"sl":36},{"sl":37}]},"test_99":{"methods":[{"sl":24},{"sl":35}],"name":"testArticlePublish","pass":true,"statements":[{"sl":25},{"sl":26},{"sl":36},{"sl":37}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [164], [164], [164], [], [], [], [], [], [], [], [99, 65], [99, 65], [99, 65], [], [], [], [], [], [], [], [], [111, 99, 65, 199], [111, 99, 65, 199], [111, 99, 65, 199], [], [], [], [], [], [], [], [], [], []]
