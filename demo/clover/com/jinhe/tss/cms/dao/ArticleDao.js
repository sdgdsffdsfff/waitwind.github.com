var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":168,"id":17991,"methods":[{"el":29,"sc":5,"sl":27},{"el":33,"sc":5,"sl":31},{"el":56,"sc":5,"sl":35},{"el":66,"sc":5,"sl":58},{"el":78,"sc":5,"sl":68},{"el":87,"sc":2,"sl":80},{"el":94,"sc":2,"sl":89},{"el":118,"sc":2,"sl":98},{"el":141,"sc":2,"sl":120},{"el":154,"sc":5,"sl":146},{"el":167,"sc":5,"sl":156}],"name":"ArticleDao","sl":25}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_100":{"methods":[{"sl":80}],"name":"testPublishJob","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":84},{"sl":86}]},"test_22":{"methods":[{"sl":89}],"name":"testIndexJob2","pass":true,"statements":[{"sl":90},{"sl":93}]},"test_88":{"methods":[{"sl":89}],"name":"testIndexJob","pass":true,"statements":[{"sl":90},{"sl":93}]},"test_93":{"methods":[{"sl":31},{"sl":35},{"sl":80},{"sl":98},{"sl":120}],"name":"testArticleModule","pass":true,"statements":[{"sl":32},{"sl":36},{"sl":39},{"sl":40},{"sl":50},{"sl":51},{"sl":55},{"sl":82},{"sl":83},{"sl":86},{"sl":99},{"sl":105},{"sl":106},{"sl":107},{"sl":109},{"sl":110},{"sl":116},{"sl":117},{"sl":121},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":134},{"sl":135},{"sl":137},{"sl":139},{"sl":140}]},"test_99":{"methods":[{"sl":31},{"sl":35},{"sl":58},{"sl":68},{"sl":80},{"sl":89},{"sl":146},{"sl":156}],"name":"testArticlePublish","pass":true,"statements":[{"sl":32},{"sl":36},{"sl":39},{"sl":40},{"sl":42},{"sl":43},{"sl":46},{"sl":50},{"sl":51},{"sl":52},{"sl":55},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":69},{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":75},{"sl":82},{"sl":83},{"sl":84},{"sl":86},{"sl":90},{"sl":93},{"sl":147},{"sl":152},{"sl":153},{"sl":157},{"sl":158},{"sl":160},{"sl":165},{"sl":166}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [99, 93], [99, 93], [], [], [99, 93], [99, 93], [], [], [99, 93], [99, 93], [], [99], [99], [], [], [99], [], [], [], [99, 93], [99, 93], [99], [], [], [99, 93], [], [], [99], [99], [99], [99], [99], [99], [], [99], [], [], [99], [99], [99], [99], [99], [99], [], [99], [], [], [], [], [99, 100, 93], [], [99, 100, 93], [99, 100, 93], [99, 100], [], [99, 100, 93], [], [], [22, 99, 88], [22, 99, 88], [], [], [22, 99, 88], [], [], [], [], [93], [93], [], [], [], [], [], [93], [93], [93], [], [93], [93], [], [], [], [], [], [93], [93], [], [], [93], [93], [], [], [], [], [], [], [93], [93], [93], [93], [], [], [93], [93], [], [93], [], [93], [93], [], [], [], [], [], [99], [99], [], [], [], [], [99], [99], [], [], [99], [99], [99], [], [99], [], [], [], [], [99], [99], [], []]
