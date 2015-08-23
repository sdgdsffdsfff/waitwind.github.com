var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":50,"id":23645,"methods":[{"el":20,"sc":2,"sl":9}],"name":"ProxyProfilerTest","sl":7},{"el":26,"id":23653,"methods":[],"name":"ProxyProfilerTest.Animal","sl":23},{"el":48,"id":23653,"methods":[{"el":35,"sc":3,"sl":32},{"el":39,"sc":3,"sl":37},{"el":43,"sc":3,"sl":41},{"el":47,"sc":3,"sl":45}],"name":"ProxyProfilerTest.User","sl":28}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_211":{"methods":[{"sl":9},{"sl":32},{"sl":37},{"sl":41}],"name":"test","pass":true,"statements":[{"sl":11},{"sl":13},{"sl":14},{"sl":15},{"sl":17},{"sl":18},{"sl":19},{"sl":33},{"sl":34},{"sl":38},{"sl":42}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [211], [], [211], [], [211], [211], [211], [], [211], [211], [211], [], [], [], [], [], [], [], [], [], [], [], [], [211], [211], [211], [], [], [211], [211], [], [], [211], [211], [], [], [], [], [], [], [], []]
