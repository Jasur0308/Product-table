const $products = document.getElementById("products");
const $nameProduct = $products.querySelector("#nameProduct");
const $amount = $products.querySelector("#amount");
const $price = $products.querySelector("#price");
const $added = $products.querySelector("#added");
const $deleted = $products.querySelector("#deleted");
const $total = $products.querySelector("#total");
const productTable = document.getElementById("productTable").getElementsByTagName('tbody')[0];
const $totalSum = document.getElementById("totalSum");

$products.addEventListener("submit", (e) => {
    e.preventDefault();
});

let arrProducts = [];

function Product(name, amount, price) {
    this.name = name;
    this.amount = Number(amount);
    this.price = Number(price);
}

function addProduct() {
    if ($nameProduct.value && $amount.value && $price.value) {
        const product = new Product($nameProduct.value, $amount.value, $price.value);
        arrProducts.push(product);
        $nameProduct.value = '';
        $amount.value = '';
        $price.value = '';
        updateTable();
        console.log(arrProducts);
        alert("Product added successfully!");
    }
}

function deleteProduct() {
    if ($nameProduct.value) {
        const productIndex = arrProducts.findIndex(product => 
            product.name === $nameProduct.value
        );
        if (productIndex !== -1) {
            arrProducts.splice(productIndex, 1);
            $nameProduct.value = '';
            $amount.value = '';
            $price.value = '';
            updateTable();
            console.log(arrProducts);
            alert("Product deleted successfully!");
        }
    }
}

function calculateTotal() {
    let sum = 0;
    for (let i = 0; i < arrProducts.length; i++) {
        let totalPerProduct = arrProducts[i].amount * arrProducts[i].price;
        sum += totalPerProduct;
    }
    $totalSum.value = sum;
    console.log(sum);
}

function updateTable() {
    productTable.innerHTML = '';
    
    arrProducts.forEach((product, index) => {
        let row = productTable.insertRow(index);
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        let cell3 = row.insertCell(3);
        cell0.innerHTML = index + 1;
        cell1.innerHTML = product.name;
        cell2.innerHTML = product.amount;
        cell3.innerHTML = product.price;
    });
    
    if (productTable.firstChild) {
        productTable.firstChild.style.backgroundColor = "lightblue";
    }
    if (productTable.lastChild) {
        productTable.lastChild.style.backgroundColor = "lightgreen";
    }
}

$added.addEventListener("click", addProduct);
$deleted.addEventListener("click", deleteProduct);
$total.addEventListener("click", calculateTotal);