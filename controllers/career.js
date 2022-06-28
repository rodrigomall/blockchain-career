const Career = require('../models/career');
let arrTotal = [];

async function getAllBlocks(req, res){
  try {
    console.log('Loading...');
    const token = await Career.getToken();
    const career = await Career.getAll(token);
    const block = career[0];
    arrTotal = [...block];
    const blocksSlice = career.slice(1);
    await check(block, blocksSlice, token);
    const all = arrTotal.join('');
    const encoded = {
      encoded: all
    }
    console.log(encoded);
    res.writeHead(200, {'Content-type': 'application/json'});
    res.end(JSON.stringify(encoded));
  } catch (error) {
    console.log(error);
  }
}

async function check(block, blocks, token){
  try {
    if(blocks.length < 1) {
      return []
    }
    for(let i=0; i< blocks.length; i++) {
      const nextBlock = blocks[i];
      const result = await Career.checkBlocks([block, nextBlock], token);
      if(result) {
        let b = blocks[i];
        blocks.splice(i, 1);
        arrTotal.push(b);
        await check(b, blocks, token);
        break;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllBlocks
}