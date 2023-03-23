function makeItStrongOnHTML(string) {
    //nambahin tag <strong> dengan js untuk keperluan innerHTML
    return `<strong>${string}</strong>`
}

function calcBMI() {
    function dynamicChangeDesc(description){
        //ngubah deskripsi hasil sesuai klasifikasi dari parameter
        let result_style = document.getElementById("right-div").style;
        let result_desc = document.getElementById("bmi-description");
        result_style.color = "black"
        switch (description.toLowerCase()) {
            // tiap-tiap klasifikasi di switch/case
            // sesuai dengan klasifikasi dari parameter
            // untuk keperluan styling dinamis
            case "kurus":
                result_style.backgroundColor = "yellow";
                result_desc.innerHTML = "Anda kurus";
                break;
            case "normal":
                result_style.backgroundColor = "lime";
                result_desc.innerHTML = "Anda normal";
                break;
            case "gemuk":
                result_style.backgroundColor = "red";
                result_desc.innerHTML = "Anda gemuk";
                break;
            case "obesitas":
                result_style.backgroundColor = "black";
                result_style.color = "white";
                result_desc.innerHTML = makeItStrongOnHTML("ANDA OBESITAS!!!");
                break;
            default:
                break;
        }
    }
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    if (weight && height) {
        //jika berat dan tinggi terisi maka bisa menghitung nilai bmi
        let BMI_value = parseFloat(weight)/(parseFloat(height)*parseFloat(height))*10000;
        if (BMI_value < 18.5) dynamicChangeDesc("kurus");
        else if (BMI_value <= 24.9) dynamicChangeDesc("normal");
        else if (BMI_value <= 29.9) dynamicChangeDesc("gemuk");
        else dynamicChangeDesc("obesitas");
        document.getElementById("calc-result").innerHTML = makeItStrongOnHTML(BMI_value);
    }
}

document.getElementById("weight").addEventListener("input",calcBMI());
document.getElementById("height").addEventListener("input",calcBMI());
document.getElementById("calc").addEventListener("click",calcBMI());
for (let divFormBlock of document.getElementById("formcalc").getElementsByTagName("div")) {
    //nambahin event listener satu-satu tiap div di form
    //biar keren aja gitu
    divFormBlock.addEventListener("pointermove",() => {divFormBlock.style.backgroundColor = "grey"});
    divFormBlock.addEventListener("pointerleave",() => {
        if (!(document.activeElement.className==divFormBlock.className)||divFormBlock.className=='')
            divFormBlock.style.backgroundColor = "lightgrey";
        }
    );
    for (let an_input of divFormBlock.getElementsByTagName("input")) {
        an_input.addEventListener("focus",() => {divFormBlock.style.backgroundColor = "grey"});
        an_input.addEventListener("focusout",() => {divFormBlock.style.backgroundColor = "lightgrey"});
    }
}