const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("input");

for (let  i = 0; i  < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = e.target.value;
        
        switch (e.target.name) {
            case "celcius":
                fahrenheitInput
                break;
            case "fahrenheit":
                
                break;
            case "kelvin":
                
                break;
        }
    });
}