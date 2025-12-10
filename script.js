const products = document.querySelectorAll(".services .product")

products.forEach(product => {
    product.addEventListener("click", () => {
        const productName = product.querySelector("h4").innerText;
        alert(productName);
    });
});