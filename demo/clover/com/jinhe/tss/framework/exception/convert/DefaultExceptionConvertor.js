var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":13,"id":5752,"methods":[{"el":12,"sc":5,"sl":10}],"name":"DefaultExceptionConvertor","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_121":{"methods":[{"sl":10}],"name":"testCrossAppAndLogout","pass":true,"statements":[{"sl":11}]},"test_202":{"methods":[{"sl":10}],"name":"test","pass":true,"statements":[{"sl":11}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [121, 202], [121, 202], [], []]
