const bmi =
{
  24: { podvaha: 18.9, optimalni: 23.9, nadvaha: 28.9, obezita: 39 },
  34: { podvaha: 19.9, optimalni: 24.9, nadvaha: 29.9, obezita: 40 },
  44: { podvaha: 20.9, optimalni: 25.9, nadvaha: 30.9, obezita: 41 },
  54: { podvaha: 21.9, optimalni: 26.9, nadvaha: 31.9, obezita: 42 },
  64: { podvaha: 22.9, optimalni: 27.9, nadvaha: 32.9, obezita: 43 },
  65: { podvaha: 23.9, optimalni: 28.9, nadvaha: 33.9, obezita: 44 },
}

const bmiCalc = (height, weight) => {
  bmiValue.value = (weight / Math.pow(height, 2)).toFixed(2);
}

const heightValue = /^\d{1}([.,]\d{1,2})?$/;
const weightValue = /^\d{2}(\d{1})?([.,]\d{1,2})?$/;

const submit = document.querySelector('[type=submit]')
const bmiValue = document.querySelector(".bmi")
const result = document.querySelector(".result")
let weight = document.querySelector('.weight')
let height = document.querySelector('.height')
let select = document.querySelector('select')

submit.addEventListener('click', e => {
  e.preventDefault()

  height = document.querySelector('.height')
  weight = document.querySelector('.weight')
  bmiValue.value = ""
  result.value = ""

  weight.classList.contains("is-valid") && weight.classList.add("is-valid")
  weight.classList.contains("is-invalid") && weight.classList.remove("is-invalid")
  height.classList.contains("is-valid") && height.classList.add("is-valid")
  height.classList.contains("is-invalid") && height.classList.remove("is-invalid")

  weightValue.test(weight.value) ? weight.classList.add("is-valid") : weight.classList.add("is-invalid")
  heightValue.test(height.value) ? height.classList.add("is-valid") : height.classList.add("is-invalid")

  weightValue.test(weight.value) && heightValue.test(height.value) && bmiCalc(height.value, weight.value)
  
  console.log(select.value)


  for (const scale in bmi[select.value]) {

    if(parseInt(bmiValue.value) <= bmi[select.value][scale])
    {
      result.value = scale
      break;
    }
    else if(parseInt(bmiValue.value) > bmi[select.value].obezita){
      result.value = "silna obezita"
      break;
    }
  }

})