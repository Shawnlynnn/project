let user = document.querySelector('.username');
let tel = document.querySelector('.tel');
let email = document.querySelector('.email');
let psw = document.querySelector('.password');
let code = document.querySelector('.code');
let btn = document.querySelector('#btn');
let inputs = document.querySelectorAll('input');
// let tip = document.querySelectorAll('span')

// console.log(inputs);
// console.log(tip);
let userReg = /^\d{11}$/;
let telReg = /^1[356789]\d{9}$/;
let emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
let pswReg = /^[A-Z][a-zA-Z0-9\S]{7,11}/;


btn.onclick = function() {
    let e = window.event;
    e.preventDefault();
    if (userReg.test(user.value) == false || !user.value) {
        alert('请输入正确的账号格式');
    } else if (telReg.test(tel.value) == false || !tel.value) {
        alert('请输入正确的手机号格式');
    } else if (pswReg.test(psw.value) == false || !psw.value) {
        alert('请输入正确的密码格式');
    } else if (emailReg.test(email.value) == false || !email.value) {

        alert('请输入正确的邮箱格式');
    } else if (code.value !== '145156' || !code.value) {
        console.log(code.value);
        alert('输入的邀请码不正确或不能为空');

    } else {

        pAjax({
            type: 'post',
            url: '../api/register.php',
            data: {
                username: user.value,
                password: psw.value,
                Tel: tel.value,
                email: email.value,
            }
        }).then(res => {

            // res = JSON.parse(res);
            // console.log(res);
            if (res == 1) {
                alert('注册成功，立即前往登录界面');
                location.href = '../html/index.html';
            }
        });


    }
}

inputs.forEach(function(item) {

    item.onfocus = function() {
        item.nextElementSibling.nextElementSibling.style.display = 'block';

    }
});
inputs.forEach(function(item) {
    item.onblur = function() {
        item.nextElementSibling.nextElementSibling.style.display = 'none';
    }
})