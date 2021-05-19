const cart = () => {return Vue.component('cart', {
  template: `
        <div>
            <button class="cart-button" type="button" @click="handleCart">Корзина</button>
            <div v-show="isVisibleCart" class="cart">Корзина</div>
        </div>
    `,
  data: () => ({
    isVisibleCart: true,
  }),
  methods: {
    handleCart() {
      this.isVisibleCart = !this.isVisibleCart
    },
  },
})}

  export default cart