const axios = require("axios");

const BASE = "http://localhost:3000/api/user";

async function updateInterests(name, interests) {
    const res = await axios.patch(
        `${BASE}/${name}/interests`,
        { interests }
    );
    return res.data;
}

module.exports.updateInterests = updateInterests;
