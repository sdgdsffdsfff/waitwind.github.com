var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":22,"id":12097,"methods":[{"el":21,"sc":5,"sl":17}],"name":"SimpleRequestServlet","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_117":{"methods":[{"sl":17}],"name":"testDoPost","pass":true,"statements":[{"sl":20}]},"test_124":{"methods":[{"sl":17}],"name":"testDoPost","pass":true,"statements":[{"sl":20}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [117, 124], [], [], [117, 124], [], []]
