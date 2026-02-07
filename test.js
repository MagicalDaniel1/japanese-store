import * as Favorites from "./Features/User/AddFavorites.js";
import * as UserTemp from "./Features/User/UpdateUserTemp.js";
import * as UseCart from "./Features/Cart/UseCart.js";
import * as AddToCart from "./Features/Cart/AddToCart.js";

const ORGANISATION_URL = "http://localhost:3000/api/organisation";

async function updateOrganisation(data) {
    const res = await fetch(ORGANISATION_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Request failed ${res.status}`);
    }
}

async function test() {
    try {
        const userName = "Annie";

        const cartRes = await AddToCart.addToCart(userName, {
            name: "You're my soda pop",
            price: 20
        });
        console.log("Корзина обновлена:", cartRes);

        const favRes = await Favorites.addFavorite(userName, 1);
        console.log("Избранные обновлены:", favRes);

        const tempRes = await UserTemp.updateTempInterests(userName, {
            category1: 0.9,
            category2: 0.8
        });
        console.log("Временные интересы обновлены:", tempRes);

        const getCart = await UseCart.getCart(userName);
        console.log("Корзина:", getCart);
    } catch (err) {
        console.error("Ошибка запроса:", err.message);
    }
}

test();

// const { createUser } = require("./features/Auth/createUser");
//
// (async () => {
//     const result = await createUser({ name: "Anastasia", age: 17 });
//     console.log(result);
// })();

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