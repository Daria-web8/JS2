const goodsSearch = () => {return Vue.component('goods-search', {
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
} 

export default goodsSearch