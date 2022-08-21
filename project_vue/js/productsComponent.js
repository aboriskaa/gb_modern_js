eShop.component('products-component', {
    props: ['filtered', 'imgCatalog'],
    template: `
        <div class="products">
           <product-component :filtered="filtered" :img-catalog="imgCatalog"></product-component>
        </div>
            `
});

eShop.component('product-component', {
    props: ['filtered', 'imgCatalog'],
    template: `
        <div class="product-item" v-for="product of filtered" :key="product.id_product">
            <img :src="imgCatalog" alt="product.id_product">
            <div class="desk">
                <h3>{{product.product_name}}</h3>
                <p>{{product.price}}</p>
                <button class="buy-btn" @click="$root.addProduct(product)">Add to cart</button>
            </div>
        </div>
`
})
