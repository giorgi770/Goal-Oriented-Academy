// პროდუქციის მასივი
const products = [
    { id: 1, title: 'Product 1' },
    { id: 2, title: 'Product 2' },
    { id: 3, title: 'Product 3' }
];

// ფუნქცია პროდუქციის გვერდზე დამატებისთვის
function displayProducts() {
    // ელემენტი, სადაც პროდუქცია დაემატება
    const productContainer = document.getElementById('product-list');
    
    // გადავუვლით ყველა პროდუქტს
    products.forEach(product => {
        // ახალი div ელემენტის შექმნა
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        
        // პროდუქტის სათაურის დამატება
        const titleElement = document.createElement('h2');
        titleElement.textContent = product.title;
        
        // ID ინფორმაციის დამატება
        const idElement = document.createElement('p');
        idElement.textContent = `ID: ${product.id}`;
        
        // სათაური და ID div-ში დამატება
        productElement.appendChild(titleElement);
        productElement.appendChild(idElement);
        
        // div ელემენტის გვერდზე დამატება
        productContainer.appendChild(productElement);
    });
}

// ფუნქციის გამოძახება
displayProducts();
