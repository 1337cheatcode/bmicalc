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
        result_xplain.innerHTML = "Sesuaikan pola makan dan pola tidur";
        footer.innerHTML = '<a href="https://www.freepik.com/free-vector/yellow-background-with-grunge-black-diagonal-stripes_8038895.htm#query=yellow%20warning%20background&position=4&from_view=search&track=ais">Image by starline</a> on Freepik';
        break;
      case "normal":
        document.getElementsByTagName("body")[0].style.backgroundImage = "url(/assets/healthy_bg.jpg)";
        result_desc.innerHTML = "Anda normal";
        result_xplain.innerHTML = "Pertahankan pola sehatmu";
        footer.innerHTML = '<a href="https://www.freepik.com/free-vector/city-park-scene-background_4428237.htm#query=nature%20park%20background&position=2&from_view=search&track=ais">Image by brgfx</a> on Freepik';
        break;
      case "gemuk":
        document.getElementsByTagName("body")[0].style.backgroundImage = "url(/assets/ow_bg.jpg)";
        result_desc.innerHTML = "Anda gemuk";
        result_xplain.innerHTML = "Kurangi makan banyak dan jangan banyak tidur";
        footer.innerHTML = 'Image by <a href="https://www.freepik.com/free-vector/flat-design-red-comic-style-background_11685287.htm#query=red%20warning%20background&position=43&from_view=search&track=ais">Freepik</a>';
        break;
      case "obesitas":
        document.getElementsByTagName("body")[0].style.backgroundImage = "url(/assets/obese_bg.jpg)";
        changeColor("white");
        result_desc.innerHTML = makeItStrongOnHTML("ANDA OBESITAS!!!");
        result_xplain.innerHTML = "Rajinlah berolahraga dan mulailah pola makan dan pola tidur yang lebih sehat";
        footer.innerHTML = 'Image by <a href="https://www.freepik.com/free-photo/abstract-smoke-isolated-black-backdrop_4225817.htm#query=dark%20death%20background&position=3&from_view=search&track=ais">Freepik</a>';
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
    //jika berat dan tinggi tidak terisi maka kembali ke semula
    setTimeout(() => { document.getElementsByTagName("body")[0].style.transition = "unset"; }, 500);
    document.getElementsByTagName("body")[0].style.transition = "background 0.5s linear";
    document.getElementsByTagName("body")[0].style.backgroundImage = "url(/assets/no_result_bg.jpg)";
    changeColor("white");
    footer.innerHTML = '<a href="https://www.freepik.com/free-vector/black-background-with-focus-spot-light_10016491.htm#query=dark%20background&position=5&from_view=keyword&track=ais">Image by starline</a> on Freepik';
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