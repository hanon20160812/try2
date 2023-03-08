
const vm = Vue.createApp({
  data() {
    return {
      itemList: [
        {
          id: '1',
          itemName: '【豹包】蘇胡啦！',
          imgUrl: '../_img/pr01.png',
          price: '399',
          o_price: '599',
          count: '1'
        },
        {
          id: '2',
          itemName: '骷髏手短黑T',
          imgUrl: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          price: '790',
          o_price: '699',
          count: '1'
        },
        {
          id: '3',
          itemName: '超時尚牛仔庫',
          imgUrl: 'https://images.unsplash.com/photo-1529391409740-59f2cea08bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1124&q=80',
          price: '1200',
          o_price: '699',
          count: '1'
        },
        {
          id: '4',
          itemName: '質感褐色系大衣服',
          imgUrl: 'https://images.unsplash.com/photo-1491998664548-0063bef7856c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          price: '2300',
          o_price: '699',
          count: '1'
        },
      ]
    }
  },
  methods: {
    itemDel(index, count) {
      this.itemList.splice(index,count);
    }
  }

}).mount('#app');