var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":59,"id":24789,"methods":[{"el":43,"sc":5,"sl":31},{"el":50,"sc":5,"sl":48},{"el":57,"sc":5,"sl":55}],"name":"StringUtil","sl":19}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_225":{"methods":[{"sl":31},{"sl":48},{"sl":55}],"name":"test","pass":true,"statements":[{"sl":32},{"sl":33},{"sl":34},{"sl":36},{"sl":38},{"sl":39},{"sl":41},{"sl":49},{"sl":56}]},"test_244":{"methods":[{"sl":31}],"name":"testEscape","pass":true,"statements":[{"sl":32},{"sl":33},{"sl":34},{"sl":38},{"sl":39}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [244, 225], [244, 225], [244, 225], [244, 225], [], [225], [], [244, 225], [244, 225], [], [225], [], [], [], [], [], [], [225], [225], [], [], [], [], [], [225], [225], [], [], []]
