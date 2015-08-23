var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":31,"id":8990,"methods":[{"el":16,"sc":2,"sl":9},{"el":29,"sc":2,"sl":18}],"name":"MailUtilTest","sl":7}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_169":{"methods":[{"sl":9}],"name":"test1","pass":true,"statements":[{"sl":11},{"sl":12}]},"test_200":{"methods":[{"sl":18}],"name":"test2","pass":true,"statements":[{"sl":20},{"sl":21},{"sl":25},{"sl":26}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [169], [], [169], [169], [], [], [], [], [], [200], [], [200], [200], [], [], [], [200], [200], [], [], [], [], []]
