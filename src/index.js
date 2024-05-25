const quote = document.getElementById("quote");
const author  = document.getElementById("author");
const button1 = document.getElementById("Start");
const button2 = document.getElementById("Stop");
const category = document.getElementById("category");
button1.addEventListener("click", function() {
    const apiKey = "d11hETUiPqZi1+x+dlBCSQ==5offOApHwgjx2C4F";
    const categoryValue = category.value.trim();
    if(categoryValue === "") {
        alert("Please select a category");
        return;
    }
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${categoryValue}`, {
        method: "GET",
        headers: {
            "X-Api-Key": apiKey,
            "Content-Type": "application/json",
        }
    })
    .then((response) => response.json())
    .then((data) => {
        if(data.length > 0) {
            quote.innerHTML = data[0].quote;
            author.innerHTML = data[0].author;
        }
        else {
            quote.innerHTML = "No quote found";
            author.innerHTML = "";
        }
    })
    .catch((error) => {
        console.error("Error:", error);
    });
});

button2.addEventListener("click", function() {
    quote.innerHTML = "";
    author.innerHTML = "";
});