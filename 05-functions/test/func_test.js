TestCase("FunctionTest", {
    "test function length property": function() {
        assertEquals(2, assert.length);
        assertEquals(1, document.getElementById.length);
        assertEquals(0, console.log.length);
    },
    "test call function direction": function() {
        assert("should be true", typeof assert == "function");
    },
    "test scope":function(){
        function sum(){
            assertUndefined(i);
            assertException(function(){
                assertUndefined(someVar);
            },"ReferenceError");

            var total=arguments[0];
            if(arguments.length > 1){
                for(var i = 1,l=arguments.length;i<l;i++){
                    total +=arguments[i];
                }
            }
            assertEquals(5,i);
            return total;
        }

        sum(1,2,3,4,5);
    }
});

function modify(a, b) {
    b = 42;
    arguments[0] = arguments[1];
    return a;
}
TestCase("FormalParamentersArgumentsTest", {
    "test dynamic relationship": function() {
        assertEquals(42, modify(1, 2));
    },
    "test no dynamic mapping for missing parameters": function() {
        assertUndefined(modify(1));
    }
})
