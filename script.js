const  btn = document.querySelector('.btn')
const result =document.querySelector('.result')


function convert() {
    const length = document.querySelector('.length').value;
    const fromUnit = document.querySelector('.fromUnit').value;
    const toUnit = document.querySelector('.toUnit').value;

let results;

    if(fromUnit =="m" && toUnit == "km"){
results=  length * 0.001 ;
}
else if(fromUnit == "m" && toUnit == "cm"){
results = length * 100 ;
}
else if(fromUnit == "m" &&toUnit == "m"){
results = length
}


if(fromUnit == "km" && toUnit == "m"){
results = length *1000
}
else if(fromUnit == "km" && toUnit == "cm"){
results = length * 100000 
}
else if(fromUnit == "km" && toUnit== "km"){
results = length
}
if(fromUnit == "cm" && toUnit == "m"){
results =  length * 0.01 
}
else if(fromUnit == "cm" && toUnit =="km"){
results = length * 0.00001 
}
else if(fromUnit == "cm" && toUnit== "cm"){
results = length
}

   result.innerText =results;
}
btn.addEventListener('click', convert);

 




