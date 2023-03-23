function isNumber(evt) {
  //fungsi (dari stackoverflow) untuk menentukan apakah text yang diketik bernilai angka
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
  }
  return true;
}

function makeItStrongOnHTML(string) {
  //nambahin tag <strong> dengan js untuk keperluan innerHTML
  return `<strong>${string}</strong>`
}

function calcBMI() {
  let article_style = document.getElementById("left-section").style;
  let result_style = document.getElementById("right-section").style;
  let result_desc = document.getElementById("bmi-result");
  let result_xplain = document.getElementById("bmi-explanation");
  let footer = document.getElementById("footer")
  function changeColor(color){
    //mengganti warna font selain dari form
    article_style.color = color;
    result_style.color = color;
  }
  function dynamicChangeDesc(description){
    //ngubah deskripsi hasil sesuai klasifikasi dari parameter
    changeColor("black");
    setTimeout(() => { document.getElementsByTagName("body")[0].style.transition = "unset"; }, 500);
    document.getElementsByTagName("body")[0].style.transition = "background 0.5s linear";
    switch (description.toLowerCase()) {
      // tiap-tiap klasifikasi di switch/case
      // sesuai dengan klasifikasi dari parameter
      // untuk keperluan styling dinamis
      case "kurus":
        document.getElementsByTagName("body")[0].style.backgroundImage = "url(/assets/uw_bg.jpg)";
        result_desc.innerHTML = "Anda kurus";
        break;
      case "normal":
        document.getElementsByTagName("body")[0].style.backgroundImage = "url(/assets/healthy_bg.jpg)";
        result_desc.innerHTML = "Anda normal";

        break;
      case "gemuk":
        document.getElementsByTagName("body")[0].style.backgroundImage = "url(/assets/ow_bg.jpg)";
        result_desc.innerHTML = "Anda gemuk";
        break;
      case "obesitas":
        document.getElementsByTagName("body")[0].style.backgroundImage = "url(/assets/obese_bg.jpg)";
        changeColor("white");
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
  } else {
    setTimeout(() => { document.getElementsByTagName("body")[0].style.transition = "unset"; }, 500);
    document.getElementsByTagName("body")[0].style.transition = "background 0.5s linear";
    document.getElementsByTagName("body")[0].style.backgroundImage = "url(/assets/no_result_bg.jpg)";
    changeColor("white");
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
  });
  for (let an_input of divFormBlock.getElementsByTagName("input")) {
    an_input.addEventListener("focus",() => {divFormBlock.style.backgroundColor = "grey"});
    an_input.addEventListener("focusout",() => {divFormBlock.style.backgroundColor = "lightgrey"});
  }
}

document.getElementsByTagName("body")[0].style.backgroundImage = "url(/assets/no_result_bg.jpg)";