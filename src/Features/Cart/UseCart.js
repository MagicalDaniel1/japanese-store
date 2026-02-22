const axios = require("axios");

const BASE = "http://localhost:3000/api/user";

async function getCart(userName) {
    const res = await axios.get(`${BASE}/${userName}/cart`);
    return res.data;
}

module.exports = {getCart};