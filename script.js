let user_input = document.querySelector("#enter_amt_val")


let select_ = document.querySelectorAll(".currency")
console.log(select_)

let btn = document.querySelector("#convert")

let final_ = document.querySelector("P")
console.log(final_)

fetch('https://api.frankfurter.app/currencies')
.then((res)=>res.json())
.then((res)=>changeFormat(res))
function changeFormat(res){
    let arr_res = Object.entries(res)

    for(let i=0;i<arr_res.length;i++){
        let opt = `<option value="${arr_res[i][0]}">${arr_res[i][0]}</option>`
        select_[0].innerHTML += opt
        select_[1].innerHTML += opt

   


   


    }
}

btn.addEventListener("click",function(){
    let user_val = user_input.value
    let fval = select_[0].value
    let sval = select_[1].value
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?${user_val}=0&from=${fval}&to=${sval}`)
.then(resp => resp.json())
.then((data) => {
    final_.classList.add("show")
let arr_data = Object.entries(data.rates)
final_.innerHTML = `${arr_data[0][1]}`

  });
    



})


