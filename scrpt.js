document.addEventListener("DOMContentLoaded", () => {
    const productsPerPage = 20;
    let currentPage = 1;
    const totalPages = Math.ceil(fullProductList.length / productsPerPage);

    const productsContainer = document.getElementById("products");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const pageInfo = document.getElementById("page-info");

    function loadProducts(page) {
        productsContainer.innerHTML = "";
        const start = (page - 1) * productsPerPage;
        const end = start + productsPerPage;
        const productsToShow = fullProductList.slice(start, end);

        productsToShow.forEach((product) => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.dataset.id = product.id;
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button class="add-to-cart">Add to Cart</button>
            `;
            productsContainer.appendChild(productDiv);
        });

        pageInfo.textContent = `Page ${page} of ${totalPages}`;
        prevBtn.disabled = page === 1;
        nextBtn.disabled = page === totalPages;
    }

    prevBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            loadProducts(currentPage);
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            loadProducts(currentPage);
        }
    });

    loadProducts(currentPage);
});
