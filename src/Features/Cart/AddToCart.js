const URL = "http://localhost:3000/api/user";

export async function addToCart(userName, product) {
    const res = await fetch(`${URL}/${userName}/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product })
    });
    return await res.json();
}