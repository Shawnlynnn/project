// 判断是否登录
let login = getCookie('login');

if (!login) {
    alert('你已超过登录有效时长或者没有登录，正在跳转登录页面');
    localStorage.setItem('url', location.href);
    location.href = '../html/index.html';
}


// 点退出之后，清除cookie
let loginout = $('.loginout');
// console.log(loginout);
loginout.on('click', function() {
    delCookie('login')
})

let tomain = $('.tomain');
tomain.on('click', function() {

    location.href = '../html/management.html'
})

// console.log(login);
// let username = $('.user');
// let username = $('.username')
let username = document.querySelector('.username')
let prepsw = document.querySelector('.prepsw');
let aftpsw = document.querySelector('.aftpsw');
let btn = $(".btn");
// console.log(username);
// console.log(username.value);

// 修改密码
btn.on('click', function() {
    let e = window.event;
    e.preventDefault();
    // console.log(username.val());
    if (!username.value || !prepsw.value || !aftpsw.value) {
        alert('输入框不能为空！')

    } else {

        pAjax({
            type: 'post',
            url: '../api/updateadmin.php',
            data: {
                username: username.value,
                prepsw: prepsw.value,
                aftpsw: aftpsw.value,
            }
        }).then(res => {

            res = JSON.parse(res);
            console.log(res);
            if (res.code == true) {
                alert('修改成功！');
                username.value = prepsw.value = aftpsw.value = '';
            } else {
                alert('你填的内容有误,修改失败')
            }
        });
    }

})