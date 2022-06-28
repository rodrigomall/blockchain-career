

const axios = require('axios');
const { ENDPOINT, EMAIL } = require('../config/constants.js');

async function getToken() {
  try {
    let res = null;
    await axios.get(`${ENDPOINT}/token?email=${EMAIL}`)
    .then(({data}) => {
      res = data.token;
    })
    .catch(error => {
      console.error(error);
    });
    return res;
  } catch (error) {
    console.log(error);
  }
}

async function getAll(token) {
  try {
    let res = null;
    await axios.get(`${ENDPOINT}/blocks?token=${token}`)
    .then(({data}) => {
      res = data.data;
    })
    .catch(error => {
      console.error(error);
    });
    return res;
  } catch (error) {
    console.log(error);
  }
}

async function checkBlocks(blocks, token) {
  try {
    let res = null;
    await axios(`${ENDPOINT}/check?token=${token}`, {
      method: 'post',
      url: `${ENDPOINT}/check?token=${token}`,
      data: {
        blocks
      }
    })
    .then(({data}) => {
      res = data.message;
    })
    .catch(error => {
      console.error(error);
    });
    return res;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getToken,
  getAll,
  checkBlocks
}