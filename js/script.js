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


const q = '\'Mercury is the closest planet to the Sun. Venus spins the opposite way to the Earth, so the Sun rises in the west and sets in the east. The next planet is ours. It\'s the only planet that we know has life — maybe there is life on another planet but we don\'t know yet. Mars is like a bright red star. Jupiter is the biggest planet in our solar system and has fifteen more moons than the Earth. To reach it from the Earth you have to go through the asteroid belt that lies between Mars and Jupiter. Saturn looks beautiful with its coloured rings, but it is very cold and has lots of strong storms. The last three planets are Uranus, Neptune and Pluto. Pluto is the farthest. They are all part of our solar system.\''

const reg1 = /\B\'|\'\B/gi;
const changeQ = q.replace(reg1, '\"');
console.log(changeQ)


/* 3. *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить. При нажатии на кнопку Отправить произвести валидацию полей следующим образом:

a. Имя содержит только буквы.

b. Телефон имеет вид +7(000)000-0000.

c. E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.

d. Текст произвольный.

e. Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой и сообщить пользователю об ошибке.
 */
const box = [document.querySelector('#name'),document.querySelector('#tel'),document.querySelector('#email'),document.querySelector('#text')];
const divs = [document.querySelector('#ndiv'),document.querySelector('#tdiv'),document.querySelector('#ediv')];
const btn = document.querySelector('#submit');
const nv = /^([a-zа-яё]+)$/i
const tv = /^(\+[0-9]\([0-9]{3}\)[0-9]{3}-[0-9]{4})$/
const ev = /^(([a-z]+|[a-z]+\.[a-z]+|[a-z]+\-[a-z]+)@[a-z]+\.[a-z]{2,6})$/
btn.addEventListener('click', (e) => {
  if(nv.test(box[0].value)&&tv.test(box[1].value)&&ev.test(box[2].value)){
    console.log('It is right!');
    for(let i = 0; i<box.length; i++){
      box[i].style.border = '1px solid #fff';
      divs[i].style.display = 'none'
    }
  }else{
    const values = [nv.test(box[0].value),tv.test(box[1].value),ev.test(box[2].value),true];
    for(let i = 0; i<values.length; i++){
      if(values[i]==false){
        box[i].style.border = '1px dashed red';
        divs[i].style.display = 'block'
      }else{
        box[i].style.border = '1px solid #fff';
        divs[i].style.display = 'none'
      }
    }
  }
})

