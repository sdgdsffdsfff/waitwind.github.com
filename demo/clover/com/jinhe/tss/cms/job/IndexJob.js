var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":70,"id":16737,"methods":[{"el":30,"sc":2,"sl":22},{"el":41,"sc":5,"sl":38},{"el":45,"sc":2,"sl":43},{"el":57,"sc":5,"sl":47},{"el":69,"sc":5,"sl":62}],"name":"IndexJob","sl":20}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_22":{"methods":[{"sl":22},{"sl":38},{"sl":43}],"name":"testIndexJob2","pass":true,"statements":[{"sl":23},{"sl":24},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":39},{"sl":40},{"sl":44}]},"test_88":{"methods":[{"sl":43},{"sl":62}],"name":"testIndexJob","pass":true,"statements":[{"sl":44},{"sl":64},{"sl":65},{"sl":67},{"sl":68}]},"test_99":{"methods":[{"sl":38},{"sl":43},{"sl":47},{"sl":62}],"name":"testArticlePublish","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":44},{"sl":48},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":56},{"sl":64},{"sl":65},{"sl":67},{"sl":68}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [22], [22], [22], [], [22], [22], [22], [22], [], [], [], [], [], [], [], [], [22, 99], [22, 99], [22, 99], [], [], [22, 99, 88], [22, 99, 88], [], [], [99], [99], [], [99], [99], [99], [99], [], [99], [99], [], [], [], [], [], [99, 88], [], [99, 88], [99, 88], [], [99, 88], [99, 88], [], []]
