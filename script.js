// Fetch the .txt file
fetch("../textData/sourcecode.txt")
    .then((response) => response.text())
    .then((data) => {
        const textContainer = document.getElementById("sourcecode_container");
        textContainer.innerText = data;
    })
    .catch((error) => {
        console.log("Error fetching the .txt file:", error);
    });
