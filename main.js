//Contenedor de productos
const productContainer = document.getElementById("product-container");
//Load Button(siguiente y atrás)
const nextLoadButton = document.querySelector('.next-load-button');
const backLoadButton = document.querySelector('.back-load-button');
//Container categorias
const categoriesContainer = document.getElementById("categories-container");
//HTML categorias
const categoriesFilters = document.querySelectorAll(".category");
// Cart
const cartNumberElement = document.getElementById('cart-number');
// Boton que dirija al carrito
const cartButton = document.getElementById("go-to-cart-button");
// Toggle Menú
const toggleMenuBtn = document.getElementById("icon");
const toggleMenuDisplay = document.getElementById("menu-container");



// Funcion crear HTML del producto
const cardTemplate = (product) => {
    return `
    <div class="card">
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <h2 class="product-title">${product.name}</h2>
        <p class="product-price">${product.price}</p>
        <button class="add-to-cart" data-product-id="${product.id}">Agregar al Carrito</button>
    </div>
    `;
};


// Funcion para renderizar productos
const renderProducts = (productList) => {
    productContainer.innerHTML = productList.map(cardTemplate).join(""); 
};


// Función para pasar a la siguiente página de productos
const nextProductsPage = () => {
    if (appState.currentProductsIndex < appState.products.length - 1) {
        appState.currentProductsIndex += 1;
        renderProducts(appState.products[appState.currentProductsIndex]);
    }
};

// Función para volver atrás (paginación)
const backProductsPage = () => {
    if (appState.currentProductsIndex > 0) {
        appState.currentProductsIndex -= 1;
        renderProducts(appState.products[appState.currentProductsIndex]);
    }
};


/* -------------- FILTROS BOTONESSSSS ---------------- */


const changeBtnActiveState = (selectedCategory) => {
    const categories = [...categoriesFilters];

    categories.forEach((categoryBtn) => {
        if (categoryBtn.dataset.category !==
            selectedCategory) {
                categoryBtn.classList.remove("active");
                return;
            }
            categoryBtn.classList.add("active");
    })
};

//Cambiar el estado del filtro activo
const changeFilterState = (btn) => {
    appState.activeFilter = btn.dataset.category;
    changeBtnActiveState(appState.activeFilter);

hidePaginationButtons();

if (appState.activeFilter === "todos") {
    appState.currentProductsIndex = 0;
};
};


    // Función para ocultar botones al filtrar
const hidePaginationButtons = () => {
    if (appState.activeFilter !== "todos") {
        nextLoadButton.style.display = 'none';
        backLoadButton.style.display = 'none';
    } else {
        // Si la categoría activa es "todos", muestra los botones de paginación
        nextLoadButton.style.display = 'block';
        backLoadButton.style.display = 'block';
    }
};

//Funcion para filtrar los productos
const renderFilteredProducts = () => {
    const filteredProducts = productsData.filter(
        (product) => product.category === appState.
        activeFilter
    );

renderProducts(filteredProducts);
};

//Aplicar filtro
const applyFilter = ({ target }) => {
    if (inactiveFilterBtn(target)) {
        changeFilterState(target);
        productContainer.innerHTML = "";

        if (appState.activeFilter) {
            renderFilteredProducts();
            appState.currentProductsIndex = 0;
            return;
        }

        renderProducts(appState.products[0]);
    }
};


// Funcion para saber si es un btn categoria y no esta actio

const inactiveFilterBtn = (element) => {
    return (
        element.classList.contains("category") &&
        !element.classList.contains("active")
    );
};

/* ------------------------------------CARRITO -------------------------------------------------*/

// Agregar al carrito
const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    Toastify({
        text: "Producto agregado al carrito!",
        className: "info",
        gravity: "bottom",
        style: {
        color: "#333333",
        background: "#FF8494",
        },
        duration: "1000",
    }).showToast();
    updateCartNumber();
};

// Función para actualizar el número del carrito en el navbar
const updateCartNumber = () => {
    const cartNumberElement = document.getElementById('cart-number');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartNumber = cart.length;

    cartNumberElement.textContent = cartNumber;

    setTimeout(() => {
        const bodyWidth = document.body.offsetWidth;
    }, 0);
};

// Actualizar iconito

const actualizarIcono = (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const productId = e.target.dataset.productId;
        const selectedProduct = appState.products[appState.currentProductsIndex].find(product => product.id === productId);
        if (selectedProduct) {
            addToCart(selectedProduct);
        }
    }
};

// Boton carrito que dirija al carrito
const clickCart = () => {
    window.location.href = 'cart.html';
};

// Toggle Menú
const toggleMenu = (e) => {
    const nav = document.querySelector('.navbar')

    nav.classList.toggle('show');

}

//Función init
const init = () => {
renderProducts(appState.products[0]);
nextLoadButton.addEventListener("click", nextProductsPage);
backLoadButton.addEventListener("click", backProductsPage);
categoriesContainer.addEventListener("click", applyFilter);
document.addEventListener('click', actualizarIcono);
cartButton.addEventListener('click', clickCart);
toggleMenuBtn.addEventListener('click', toggleMenu);

updateCartNumber();
};



init ();
