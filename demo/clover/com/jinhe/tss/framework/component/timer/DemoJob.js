var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":11,"id":10152,"methods":[{"el":9,"sc":2,"sl":5}],"name":"DemoJob","sl":3}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_132":{"methods":[{"sl":5}],"name":"testSchedulerBean","pass":true,"statements":[{"sl":8}]},"test_169":{"methods":[{"sl":5}],"name":"test1","pass":true,"statements":[{"sl":8}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [132, 169], [], [], [132, 169], [], [], []]
