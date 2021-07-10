var name1 = document.getElementById("name1");
var input;

function inputName() {
    input = prompt("请输入你的姓名：")
    while (1) {
        if (input == null || input == '') {
            alert("请输入姓名！");
            input = prompt("请输入你的姓名：");
        } else {
            alert("你的姓名是:" + input);
            name1.value = input;
            break;
        }
    }
}