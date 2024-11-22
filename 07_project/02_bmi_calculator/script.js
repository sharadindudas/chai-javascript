const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if(height === "" || height <= 0 || isNaN(height)){
        results.innerText = "Please give a valid height !";
    }
    else if(weight === "" || weight <= 0 || isNaN(weight)){
        results.innerText = "Please give a valid weight !";
    }
    else{
      results.innerText = (weight/ ((height * height)/10000)).toFixed(2)
    }
    

})