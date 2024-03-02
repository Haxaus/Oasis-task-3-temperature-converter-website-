function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unitSelect = document.getElementById("unitSelect");
    var selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
    var resultElement = document.getElementById("result");
    
  
    if (isNaN(temperatureInput)) {
      resultElement.innerText = "Please enter a valid number!";
      return;
    }
    
    var temperature = parseFloat(temperatureInput);
    var result;
  
    if (selectedUnit === "celsius") {
      result = {
        fahrenheit: (temperature * 9/5) + 32,
        kelvin: temperature + 273.15
      };
    } else if (selectedUnit === "fahrenheit") {
      result = {
        celsius: (temperature - 32) * 5/9,
        kelvin: (temperature - 32) * 5/9 + 273.15
      };
    } else if (selectedUnit === "kelvin") {
      result = {
        celsius: temperature - 273.15,
        fahrenheit: (temperature - 273.15) * 9/5 + 32
      };
    }
  
    resultElement.innerHTML = `
      <p>${temperature} ${selectedUnit.charAt(0).toUpperCase() + selectedUnit.slice(1)} is:</p>
      <ul>
        ${result.celsius ? `<li>${result.celsius.toFixed(2)} Celsius</li>` : ''}<br>
        ${result.fahrenheit ? `<li>${result.fahrenheit.toFixed(2)} Fahrenheit</li>` : ''}<br>
  
        ${result.kelvin ? `<li>${result.kelvin.toFixed(2)} Kelvin</li>` : ''}<br>
      </ul>
    `;
  }
  