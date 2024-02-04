const productsData = [
    { category: "scrubs", name: "Watermelon Sugar Scrub", description: "Descripción del Producto 1", image: "./img/producto1.jpg", price: "$45", id: "1"},
    { category: "bathsalt", name: "Hibiscus Bath Soak", description: "Descripción del Producto 2", image: "./img/producto2.jpg", price: "$45", id: "2"},
    { category: "serum", name: "Botanic Serum", description: "Descripción del Producto 3", image: "./img/producto3.jpg", price: "$45", id: "3"},
    { category: "scrubs", name: "Mermaid Body Glow", description: "Descripción del Producto 1", image: "./img/producto4.jpg", price: "$45", id: "1"},
    { category: "milkbath", name: "Blue Tansy", description: "Descripción del Producto 2", image: "./img/producto14.jpg", price: "$45", id: "2"},
    { category: "serum", name: "Body Glow", description: "Descripción del Producto 3", image: "./img/producto6.jpg", price: "$45", id: "3"},
    { category: "serum", name: "Pink Serum", description: "Descripción del Producto 1", image: "./img/producto7.jpg", price: "$45", id: "1"},
    { category: "serum", name: "French Girl Lumiére", description: "Descripción del Producto 2", image: "./img/producto8.jpg", price: "$45", id: "2"},
    { category: "milkbath", name: "Pink Clay", description: "Descripción del Producto 3", image: "./img/producto9.jpg", price: "$45", id: "3"},
    { category: "milkbath", name: "Milk Bath", description: "Descripción del Producto 1", image: "./img/producto10.jpg", price: "$45", id: "1"},
    { category: "serum", name: "Pink Serum Refill", description: "Descripción del Producto 2", image: "./img/producto11.jpg", price: "$45", id: "2"},
    { category: "milkbath", name: "Pink Clay Bath", description: "Descripción del Producto 3", image: "./img/producto12.jpg", price: "$45", id: "3"},
    { category: "milkbath", name: "Coconut Bath", description: "Descripción del Producto 3", image: "./img/producto13.jpg", price: "$45", id: "3"},
];


//Chunking
const chunkArray = (size) => {
    let productList = [];
    for (let i = 0; i < productsData.length; i += size){
        productList.push(productsData.slice(i, i + size));
    }
    return productList;
};


// AppState

const appState = {
    products: chunkArray(6),
    currentProductsIndex: 0,
    productsLimit: chunkArray(6).length,
    activeFilter: null, 
}

