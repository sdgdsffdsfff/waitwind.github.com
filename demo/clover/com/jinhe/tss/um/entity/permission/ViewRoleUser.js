var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":24,"id":403,"methods":[{"el":19,"sc":2,"sl":17},{"el":23,"sc":2,"sl":21}],"name":"ViewRoleUser","sl":12}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_59":{"methods":[{"sl":17},{"sl":21}],"name":"test2","pass":true,"statements":[{"sl":18},{"sl":22}]},"test_87":{"methods":[{"sl":17}],"name":"testRolePermission","pass":true,"statements":[{"sl":18}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [59, 87], [59, 87], [], [], [59], [59], [], [], [], []]
