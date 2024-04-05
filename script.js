let mySlider = document.getElementById("my-slider");
let sliderValue = document.getElementById("slider-value");
function slider() {
  valPercent = (mySlider.value / mySlider.max) * 100;
  mySlider.style.background = `linear-gradient(to right,  rgb(113, 113, 237) ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  sliderValue.textContent = mySlider.value;
  // console.log(mySlider.value);
}
slider();

document.getElementById("button").addEventListener("click", input_value);
function input_value() {
  //  console.log(mySlider.value);
  let a = document.querySelectorAll(".checkbox");

  var c = "";
  let num = "0123456789";
  let small = "abcdefghijklmnopqrstuvwxyz";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let sym = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/ ";
  let outcome = "";
  for (let i = 0; i <= a.length - 1; i++) {
    // console.log(a[i].value.checked);
    if (a[i].checked) {
      c += a[i].value;
    }
    if(c == ""){
      document.getElementById("emptybox").style.display="block";
    }
    if(c != ""){
      document.getElementById("emptybox").style.display="none";
    }
    
  }
  
  //   console.log(c);
  let array = Array.from(c);
  let perstr = mySlider.value / c.length;
 
  // console.log(oddval);
  for (let j = 0; j <= array.length - 1; j++) {
    if (array[j] == "u") {
      for (let k = 0; k <= perstr - 1; k++) {
        outcome += upper.charAt(Math.floor(Math.random() * 23));
      }
    } else if (array[j] == "l") {
      for (let k = 0; k <= perstr - 1; k++) {
        outcome += small.charAt(Math.floor(Math.random() * 23));
      }
    } else if (array[j] == "n") {
      for (let l = 0; l <= perstr - 1; l++) {
        outcome += num.charAt(Math.floor(Math.random() * 9));
      }
    } else if (array[j] == "s") {
      for (let m = 0; m <= perstr - 1; m++) {
        outcome += sym.charAt(Math.floor(Math.random() * 29));
      }
    }
  }
  shuffle(outcome , c);
}
function shuffle(new_outcome , c) {
  
  let a = new_outcome.split("");
  let n = a.length;
  let oddval = mySlider.value % c.length;
  for (let i = n - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  if (oddval > 0) {
    for (let z = 0; z < oddval; z++) {
      let j = Math.floor(Math.random() * (n - 1));
      a.push(a[j]);
    }
  }

  let shuffled = a.join("");
  
  // here we get to know about function that it is working well.


  console.log(shuffled);



  // to tackle the problem we used the interval fun() to delay the execution time .


  setTimeout(() => {
    
    document.querySelector(".text-generator").innerHTML=shuffled;
  }, 200);
  document.querySelector(".text-generator").style.padding="15px";

}

document.querySelector(".copy-button").addEventListener("click" , copyfun);

function copyfun() {
    var copyText = document.querySelector(".text-generator");
    var textToCopy = copyText.textContent || copyText.innerText;

    var tempInput = document.createElement("textarea");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
 
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("Copied the text: " + textToCopy);
}

