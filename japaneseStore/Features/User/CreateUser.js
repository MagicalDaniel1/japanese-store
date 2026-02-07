const axios = require("axios");

const BASE = "http://localhost:3000/api/user";

async function createUser(name) {
    const res = await axios.post(BASE, { name });
    return res.data;
}

module.exports = createUser;