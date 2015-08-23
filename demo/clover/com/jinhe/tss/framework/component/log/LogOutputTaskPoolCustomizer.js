var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":15,"id":11158,"methods":[{"el":13,"sc":5,"sl":11}],"name":"LogOutputTaskPoolCustomizer","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_143":{"methods":[{"sl":11}],"name":"test","pass":true,"statements":[{"sl":12}]},"test_203":{"methods":[{"sl":11}],"name":"testJob","pass":true,"statements":[{"sl":12}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [143, 203], [143, 203], [], [], [], []]
