document.addEventListener("DOMContentLoaded"), function() {
    const calculateBtn = document.getElementById("calculate");
    const resetBtn = document.getElementById("reset");
}
    calculateBtn.addEventListener("click", function()  {
        // bmi calculate
      height = height / 100; // Konversi tinggi dari cm ke meter
      let BMI = weight / (height * height);

      // Display the bmi
      document.getElementById("result").textContent = BMI.toFixed(2);

      // find the bmi status
      let status = "";
      if (BMI < 18.5) {
          status = "Underweight";
      } else if (BMI >= 18.5 && BMI < 25) {
          status = "Healthy";
      } else if (BMI >= 25 && BMI < 30) {
          status = "Overweight";
      } else {
          status = "Obese";
      }

      // Display the bmi status
      document.getElementById("comment").textContent = status;
    });

function calculate(){

    if (isNaN(age) || isNaN(height) || isNaN(weight) || age <= 0 || height <= 0 || weight <= 0){
        alert("Please fill out all fields with valid numbers.");
        return;

    }else{
        countBmi();
    }
}


function countBmi(){
    var p = [age.value, height.value, weight.value];
    if(male.checked){
        p.push("male");
    }else if(female.checked){
        p.push("female")
    }

    var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);

    var result = '';
    if(bmi<18.5){
        result = 'underweight';
        }else if(18.5<=bmi&&bmi<=24.9){
        result = 'healthy';
        }else if(25<=bmi&bmi<=29.9){
        result = 'overweight';
        }else if(30<=bmi&bmi<=34.9){
        result = 'obese';
        }else if(35<=bmi){
        result = 'extremely obese'
        }

    
    resultArea.style.display = "block";
    document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
    document.querySelector("#result").innerHTML = bmi.toFixed(2);

    }



    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user click anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
      