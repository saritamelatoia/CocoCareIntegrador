const productsData = [
    { category: "scrubs", name: "Watermelon Scrub", image: "./img/producto1.jpg", price: 45, id: "1"},
    { category: "bathsalt", name: "Hibiscus Bath Soak", image: "./img/producto2.jpg", price: 45, id: "2"},
    { category: "serum", name: "Botanic Serum", image: "./img/producto3.jpg", price: 45, id: "3"},
    { category: "scrubs", name: "Mermaid Body Glow", image: "./img/producto4.jpg", price: 45, id: "4"},
    { category: "milkbath", name: "Blue Tansy", image: "./img/producto14.jpg", price: 45, id: "5"},
    { category: "serum", name: "Body Glow", image: "./img/producto6.jpg", price: 45, id: "6"},
    { category: "serum", name: "Pink Serum", image: "./img/producto7.jpg", price: 45, id: "7"},
    { category: "serum", name: "French Girl Lumiére", image: "./img/producto8.jpg", price: 45, id: "8"},
    { category: "milkbath", name: "Pink Clay", image: "./img/producto9.jpg", price: 45, id: "9"},
    { category: "milkbath", name: "Milk Bath", image: "./img/producto10.jpg", price: 45, id: "10"},
    { category: "serum", name: "Pink Serum Refill", image: "./img/producto11.jpg", price: 45, id: "11"},
    { category: "milkbath", name: "Pink Clay Bath", image: "./img/producto12.jpg", price: 45, id: "12"},
    { category: "milkbath", name: "Coconut Bath", image: "./img/producto13.jpg", price: 45, id: "13"},
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

