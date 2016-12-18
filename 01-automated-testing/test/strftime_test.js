var date = new Date(2009,11,5);
testCase("strftime test",{
    "test format specifier %Y":function(){
        assert("%Y shold return full year",date.strftime("%Y")==="2009");
    },
    "test format specifier %m":function(){
        assert("%m should return month",date.strftime("%m")==="12");
    },
    "test format specifier %y":function(){
        assert("%y should return year as two digits",date.strftime("%y")==="09");
    },
    "test format specifier %F":function(){
        assert("%F should act as %Y-%m-%d",date.strftime("%F")==="2009-12-05");
    }

})
