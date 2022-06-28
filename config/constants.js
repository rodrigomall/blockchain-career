require('dotenv').config();

const EMAIL = process.env.EMAIL || `usuario@gmail.com`;
const TOKEN = process.env.TOKEN || `efd78828-6c97-4e82-8653-ea4736979c76`;
const ENDPOINT = process.env.ENDPOINT || `https://rooftop-career-switch.herokuapp.com`;


console.log('EMAIL', EMAIL)
console.log('TOKEN', TOKEN)

module.exports = {
  ENDPOINT,
  TOKEN,
  EMAIL
}