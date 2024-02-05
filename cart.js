const backButtonContainer = document.getElementById('back-button-container');
const cartContainer = document.getElementById('cart-container');
const totalContainer = document.getElementById('total-container');

// Función para calcular el total del carrito
const calculateTotal = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.reduce((accumulator, product) => accumulator + product.price, 0);
};

// Función para renderizar productos en el carrito y mostrar el total
const renderCartProducts = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Limpiar carrito
    if (cartContainer != null) {
        cartContainer.innerHTML = '';
    }

    // Renderizar cada producto
    cart.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `<p>${product.name} - $${product.price}</p>
        <button class="remove-from-cart" data-product-id="${product.id}">Eliminar del Carrito</button>`;
        cartContainer.appendChild(productElement);
    });

    // Calcular el total del carrito
    const total = calculateTotal();

    // Mostrar el total en el span con el id "total-container"
    if (totalContainer != null) {
        totalContainer.textContent = `Total: $${total}`;
    }

    // Botones de eliminar del carrito
    const removeButtons = cartContainer.querySelectorAll('.remove-from-cart');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeFromCart);
    });

    return;
};

/* ------------- Función para eliminar un producto del carrito ------------*/
const removeFromCart = (e) => {
    const productId = e.target.dataset.productId;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Filtrar carrito para eliminar el producto por ID 
    cart = cart.filter(product => product.id !== productId);

    // Estado actualizado del carrito post eliminación
    console.log('Cart after removal:', cart);

    // Guardar carrito actualizado en el localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Renderizar de nuevo los productos en el carrito y actualizar el total
    renderCartProducts();
};

// Renderizar carrito al cargar la página
document.addEventListener('DOMContentLoaded', renderCartProducts);
