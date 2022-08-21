eShop.component('cart-component', {
    props: ['cart', 'img'],
    template: `
    <div class="cart">

    <!-- There is the search form! -->
    <search-component></search-component>
    <!-- There is the search form! -->

    <button class="btn-cart" type="button" @click="$parent.show = !$parent.show">Cart</button>

    <div class="cart-block" v-show="$parent.show">

        <p v-if="!cart.length">Cart is empty</p>

        <div class="cart-item" v-for="item of cart" :key="item.id_product">
            <div class=" product-bio">
                <img :src="img" alt="Some image">
                <div class="product-desc">
                    <p class="product-title">{{item.product_name}}</p>
                    <p class="product-quantity">{{item.quantity}}</p>
                    <p class="product-single-price">{{item.price}}</p>
                </div>
            </div>
            <div class="right-block">
                <p class="product-price">{{item.quantity * item.price}}</p>
                <button class="del-btn" @click="$parent.removeProduct(item);print(img)">&times;</button>
            </div>
        </div>

    </div>
</div>
`,
    methods: {
        print(imgCart) {
            console.log(imgCart)
        }
    },
});