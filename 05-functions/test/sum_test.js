function sum(){
    var total =0;

    for(var i = 0,l=arguments.length; i<l; i++){
        total +=arguments[i];
    }

    return total;
}

TestCase("SumTest",{
    "test shoul sum numbers":function(){
        assertEquals(15,sum(1,2,3,4,5));
        assertEquals(15,sum.apply(null,[1,2,3,4,5]));
    }

})
