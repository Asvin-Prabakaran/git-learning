// questin 2 find flag
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
for(var i =0;i<res.length;i++)
console.log(res[i].flag);
}

// question 3 find name region poupulation subregin
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    var reg = JSON.parse(request.response);
    var pop = JSON.parse(request.response);
    var sub = JSON.parse(request.response);
    console.log(res);
for(var i =0;i<res.length;i++)
console.log(res[i].name);
for( var i=0;i<reg.length;i++)
console.log(res[i].region);
for( var i=0;i<pop.length;i++)
console.log(res[i].population);
for( var i=0;i<sub.length;i++)
console.log(res[i].subregion);
}