class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.priceSum = this._amountCalc();
        this.render();
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 10000 },
            { id: 2, title: 'Mouse', price: 2000 },
            { id: 3, title: 'Keyboard', price: 3000 },
            { id: 4, title: 'Netbook', price: 5000 }
        ];
    }

    _amountCalc() {
        let sum = 0;
        for (let product of this.goods) {
            sum += product.price;
        }
        // debugger;
        return sum;
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.virtualRender());
        }
        block.insertAdjacentHTML("beforeend", this.priceSum);
        // выше проверка вывода общей суммы товаров
    }
}

class ProductItem {
    constructor(product, img = 'https://object.pscloud.io/cms/cms/Photo/img_0_62_1913_1_6.png') {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    virtualRender() {
        return `<div class="products-item">
        <img src="${this.img}" alt="${this.id}">
        <h3>${this.title}</h3>
        <h4>${this.price}</h4>
        <button class="products-item-buy-btn">Buy</button>
        </div>`
    }
}

let list = new ProductsList();


class cart {
    constructor() {
        this.productsInCart = [];
        this.cartSum = 0;
        this.cartAmount = 0;
        this.renderCart();
    }
    _countProduct() {

    }
    addToCart() {

    }
    delFromCart() {

    }
    orderBy() {

    }

    renderCart() {

    }
}


class cartsProduct {
    constructor(product) {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.virtualRender();
    }
    virtualRender() {
        return ``;

    }
}