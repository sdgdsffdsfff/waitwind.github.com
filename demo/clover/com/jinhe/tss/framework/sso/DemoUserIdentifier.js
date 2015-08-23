var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":19,"id":8073,"methods":[{"el":17,"sc":5,"sl":15}],"name":"DemoUserIdentifier","sl":13}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_121":{"methods":[{"sl":15}],"name":"testCrossAppAndLogout","pass":true,"statements":[{"sl":16}]},"test_134":{"methods":[{"sl":15}],"name":"testLoginFirstTime","pass":true,"statements":[{"sl":16}]},"test_173":{"methods":[{"sl":15}],"name":"testDoFilter4LoginOk","pass":true,"statements":[{"sl":16}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [121, 173, 134], [121, 173, 134], [], [], []]
