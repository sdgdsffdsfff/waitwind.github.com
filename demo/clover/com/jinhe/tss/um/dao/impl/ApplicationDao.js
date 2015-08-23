var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":32,"id":425,"methods":[{"el":16,"sc":5,"sl":14},{"el":21,"sc":2,"sl":18},{"el":30,"sc":2,"sl":24}],"name":"ApplicationDao","sl":12}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_14":{"methods":[{"sl":18}],"name":"testSyncDB","pass":true,"statements":[{"sl":19},{"sl":20}]},"test_30":{"methods":[{"sl":24}],"name":"test","pass":true,"statements":[{"sl":25}]},"test_47":{"methods":[{"sl":18}],"name":"testSyncLDAP","pass":true,"statements":[{"sl":19},{"sl":20}]},"test_61":{"methods":[{"sl":18},{"sl":24}],"name":"testApplication","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29}]},"test_65":{"methods":[{"sl":18}],"name":"syncData","pass":true,"statements":[{"sl":19},{"sl":20}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [61, 65, 14, 47], [61, 65, 14, 47], [61, 65, 14, 47], [], [], [], [61, 30], [61, 30], [61], [61], [61], [61], [], [], []]
