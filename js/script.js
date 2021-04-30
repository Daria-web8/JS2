const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: () => ({
    goods: [],
    placeholderString: 'Введите название заметки',
    filteredGoods: [],
    searchLine: ''
  }),
  mounted() {
    this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      this.goods = JSON.parse(goods);
      this.filteredGoods = JSON.parse(goods);
    });
  },
  methods: {
    makeGETRequest(url, callback) {
      let xhr;
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) { 
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          callback(xhr.responseText);
        }
      }

      xhr.open('GET', url, true);
      xhr.send();
    },
    FilterGoods() {
      let userValue = this.searchLine;

    },
    isVisibleCart() {
      const f = document.querySelector('.cart')
      f.style.display = 'block';
    },
    
  },
  watch: {
    filteredGoods() {
      console.log('this.filteredGoods :>> ', this.filteredGoods);
    },
    searchLine(value) {
      if(value.length > 30) {
          this.searchLine = ''
      }
  }
  }
})