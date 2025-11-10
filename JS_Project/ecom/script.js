document.addEventListener("DOMContentLoaded", () => {

    const products = [
        {id: 1, name: "Product: 1", price: 29.99},
        {id: 2, name: "Product: 2", price: 19.99},
        {id: 3, name: "Product: 3", price: 59.99},
        {id: 4, name: "Product: 4", price: 79.9},
    ]
    const cart = [];

    const productList = document.getElementById("product-list")
    const cartItems = document.getElementById("cart-items")
    const emptyCart = document.getElementById("empty-cart")
    const cartTotal = document.getElementById("cart-total");
    const TotalPriceDisplay = document.getElementById("total-price")
    const checkoutButton = document.getElementById("checkout-btn")

    products.forEach(product => {
        const productDiv = document.createElement('div')
        //adding class
        productDiv.classList.add("product")
        productDiv.innerHTML = `
        <span>
        ${product.name} = ${product.price}
        </span>
        <button data-id = "${product.id}">Add to Cart</button>    
        `;
                // Aria-label: data-id in above button

        productList.append(productDiv)
    })
    productList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON"){
            const productID = parseInt(e.target.getAttribute('data-id'));       // original = string, converted into number
            const product = products.find((p) => p.id === productID);
            addToCart(product)
        }
    })

    function addToCart(product){
        cart.push(product);
        renderCart();
    }

    function renderCart(){
        cartItems.innerText = "";
        let totalPrice = 0;

        if(cart.length > 0){
            emptyCart.classList.add("hidden");
            cartTotal.classList.remove("hidden");
            cart.forEach((item, index) => {
                totalPrice += item.price
                const cartItem = document.createElement('div');
                cartItem.innerHTML = `${item.name}, ${item.price}`;
                cartItems.appendChild(cartItem);
                TotalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`; // tofixed gives precise values
            });
        } else {
            emptyCart.classList.remove("hidden");
            TotalPriceDisplay.textContent = `0.00`;
        }
    }

    // const checkoutButtonAlert = document.getElementById("checkout-btn");
    checkoutButton.addEventListener("click", () => {
        cart.length = 0;
        alert("Thank you, Successfully Checkout");
        renderCart();
    })
})