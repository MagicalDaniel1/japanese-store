const URL = "http://localhost:3000/api/user";

export async function addFavorite(userName, productId) {
    const res = await fetch(`${URL}/${userName}/favorites`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId })
    })
    return await res.json();
}