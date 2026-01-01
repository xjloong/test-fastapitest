async function send() {
    const text = document.getElementById("textInput").value;

    const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: text
        })
    });

    const data = await response.json();
    document.getElementById("result").innerText = data.result;
}
