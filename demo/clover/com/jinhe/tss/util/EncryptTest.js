var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":50,"id":25122,"methods":[{"el":28,"sc":5,"sl":26},{"el":31,"sc":2,"sl":22},{"el":41,"sc":6,"sl":39},{"el":48,"sc":2,"sl":33}],"name":"EncryptTest","sl":17},{"el":65,"id":25140,"methods":[{"el":56,"sc":2,"sl":54},{"el":64,"sc":2,"sl":62}],"name":"EncryptTestThreadGroup","sl":52}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_214":{"methods":[{"sl":26},{"sl":33},{"sl":39}],"name":"testCreateDecryptor","pass":true,"statements":[{"sl":27},{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":40}]},"test_217":{"methods":[{"sl":22},{"sl":26}],"name":"testCreateEncryptor","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":27}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [217], [], [217], [217], [214, 217], [214, 217], [], [], [], [], [], [214], [], [214], [214], [214], [214], [214], [214], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
