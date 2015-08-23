var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":74,"id":4483,"methods":[{"el":37,"sc":5,"sl":34},{"el":41,"sc":2,"sl":39},{"el":45,"sc":2,"sl":43},{"el":49,"sc":2,"sl":47},{"el":53,"sc":2,"sl":51},{"el":57,"sc":2,"sl":55},{"el":61,"sc":2,"sl":59},{"el":65,"sc":2,"sl":63},{"el":69,"sc":2,"sl":67},{"el":73,"sc":2,"sl":71}],"name":"RoleUser","sl":24}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_21":{"methods":[{"sl":51},{"sl":59},{"sl":67}],"name":"testGeneralSearch","pass":true,"statements":[{"sl":52},{"sl":60},{"sl":68}]},"test_35":{"methods":[{"sl":51},{"sl":59},{"sl":63},{"sl":67}],"name":"testCRUD","pass":true,"statements":[{"sl":52},{"sl":60},{"sl":64},{"sl":68}]},"test_44":{"methods":[{"sl":47}],"name":"startOrStopUser","pass":true,"statements":[{"sl":48}]},"test_45":{"methods":[{"sl":39},{"sl":47},{"sl":63},{"sl":71}],"name":"testDeleteRole","pass":true,"statements":[{"sl":40},{"sl":48},{"sl":64},{"sl":72}]},"test_49":{"methods":[{"sl":51},{"sl":67}],"name":"testUserCRUD","pass":true,"statements":[{"sl":52},{"sl":68}]},"test_8":{"methods":[{"sl":51},{"sl":67}],"name":"testDeleteGroupAndUsers","pass":true,"statements":[{"sl":52},{"sl":68}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [45], [45], [], [], [], [], [], [], [45, 44], [45, 44], [], [], [49, 35, 21, 8], [49, 35, 21, 8], [], [], [], [], [], [], [35, 21], [35, 21], [], [], [45, 35], [45, 35], [], [], [49, 35, 21, 8], [49, 35, 21, 8], [], [], [45], [45], [], []]
