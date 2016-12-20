Boolean.prototype.not=function(){
    return !this;
}

TestCase("BooleanTest",{
    "test should filp value of true":function(){
        assertFalse(true.not());
        assertFalse(Boolean.prototype.not.call(true));
    },
    "test should flip value of false":function(){
        //oops! Both fail,fail.not()==false
        assertFalse(false.not());
        assertFalse(Boolean.prototype.not.call(false));
    }
})
