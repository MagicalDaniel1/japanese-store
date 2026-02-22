const axios = require("axios");

const BASE = "http://localhost:3000/api/user";

async function updateTempInterests(userName, tempInterests) {
    const res = await axios.patch(`${BASE}/${userName}/temp-interests`, { temp_interests: tempInterests });
}

module.exports = {updateTempInterests};