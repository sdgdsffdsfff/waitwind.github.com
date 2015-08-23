var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":411,"methods":[{"el":17,"sc":2,"sl":15},{"el":21,"sc":2,"sl":19},{"el":25,"sc":2,"sl":23},{"el":29,"sc":2,"sl":27},{"el":33,"sc":2,"sl":31},{"el":37,"sc":2,"sl":35},{"el":41,"sc":2,"sl":39}],"name":"ViewRoleUserId","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_59":{"methods":[{"sl":15},{"sl":19},{"sl":23},{"sl":27},{"sl":31},{"sl":35},{"sl":39}],"name":"test2","pass":true,"statements":[{"sl":16},{"sl":20},{"sl":24},{"sl":28},{"sl":32},{"sl":36},{"sl":40}]},"test_87":{"methods":[{"sl":15}],"name":"testRolePermission","pass":true,"statements":[{"sl":16}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [59, 87], [59, 87], [], [], [59], [59], [], [], [59], [59], [], [], [59], [59], [], [], [59], [59], [], [], [59], [59], [], [], [59], [59], [], [], [], []]
