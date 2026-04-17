

data.categories.forEach(category => {
    console.log(category.id + " " + category.name);
});

let activeCategory = data.categories[0]; // default kategorija
printProducts(activeCategory.products); // printa defaultl proizvode
printCurrentCategory(activeCategory.name); // printa defaultnu kat
//console.log(activeCategory); // aktivna kategorija - defultno prva

const CategoryContainer = document.getElementById("category-container");

data.categories.forEach(category => {
    // napravi div
    const button = document.createElement("button");
    button.textContent = category.name;

    button.addEventListener("click", () => {
        //document.querySelectorAll("#category button").forEach(btn => btn.classList.remove("active")); // micemo active klasu sa svih gumba


        //button.classList.add("active"); // dodajemo active klasu na kliknuti gumb
        activeCategory = category; // postavljamo aktivnu kategoriju na kliknutu
        console.log("Aktivna kategorija:", activeCategory);

        printCurrentCategory(activeCategory.name); // ispisujemo ime aktivne kategorije
        printProducts(activeCategory.products); // ispisujemo proizvode aktivne kategorije
        

    });

    CategoryContainer.appendChild(button);
});

function printProducts(products) {
    const itemsContainer = document.getElementById("items-container");
    itemsContainer.innerHTML = ""; // brisemo container

    let i = 0;

    products.forEach(item => {
    

        itemsContainer.innerHTML += `
        <div class="item">
            <div class="item-image">

                <img src="/assets/images/${item.image}" alt="">

            </div>

            <div class="item-info">
                <div class="item-name">
                    ${item.name}
                </div>

                <div class="item-price">
                    ${item.price} €
                </div>
            </div>

        </div>
        `;

        console.log("products.forEach(" + i + "): " + item.name + " " + item.price + " " + item.image); // ispisujemo ime i cijenu proizvoda
        i++;

    });

}


    // ispis trenutne kategorije
function printCurrentCategory(name) {
    const currentCategory = document.getElementById("current-category");
    currentCategory.textContent = name; // ispisujemo ime prve kategorije
    console.log("Trenutna kategorija: " + name);
}





