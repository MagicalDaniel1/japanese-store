const axios = require("axios");

const BASE = "http://localhost:3000/api/user";

async function getUser(name) {
    const res = await axios.get(`${BASE}/${name}`);
    return res.data;
}

module.exports = getUser;