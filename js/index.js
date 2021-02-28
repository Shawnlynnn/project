//验证码块
let c = new GVerify({
    id: 'code',
    type: 'number',
    length: 4
});
let btn = document.querySelector('#btn');
let cod = document.querySelector('.code');
let username = document.querySelector(".username");
let password = document.querySelector(".password");
let loginForm = document.querySelector(".loginForm");
// 登录的验证表单
loginForm.onsubmit = function() {
    let e = window.event;
    e.preventDefault();

    if (!username.value || !password.value || !cod.value) {
        alert('输入框不能为空');
        return
    }
    let res = c.validate(cod.value);
    // console.log(res);
    if (res == true) {
        pAjax({
            type: 'post',
            url: '../api/index.php',
            data: {
                username: username.value,
                password: password.value
            }
        }).then(res => {
            res = JSON.parse(res);
            if (res.code == 1) {
                setCookie('login', username.value, 18000);
                // 跳转页面 如果从购物车过来的时候登录成功去购物车页面
                // 否则就去到首页
                let url = localStorage.getItem('url');
                if (url) {
                    location.href = url;
                    // 登录成功的时候把url的这个localstorage值清除
                    localStorage.removeItem('url');
                } else {
                    location.href = '../html/management.html';
                }

            } else {
                alert('账号密码不匹配')
            }
        })

    } else {
        alert('验证码不正确')
    }
}