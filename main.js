console.log("我是JS");

// 定義渲染區域
// 變數 Var = new Vue(); - 要新增一個Vue物件
// el 指定元素 "選取器"

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
        yahoo: "https://tw.yahoo.com/"
    }
});