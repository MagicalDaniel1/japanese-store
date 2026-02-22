const axios = require("axios");
const BASE = "http://localhost:3000/api/user";

async function updateAvatar(name, avatarUrl) {
    try {
        const res = await axios.patch(`${BASE}/${name}`, { avatar: avatarUrl });
    } catch (err) {
        console.error("Ошибка updateAvatar:", err.response?.data || err.message);
        throw err;
    }
}

module.exports = { updateAvatar };