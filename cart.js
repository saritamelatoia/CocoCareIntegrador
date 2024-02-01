const backButtonContainer = document.getElementById('back-button-container');
const cartContainer = document.getElementById('cart-container');

// Función para renderizar productos en el carrito
const renderCartProducts = () => {
    const cartContainer = document.getElementById('cart-container');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Limpiar carrito
    cartContainer.innerHTML = '';

    // Renderizar cada producto
    cart.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `<p>${product.name} - ${product.price}</p>
        <button class="remove-from-cart" data-product-id="${product.id}">Eliminar del Carrito</button>`;
        cartContainer.appendChild(productElement);
    });
    //Botones de eliminar del carrito
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

    // Estado actual del carrito pre eliminar
    console.log('Cart before removal:', cart);

    // Filtrar carrito p eliminar el producto por ID 
    cart = cart.filter(product => product.id !== productId);

    // Estado actualizado del carrito post eliminación
    console.log('Cart after removal:', cart);

    // Guardar carrito actualizado en el localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Renderizar de nuevo los productos en el carrito
    renderCartProducts();
};



// Renderizar carrito al cargar pagina
document.addEventListener('DOMContentLoaded', renderCartProducts);
