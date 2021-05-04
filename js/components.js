Vue.component('goods-list', {
  name: 'goods-list',
  props: ['goods'],
  template: `
        <main>
            <div v-if="goods.length !== 0" class="goods-list">
                <div class="goods-item" v-for="good in goods">
                    <goods-item :good='good' />
                </div>
            </div>
            <h3 v-else>No data</h3>
        </main>
    `,
})
Vue.component('goods-item', {
  name: 'goods-item',
  props: ['good'],
  template: `
        <div>
            <h3>{{ good.product_name }}</h3>
            <p>{{ good.price }}</p>
        </div>
    `,
})
Vue.component('goods-search', {
  template: `
        <div>
        <input 
            :value="value" 
            v-on:input="$emit('input', $event.target.value)" 
            type="text" 
            class="goods-search" 
        />
        <button class="search-button" type="button" @click='$emit("filter-goods")'>Искать</button>
        </div>
    `,
  props: ['value'],
})
Vue.component('cart', {
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
})
