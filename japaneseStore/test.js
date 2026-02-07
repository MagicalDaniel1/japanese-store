const { createUser } = require("./features/Auth/createUser");

(async () => {
    const result = await createUser({ name: "Anastasia", age: 17 });
    console.log(result);
})();

/*async function testServer() {
    try {
        // POST
        const postRes = await axios.post("http://localhost:3000/api/organisation", {
            name: "My Store",
            industry: "Retail",
            size: "Medium"
        });
        console.log("POST отправлен:", postRes.data);

        // PATCH
        const patchRes = await axios.patch("http://localhost:3000/api/organisation", {
            size: "Large"
        });
        console.log("PATCH отправлен:", patchRes.data);

        // GET
        const getRes = await axios.get("http://localhost:3000/api/organisation");
        console.log("Текущие данные:", getRes.data);

    } catch (err) {
        console.error("Ошибка запроса:", err.message);
    }
}

testServer();*/