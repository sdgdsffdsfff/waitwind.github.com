var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":13,"id":7874,"methods":[{"el":12,"sc":5,"sl":10}],"name":"DoNothingLoginCustomizer","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_119":{"methods":[{"sl":10}],"name":"testDoFilter4OnlineException2Anonymous","pass":true,"statements":[]},"test_121":{"methods":[{"sl":10}],"name":"testCrossAppAndLogout","pass":true,"statements":[]},"test_134":{"methods":[{"sl":10}],"name":"testLoginFirstTime","pass":true,"statements":[]},"test_166":{"methods":[{"sl":10}],"name":"testDoFilter4AnonymousLogin","pass":true,"statements":[]},"test_173":{"methods":[{"sl":10}],"name":"testDoFilter4LoginOk","pass":true,"statements":[]},"test_201":{"methods":[{"sl":10}],"name":"testDoFilter4OnlineOk","pass":true,"statements":[]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [121, 201, 119, 173, 134, 166], [], [], [], [], []]
