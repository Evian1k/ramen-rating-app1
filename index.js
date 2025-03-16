function showDetail(name, imgSrc, rating, comment) {
    document.getElementById("detail-img").src = imgSrc;
    document.getElementById("detail-name").textContent = name;
    document.getElementById("detail-rating").textContent = rating;
    document.getElementById("detail-comment").textContent = comment;
}

function addRamen() {
    const name = document.getElementById("name").value;
    const restaurant = document.getElementById("restaurant").value;
    const image = document.getElementById("image").value || "images/placeholder.jpg"; // Default image
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value;

    if (!name || !restaurant || !comment) {
        alert("Please fill out all fields!");
        return;
    }

    // Add to Gallery
    const newImg = document.createElement("img");
    newImg.src = image;
    newImg.alt = name;
    newImg.onclick = () => showDetail(name, image, `${rating}/10`, comment);
    document.getElementById("ramen-gallery").appendChild(newImg);

    // Reset Form
    document.getElementById("ramen-form").reset();
}
