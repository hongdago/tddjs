var date = new Date(2009,11,5);

try{
    assert("%Y shold return full year",date.strftime("%Y")==="2009");
    assert("%m should return month",date.strftime("%m")==="12");
    assert("%d should return date",date.strftime("%d")==="05");
    assert("%y should return year as two digits",date.strftime("%y")==="09");
    assert("%F should act as %Y-%m-%d",date.strftime("%F")==="2009-12-05");
}catch(e){
    console.log("Test failed:"+e.message);
}

output(assert.count +" tests OK","#0c0");
output("Test failed:"+e.message,"#c00");
