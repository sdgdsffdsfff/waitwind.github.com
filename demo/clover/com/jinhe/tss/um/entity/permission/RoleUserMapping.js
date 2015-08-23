var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":32,"id":383,"methods":[{"el":23,"sc":2,"sl":21},{"el":27,"sc":2,"sl":25},{"el":31,"sc":2,"sl":29}],"name":"RoleUserMapping","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_102":{"methods":[{"sl":25}],"name":"testMenuModule","pass":true,"statements":[{"sl":26}]},"test_35":{"methods":[{"sl":25}],"name":"testCRUD","pass":true,"statements":[{"sl":26}]},"test_52":{"methods":[{"sl":21},{"sl":25},{"sl":29}],"name":"test1","pass":true,"statements":[{"sl":22},{"sl":26},{"sl":30}]},"test_63":{"methods":[{"sl":25}],"name":"testExcute","pass":true,"statements":[{"sl":26}]},"test_87":{"methods":[{"sl":25}],"name":"testRolePermission","pass":true,"statements":[{"sl":26}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [52], [52], [], [], [35, 63, 87, 52, 102], [35, 63, 87, 52, 102], [], [], [52], [52], [], [], [], []]
