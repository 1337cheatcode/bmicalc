function calcBMI() {
    function dynamicChangeDesc(description){
        document.getElementById("right-div").style.color = "black"
        switch (description.toLowerCase()) {
            case "kurus":
                document.getElementById("right-div").style.backgroundColor = "yellow";
                document.getElementById("bmi-description").innerHTML = "Anda kurus";
                break;
            case "normal":
                document.getElementById("right-div").style.backgroundColor = "lime";
                document.getElementById("bmi-description").innerHTML = "Anda normal";
                break;
            case "gemuk":
                document.getElementById("right-div").style.backgroundColor = "red";
                document.getElementById("bmi-description").innerHTML = "Anda gemuk";
                break;
            case "obesitas":
                document.getElementById("right-div").style.backgroundColor = "black";
                document.getElementById("right-div").style.color = "white";
                document.getElementById("bmi-description").innerHTML = "<strong>ANDA OBESITAS!!!</strong>";
                break;
            default:
                break;
        }
    }
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    if (weight && height) {
        BMI_value = parseFloat(weight)/(parseFloat(height)*parseFloat(height))*10000;
        if (BMI_value < 18.5) dynamicChangeDesc("kurus");
        else if (BMI_value <= 24.9) dynamicChangeDesc("normal");
        else if (BMI_value <= 29.9) dynamicChangeDesc("gemuk");
        else dynamicChangeDesc("obesitas");
        document.getElementById("calc-result").innerHTML = `<strong>${BMI_value}</strong>`;
    }
}