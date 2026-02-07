const axios = require("axios");

const BASE = "http://localhost:3000/api/user";

async function updateUser(name, data) {
    const res = await axios.patch(`${BASE}/${name}`, data);
    return res.data;
}

module.exports = updateUser;