const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let users = [
    {
        name: "Annie",
        avatar: null,
        interests: {
            category1: true, category2: false
        },
        temp_interests: {
            category1: 0.3, category2: 0.5
        },
        cart: [],
        favorites: []
    }
];

let products = [
    {
        id: 1,
        name: "My little soda pop!",
        description: "My little soda pop!",
        category: "drinks",
        price: 20,
        feedbacks: [],
        rating: 4.5
    }
]

app.post("/api/user/:name/cart", (req, res) => {
    const user = users.find(user => user.name === req.params.name);
    if (!user) return res.status(404).send("User not found");
    const product = products.find(product => product.id === req.body.productId);
    if (!product) return res.status(404).send("Product not found");

    user.cart.push(req.body.product);
    console.log("POST данные:", user);
    res.json({ message: "Товар добавлен в корзину", cart: user.cart });
});

app.put("/api/user/:name/favorites", (req, res) => {
    const user = users.find(user => user.name === req.params.name);
    if (!user) return res.status(404).send("User not found");

    user.favorites.push(req.body.productId);
    console.log("PUT данные:", user);
    res.json({ message: "Товар добавлен в избранные", data: user });
});

app.patch("/api/user/:name/temp-interests", (req, res) => {
    const user = users.find(user => user.name === req.params.name);
    if (!user) return res.status(404).send("User not found");

    user.temp_interests = req.body.temp_interests;
    console.log("PATCH данные:", user.temp_interests);
    res.json({ message: "Временные интересы обновлены", data: user.temp_interests });
});

app.get("/api/user/:name/cart", (req, res) => {
    const user = users.find(user => user.name === req.params.name);
    if (!user) return res.status(404).send("User not found");

    res.json({ cart: user.cart });
});

app.post("/api/products/:id/feedbacks", (req, res) => {
    const product = products.find(product => product.id === req.params.id);
    if (!product) return res.status(404).send("Product not found");

    product.feedbacks.push(req.body.feedback);
    res.json({ message: "Feedback added"})
});

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.listen(port, "localhost", () => {
    console.log("Server running → your local host");
});

module.exports = app;