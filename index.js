let form = document.querySelector('form');

// height and weight ki value submit krnepe hi li kuki agr pahle leta to dom load hoga tb hi wo value lelega and wo empty value hogi lekin agr wo submit click krne pe lega to kuch value hogi esliye evetlistener ke nadr likhi hai

form.addEventListener('submit', function(e){
    e.preventDefault(); // default behaviour of form is to get submit to topthat we have used preventdefault. it stops the defualt behaviour

    //to get value from this input filed we can use .value  as it will give string value we can convert this to number by NUmber of parseInt.
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('#results');
    let output = document.querySelector('#output')
    let uw = 18.6;
    let ow = 24.9;

    if(height === '' || height < 0 || isNaN(height)) { //isNan ek aacha method hai to check whether it is no or not
        result.innerHTML = `Please give a valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
        if(bmi < 18.6) {
            output.innerHTML = `<span>Under Weight</span>`
        }
        else if( bmi > 24.9) {
            output.innerHTML = `<span>Over Weight</span>`
        }
        else {
            output.innerHTML = `<span>Normal Weight</span>`
        }
    }
});