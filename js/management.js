// 如果login的值为空的时候就说明没有登录，就应该去登录页面

let login = getCookie('login');
if (!login) {
    alert('你已超过登录有效时长或者尚未登录，正在跳转登录页面');
    localStorage.setItem('url', location.href);
    location.href = '../html/index.html';
}

let loginout = $('.loginout');
// console.log(loginout);
loginout.on('click', function() {
    delCookie('login')
})






let tbody = document.querySelector('#content');

getData(1, 10);

let page = document.querySelector('.page');
let index1 = document.querySelector('.index')

let flag = true;
// console.log(page);
// console.log(tbody);


async function getData(index, length) {
    let data = await pAjax({
        url: '../api/equip.php',
        data: {
            index: index,
            length: length,
        }
    });
    data = JSON.parse(data);
    // console.log(data);
    if (flag) {
        new Pagination(page, {
            pageInfo: {
                pagenum: index,
                pagesize: length,
                total: data.total,
                totalpage: Math.ceil(data.total / length)
            },
            textInfo: {
                first: '首页',
                prev: '上一页',
                next: '下一页',
                last: '尾页'
            },
            change: function(index) {
                flag = false;
                getData(index, 10);
            }
        });
    }
    tbody.innerHTML = '';
    render(data);
}
// 渲染从数据库拉取的数据
function render(data) {
    let list1 = data.list;
    // console.log(list1);
    list1.forEach((item, index) => {

        let str = `<tr>
        <td>${item.equipname}</td>
        <td>${item.value}</td>
        <td>${item.equipstatus}</td>
        <td>${item.in_time}</td>
        <td>
            <button type="button" class="del" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">操作<span class="caret"></span></button>

        </td>
        <td>${item.up_time}</td>
    </tr>`


        tbody.innerHTML += str;
    })
    let str1 = `<div class="display">
    <div>
        <p>资产总数<span>${data.total}</span></p>
    </div>
    <div>
        <p>资产总额<span></span></p>
    </div>
    <div>
        <p>正常资产数<span></span></p>
    </div>
    <div>
        <p>报修数<span></span></p>
    </div>
    <div>
        <p>报废数<span></span></p>
    </div>
    <div>
        <p>阿巴阿巴<span></span></p>
    </div>
</div>`

    index1.innerHTML = str1;
}


let equipname = document.querySelector('.equipname');
let equipnum = document.querySelector('.equipnum');
let value = document.querySelector('.equipvalue');
let in_time = document.querySelector('.in_time');
// let sure = document.querySelector('.sure');
let sure = $('.sure');
// console.log(sure);



let timeReg = /^\d{4}(\-)(0[1-9]|1[0-2])\1(0[1-9]|[12][0-9]|3[0-1])$/;

// 采购入库传输数据到后台申请操作数据库
sure.on('click', function() {
    let e = window.event;
    e.preventDefault();
    if (!equipname.value) {
        alert('请输入资产名称！')
    } else if (!equipnum.value) {
        alert('请输入资产编号！')
    } else if (!value.value) {
        alert('请输入资产价值！')
    } else if (timeReg.test(in_time.value) == false || !in_time.value) {
        alert('请输入正确的入库时间格式！')
    } else {

        pAjax({
            type: 'post',
            url: '../api/addequip.php',
            data: {
                equipname: equipname.value,
                equipnum: equipnum.value,
                value: value.value,
                in_time: in_time.value,
                equipstatus: '正常',
            }
        }).then(res => {

            // res = JSON.parse(res);
            // console.log(res);
            if (res == 1) {
                alert('成功入库！');
                getData(1, 10);
                equipname.value = equipnum.value = value.value = in_time.value = '';
            }
        });
    }

})

// 左侧导航栏绑定对应的内容块display or none 
let oplist = $('li');
let index = $('.index');
let status = $('.status');
let instorage = $('.instorage');
let repaire = $('.repaire');
let scrapF = $('.scrapF');
// console.log(oplist[0]);
$('.main').on('click', function() {
    getData(1, 10);
    $('.main').addClass('active').siblings().removeClass('active');
    // console.log(res1);
    let res = index.css({
            display: 'block',
        }).siblings().css({
            display: 'none'
        })
        // console.log(res);
})
$('.eqstatus').on('click', function() {
    getData(1, 10);
    $('.eqstatus').addClass('active').siblings().removeClass('active');
    let res = status.css({
            display: 'block',
        }).siblings().css({
            display: 'none'
        })
        // console.log(res);
})
$('.instore').on('click', function() {
    getData(1, 10);
    $('.instore').addClass('active').siblings().removeClass('active');
    let res = instorage.css({
            display: 'block',
        }).siblings().css({
            display: 'none'
        })
        // console.log(res);
})
$('.trepair').on('click', function() {
    getData(1, 10);
    $('.trepair').addClass('active').siblings().removeClass('active');
    let res = repaire.css({
            display: 'block',
        }).siblings().css({
            display: 'none'
        })
        // console.log(res);
})
$('.scrap').on('click', function() {
    getData(1, 10);
    $('.scrap').addClass('active').siblings().removeClass('active');
    let res = scrapF.css({
            display: 'block',
        }).siblings().css({
            display: 'none'
        })
        // console.log(res);
})


// 报修模块表单
let repairename = document.querySelector('.repairename');
let repairenum = document.querySelector('.repairenum');

let repaire_time = document.querySelector('.repaire_time');
// let sure = document.querySelector('.sure');
let sureR = $('.sureRepaire');
// console.log(sure);
// console.log(sureR);
// console.log(equipname1);
// console.log(equipnum1);




let timeReg1 = /^\d{4}(\-)(0[1-9]|1[0-2])\1(0[1-9]|[12][0-9]|3[0-1])$/;

// 报修传输数据到后台申请操作数据库
sureR.on('click', function() {
    let e = window.event;
    e.preventDefault();
    if (!repairename.value) {
        alert('请输入资产名称！')
    } else if (!repairenum.value) {
        alert('请输入资产编号！')
    } else if (timeReg1.test(repaire_time.value) == false || !repaire_time.value) {
        alert('请输入正确的入库时间格式！')
    } else {

        pAjax({
            type: 'post',
            url: '../api/updateEquip.php',
            data: {
                repairename: repairename.value,
                repairenum: repairenum.value,
                repaire_time: repaire_time.value,
                equipstatus: "待维修",
            }
        }).then(res => {

            res = JSON.parse(res);
            console.log(res);
            if (res.code == true) {
                alert('成功提交报修！');
                getData(1, 10);
                repairename.value = repairenum.value = repaire_time.value = '';
            }
        });
    }

})

// 报废模块表单
let scrapname = document.querySelector('.scrapname');
let scrapnum = document.querySelector('.scrapnum');

let scrap_time = document.querySelector('.scrap_time');
// let sure = document.querySelector('.sure');
let sureScrap = $('.sureScrap');
// console.log(sure);
// console.log(sureR);
// console.log(equipname1);
// console.log(equipnum1);




let timeReg2 = /^\d{4}(\-)(0[1-9]|1[0-2])\1(0[1-9]|[12][0-9]|3[0-1])$/;

// 报废传输数据到后台申请操作数据库
sureScrap.on('click', function() {
    let e = window.event;
    e.preventDefault();
    if (!scrapname.value) {
        alert('请输入资产名称！')
    } else if (!scrapnum.value) {
        alert('请输入资产编号！')
    } else if (timeReg2.test(scrap_time.value) == false || !scrap_time.value) {
        alert('请输入正确的时间格式！')
    } else {

        pAjax({
            type: 'post',
            url: '../api/scrapequip.php',
            data: {
                scrapname: scrapname.value,
                scrapnum: scrapnum.value,
                equipstatus: "已报废",
            }
        }).then(res => {

            res = JSON.parse(res);
            // console.log(res);
            if (res.code == true) {

                alert('成功报废！');
                getData(1, 10);
                scrapname.value = scrapnum.value = scrap_time.value = '';
            }
        });
    }

})