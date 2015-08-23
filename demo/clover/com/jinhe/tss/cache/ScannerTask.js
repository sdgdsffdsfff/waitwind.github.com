var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":78,"id":23563,"methods":[{"el":33,"sc":5,"sl":28},{"el":57,"sc":5,"sl":35},{"el":61,"sc":5,"sl":59},{"el":69,"sc":5,"sl":63},{"el":73,"sc":5,"sl":71},{"el":77,"sc":5,"sl":75}],"name":"ScannerTask","sl":13}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_210":{"methods":[{"sl":28},{"sl":75}],"name":"testTaskPool","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":76}]},"test_212":{"methods":[{"sl":28},{"sl":35},{"sl":71},{"sl":75}],"name":"testPoolPerformance","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":36},{"sl":37},{"sl":38},{"sl":42},{"sl":43},{"sl":46},{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":72},{"sl":76}]},"test_216":{"methods":[{"sl":28}],"name":"testAbstractPool","pass":true,"statements":[{"sl":29},{"sl":30}]},"test_240":{"methods":[{"sl":28}],"name":"testCacheStrategy","pass":true,"statements":[{"sl":29},{"sl":30}]},"test_241":{"methods":[{"sl":28},{"sl":35},{"sl":71},{"sl":75}],"name":"testPool","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":36},{"sl":37},{"sl":38},{"sl":42},{"sl":43},{"sl":46},{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":72},{"sl":76}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [210, 216, 240, 212, 241], [210, 216, 240, 212, 241], [210, 216, 240, 212, 241], [], [], [], [], [212, 241], [212, 241], [212, 241], [212, 241], [], [], [], [212, 241], [212, 241], [], [], [212, 241], [], [], [212, 241], [212, 241], [212, 241], [212, 241], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [212, 241], [212, 241], [], [], [210, 212, 241], [210, 212, 241], [], [], []]
