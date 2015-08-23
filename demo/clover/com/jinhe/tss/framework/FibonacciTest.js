var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":80,"id":8926,"methods":[{"el":21,"sc":5,"sl":14},{"el":30,"sc":5,"sl":23}],"name":"FibonacciTest","sl":12},{"el":41,"id":8936,"methods":[],"name":"FibonacciTest.Fibonacci","sl":32},{"el":79,"id":8936,"methods":[{"el":50,"sc":9,"sl":44},{"el":67,"sc":9,"sl":52},{"el":78,"sc":9,"sl":69}],"name":"FibonacciTest.FibonacciImpl","sl":43}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_162":{"methods":[{"sl":14},{"sl":44},{"sl":52},{"sl":69}],"name":"testProxy","pass":true,"statements":[{"sl":16},{"sl":18},{"sl":19},{"sl":20},{"sl":45},{"sl":46},{"sl":48},{"sl":53},{"sl":54},{"sl":57},{"sl":58},{"sl":59},{"sl":61},{"sl":62},{"sl":63},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":77}]},"test_188":{"methods":[{"sl":23},{"sl":44},{"sl":52},{"sl":69}],"name":"testCGLIB","pass":true,"statements":[{"sl":25},{"sl":27},{"sl":28},{"sl":29},{"sl":45},{"sl":46},{"sl":48},{"sl":53},{"sl":54},{"sl":57},{"sl":58},{"sl":59},{"sl":61},{"sl":62},{"sl":63},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":77}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [162], [], [162], [], [162], [162], [162], [], [], [188], [], [188], [], [188], [188], [188], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [188, 162], [188, 162], [188, 162], [], [188, 162], [], [], [], [188, 162], [188, 162], [188, 162], [], [], [188, 162], [188, 162], [188, 162], [], [188, 162], [188, 162], [188, 162], [], [], [188, 162], [], [], [188, 162], [188, 162], [188, 162], [188, 162], [188, 162], [188, 162], [], [], [188, 162], [], [], [], []]
