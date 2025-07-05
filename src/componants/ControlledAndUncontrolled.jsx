// TemperatureCalculator.jsx
import { useState } from 'react';
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function TemperatureCalculator() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c'); // 'c' for Celsius, 'f' for Fahrenheit

  const handleCelsiusChange = (temp) => {
    setTemperature(temp);
    setScale('c');
  };

  const handleFahrenheitChange = (temp) => {
    setTemperature(temp);
    setScale('f');
  };

  const celsius = scale === 'f' ? toCelsius(temperature) : temperature;
  const fahrenheit = scale === 'c' ? toFahrenheit(temperature) : temperature;

  return (
    <div className="max-w-sm mx-auto p-4">
      <TemperatureInput
        label="Celsius"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        label="Fahrenheit"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
    </div>
  );
}

export default TemperatureCalculator;



// TemperatureInput.jsx
function TemperatureInput({ label, temperature, onTemperatureChange }) {
  return (
    <fieldset className='mb-4'>
      <legend>{label}</legend>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
        className='border p-2 rounded-md w-full'
      />
    </fieldset>
  );
}


