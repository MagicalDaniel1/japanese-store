const axios = require("axios");

const BASE = "http://localhost:3000/api/user";

async function addFavorite(userName, productId) {
    const res = await axios.put(`${BASE}/${userName}/favorites`, { productId });
}

module.exports = {addFavorite};