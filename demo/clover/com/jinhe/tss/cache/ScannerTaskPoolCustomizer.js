var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":11,"id":23595,"methods":[{"el":9,"sc":2,"sl":7}],"name":"ScannerTaskPoolCustomizer","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_210":{"methods":[{"sl":7}],"name":"testTaskPool","pass":true,"statements":[{"sl":8}]},"test_212":{"methods":[{"sl":7}],"name":"testPoolPerformance","pass":true,"statements":[{"sl":8}]},"test_216":{"methods":[{"sl":7}],"name":"testAbstractPool","pass":true,"statements":[{"sl":8}]},"test_240":{"methods":[{"sl":7}],"name":"testCacheStrategy","pass":true,"statements":[{"sl":8}]},"test_241":{"methods":[{"sl":7}],"name":"testPool","pass":true,"statements":[{"sl":8}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [210, 216, 240, 212, 241], [210, 216, 240, 212, 241], [], [], []]
