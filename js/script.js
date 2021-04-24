// https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses – адрес API;
// /catalogData.json – получить список товаров;
// /getBasket.json – получить содержимое корзины;
// /addToBasket.json – добавить товар в корзину;
// /deleteFromBasket.json – удалить товар из корзины.

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(url) {
  let xhr;
  return new Promise ((resolve, reject) => {
    if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if(xhr.status === 200) {resolve(xhr.responseText)}else{
        reject('Error')
      };
    }
    }
    xhr.open('GET', `${API_URL}${url}`, true);
    xhr.send();
})};

class GoodsItem {
  constructor(product_name, price) {
    this.product_name = product_name;
    this.price = price;
  }

  render() {
    return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    return makeGETRequest(`/catalogData.json`)
     .then((goods) => {
      this.goods = JSON.parse(goods);
    })
  }

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }

  getTotalSum() {
    return this.goods.forEach((item) => totalSum += item.price);
  }
}

class GoodsCart extends GoodsList {
  constructor() {
    super();
  }
  clear() {}
  buyAll() {}
}

class CartItem extends GoodsItem {
  constructor() {
    super();
  }
  delete() {}
  addOne() {}
  removeOne() {}
}

const list = new GoodsList();
list.fetchGoods()
.then(() => list.render())