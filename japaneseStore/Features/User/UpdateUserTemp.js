const URL = "http://localhost:3000/api/user";

export async function updateTempInterests(userName, tempInterests) {
    const res = await fetch(`${URL}/${userName}/temp-interests`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ temp_interests: tempInterests })
    })
    return await res.json();
}