console.log("我是JS");

// 定義渲染區域
// 變數 Var = new Vue(); - 要新增一個Vue物件
// el 指定元素 "選取器"

var vue1 = new Vue({
    el:"#vue1",
    data: {
        text: "Hello! this is Vue"
    }
});