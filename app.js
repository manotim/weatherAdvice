const name = "Mike the Coder"
const probabilityOfRain = 0.64
const temperatureInc = 17

const likelyToRain = probabilityOfRain >= 0.3
const sunIsDangerous = temperatureInc > 27
const rainPercentage = probabilityOfRain * 100

const rainAdvice = likelyToRain ? 'take umbrella' : ' enjoy this rain-free day'
const sunAdvice = sunIsDangerous ? ' and watch out the heatstroke' : ' and bask in this fine weather'

let weatherAdvice = `Hello, ${name}, with a rain percentage of ${rainPercentage}% and a temperature of ${temperatureInc}C we recommend that you ` + rainAdvice + sunAdvice

console.log(weatherAdvice)