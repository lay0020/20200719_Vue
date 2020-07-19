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