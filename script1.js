

//Q.NO 1: All country flags:

var request=new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v3.1/all")
request.send();
request.onload=function(){
    var data=request.response
    var result=JSON.parse(data)
    for(i=0;i<result.length;i++){
        console.log(("country name:"+result[i].name.common).concat("  ","region:"+result[i].region," | ","sub region:"+result[i].subregion," | ","population:"+result[i].population))
    }
}


//Q.NO 2: COUNTRIES NAME,REGIONS,SUB-REGIONS AND POPULATIONS:


