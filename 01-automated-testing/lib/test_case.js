function testCase(name, tests) {
    assert.count = 0;
    var sucessful = 0;
    var testCount = 0;
    for (var test in tests) {
        if (!/^test/.test(test)) {
            continue;
        }
        testCount++;
        try {
            tests[test]();
            output(test, "#0c0");
            sucessful++;
        } catch (e) {
            output(test + " failed:" + e.message, "#c00");
        }
    }

    var color = sucessful == testCount ? '#0c0' : "#c00";
    output("<strong>" + testCount + " tests, " + (testCount - sucessful) + " failures</strong>", color);
}
