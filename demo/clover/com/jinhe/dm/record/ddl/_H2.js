var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":10,"id":21317,"methods":[{"el":9,"sc":2,"sl":7}],"name":"_H2","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":7}],"name":"test","pass":true,"statements":[{"sl":8}]},"test_38":{"methods":[{"sl":7}],"name":"testWashDataJob","pass":true,"statements":[{"sl":8}]},"test_81":{"methods":[{"sl":7}],"name":"testRecordCRUD","pass":true,"statements":[{"sl":8}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [38, 81, 0], [38, 81, 0], [], []]
