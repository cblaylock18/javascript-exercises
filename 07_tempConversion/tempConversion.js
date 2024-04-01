const convertToCelsius = function (fahrenheitTemperature) {
    celsiusTemperature = ((fahrenheitTemperature - 32) * 5) / 9;
    if (celsiusTemperature === Math.round(celsiusTemperature)) {
        return celsiusTemperature;
    } else {
        return celsiusTemperature.toFixed(1) * 1;
    }
};

const convertToFahrenheit = function (celsiusTemperature) {
    fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
    if (fahrenheitTemperature === Math.round(fahrenheitTemperature)) {
        return fahrenheitTemperature;
    } else {
        return fahrenheitTemperature.toFixed(1) * 1;
    }
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
