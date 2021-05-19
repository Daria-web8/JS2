const goodsList = () =>{return Vue.component('goods-list', {
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
  })}
export default goodsList