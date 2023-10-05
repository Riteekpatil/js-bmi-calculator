// BMI Calculator Form
const bmiForm = document.getElementById('bmi-form')
const bmiResult = document.getElementById('resultBMI') 
const bmiResultcategory = document.getElementById('resultBMIcategory') 
const bmitype = document.querySelectorAll('[name="calculationTypeRadio"]') 

bmitype.forEach(el=>{
    el.addEventListener('change', ()=>{
        if(el.checked){
            document.getElementById('calculationType').value = el.value
            document.getElementById('calculationType').setAttribute('value', el.value)

            if(el.value == `standard`){
                document.getElementById('weightUnit').innerHTML = `[Pounds <em>(lbs)</em>]`;
                document.getElementById('heightUnit').innerHTML = `[Inches <em>(in)</em>]`;
            }else{
                document.getElementById('weightUnit').innerHTML = `[Kilograms <em>(kg)</em>]`;
                document.getElementById('heightUnit').innerHTML = `[Meters <em>(m)</em>]`;
            }
        }
    })
})


bmiForm.addEventListener('submit',e => {
    e.preventDefault()
    var calcType = document.getElementById('calculationType').value
    if(calcType == 'standard'){
        calcStandardBMI()
    }else{
        calcMetricBMI()
    }
})

const calcStandardBMI = () =>{
    var weight = document.getElementById('weight').value
    var height = document.getElementById('height').value

    weight = parseFloat(weight)
    height = parseFloat(height)

    var bmi = (weight / (height * height)) * 703
    bmiResult.innerText = (bmi).toFixed(1)
    if(bmi >= 40){
        bmiResultcategory.innerHTML = `Obese`
    }else if(bmi >= 25 && bmi <= 39.9){
        bmiResultcategory.innerHTML = `Overweight`
    }else if(bmi >= 18.5 && bmi <= 24.9){
        bmiResultcategory.innerHTML = `Normal`
    }else if(bmi <= 18.4){
        bmiResultcategory.innerHTML = `Underweight`
    }
}

const calcMetricBMI = () =>{
    var weight = document.getElementById('weight').value
    var height = document.getElementById('height').value

    weight = parseFloat(weight)
    height = parseFloat(height)

    var bmi = (weight / (height * height))
    bmiResult.innerText = (bmi).toFixed(1)
    if(bmi >= 40){
        bmiResultcategory.innerHTML = `Obese`
    }else if(bmi >= 25 && bmi <= 39.9){
        bmiResultcategory.innerHTML = `Overweight`
    }else if(bmi >= 18.5 && bmi <= 24.9){
        bmiResultcategory.innerHTML = `Normal`
    }else if(bmi <= 18.4){
        bmiResultcategory.innerHTML = `Underweight`
    }
}