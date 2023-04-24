const convertToCelsius = function(temp) {
  temp = (temp - 32) * 5 / 9;
  return +(Math.round(temp + "e+1") + "e-1");
};

const convertToFahrenheit = function(temp) {
  temp = (temp * 9 / 5) + 32;
  return +(Math.round(temp + "e+1") + "e-1");
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
