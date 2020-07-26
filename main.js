console.log("我是JS");

// 定義渲染區域
// 變數 Var = new Vue(); - 要新增一個Vue物件
// el 指定元素 "選取器"
// data 資料
// { 物件名稱: 物件值 }

var vue1 = new Vue({
    el:"#vue1",
    data: {
        text: "Hello! this is Vue!!!!!",
        a: 100,   //數字
        b: 50,    //數字
        c:"99"    //字串
    }
});

var vue2 = new Vue({
    el:"#vue2",
    data:{
        aligment: "center",
        yahoo: "https://tw.yahoo.com/"  //字串,要用""包住
    }
});

var vue3 = new Vue({
    el: "#vue3",
    data:{
        //布林值
        test:true,
        activity:true
    }
});

var vue4 = new Vue ({
    el:"#vue4",
    data:{
        //使用陣列
        products:[
            {name:"奶茶", price:30},
            {name:"紅茶", price:20},
            {name:"綠茶", price:20},
            {name:"卡布奇諾", price:55},
            {name:"美式咖啡", price:45}
        ]
    }
});

//methods 定義涵式
//涵式名稱: function() { 涵式內容 }

var vue5 = new Vue({
    el: "#vue5",
    data : {
        text: "",
        count: 0,
        msg: ""
    },
    methods: {
        //show 為自訂義
        show: function() {
            this.text = "已點擊~"
        },
        add: function() {
            this.count++;
        },
        sub: function () {
            this.count--;
        },
        change: function() {
            this.msg = "已點擊!!!"
        }
    }
});

var vue6 = new Vue({
    el: "#vue6",
    data: {
        name: ""
    }
}); 


// 定義元件
// ("元件名稱"，{ 樣板： "元件內容" })
Vue.component("test-a", {
    template: "<h2>這是測試元件</h2>"
}) 

var vue7 = new Vue ({
    el: "#vue7"
})

// '' "" 單行HTML
// `` 多行HTML
Vue.component("vue-content",{
    template: `<h3>標題三</h3>
              <p>段落文字</p>
              <hr>`

})

var vue8 = new Vue({
    el: "#vue8"
})


// 元件應用:分頁重複內容-導覽列、頁尾
Vue.component("navbar",{
    template:`
    <nav>
    <a href="./about.html">關於我</a>
    <a href="#">作品集</a>
    <a href="./index.html">logo</a>
    <a href="./work.html">產品</a>
    <a href="#">聯絡我</a>
    </nav>
    `
})

var navbar = new Vue({
    el:"#navbar"
})