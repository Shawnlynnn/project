// 报修模块表单
let repairename = document.querySelector('.repairname');
let repairenum = document.querySelector('.repairnum');

let repaire_time = document.querySelector('.repair_time');
// let sure = document.querySelector('.sure');
let sureR = $('.sureRepair');
// console.log(sure);
// console.log(sureR);
// console.log(equipname1);
// console.log(equipnum1);




let timeReg1 = /^\d{4}(\-)(0[1-9]|1[0-2])\1(0[1-9]|[12][0-9]|3[0-1])$/;

// 采购入库传输数据到后台申请操作数据库
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
                repairename.value = repairenum.value = repaire_time.value = '';
            } else {
                alert('你填的内容有误,提交失败')
            }
        });
    }

})