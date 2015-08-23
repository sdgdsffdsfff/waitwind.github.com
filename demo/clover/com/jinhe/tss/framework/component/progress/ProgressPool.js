var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":33,"id":8313,"methods":[{"el":24,"sc":2,"sl":22},{"el":28,"sc":2,"sl":26},{"el":32,"sc":2,"sl":30}],"name":"ProgressPool","sl":12}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_111":{"methods":[{"sl":26}],"name":"testProgressInMultiThread2","pass":true,"statements":[{"sl":27}]},"test_199":{"methods":[{"sl":26}],"name":"testProgressInMultiThread","pass":true,"statements":[{"sl":27}]},"test_65":{"methods":[{"sl":22},{"sl":26}],"name":"syncData","pass":true,"statements":[{"sl":23},{"sl":27}]},"test_86":{"methods":[{"sl":22},{"sl":26}],"name":"getProgressActionSupport","pass":true,"statements":[{"sl":23},{"sl":27}]},"test_99":{"methods":[{"sl":22},{"sl":26}],"name":"testArticlePublish","pass":true,"statements":[{"sl":23},{"sl":27}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [99, 65, 86], [99, 65, 86], [], [], [111, 99, 65, 199, 86], [111, 99, 65, 199, 86], [], [], [], [], [], []]
