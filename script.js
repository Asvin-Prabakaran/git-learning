var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);

//Get all the countries from Asia continent /region using Filter function

var result_asia = res.filter((ele)=>ele.region=="Asia");
console.log(result_asia);


//var country_name = result_asia.map((ele)=>ele.name);
//console.log(country_name);


//Get all the countries with a population of less than 2 lakhs using Filter function



var popu = res.filter((ele)=>ele.population<200000);
console.log(popu);

//Print the total population of countries using reduce function



var total_popu = res.reduce((acc,cv)=>acc+cv.population,0);
console.log(total_popu);



//Print the country that uses US dollars as currency.



var currency = res.filter((ele)=>ele.currencies[0]=="USD")
console.log(currency);



//Print the following details name, capital, flag, using forEach function


    res.forEach((ele)=>{
        console.log(ele.name,ele.capital,ele.flag);

    })}
