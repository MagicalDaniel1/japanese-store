const axios = require("axios");

const BASE = "http://localhost:3000/api/user";

async function addFavorite(userName, product) {
    const res = await axios.post(`${BASE}/${userName}/cart`, { product });
}

module.exports = {addFavorite};