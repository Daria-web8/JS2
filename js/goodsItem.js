const goodsItem = () => {return Vue.component('goods-item', {
    name: 'goods-item',
    props: ['good'],
    template: `
          <div>
              <h3>{{ good.product_name }}</h3>
              <p>{{ good.price }}</p>
          </div>
      `,
  })}

export default goodsItem