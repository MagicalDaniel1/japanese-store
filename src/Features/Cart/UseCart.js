const URL = "http://localhost:3000/api/user";

export async function getCart(userName) {
    const res = await fetch(`${URL}/${userName}/cart`);
    return await res.json();
}