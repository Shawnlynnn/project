<?php
    $repairename = $_POST['repairename'];
    $repairenum = $_POST['repairenum'];
    $repaire_time = $_POST['repaire_time'];
    $equipstatus = $_POST['equipstatus'];

    $con = mysqli_connect('localhost','root','4233132','equipment');

    $sql = "UPDATE `equipment` SET `equipstatus`='$equipstatus', `up_time`='$repaire_time' WHERE `equipname`='$repairename' AND `equipnum`='$repairenum' ";
    $res = mysqli_query($con,$sql);

    if(!$res){
        die('数据库链接失败' .mysqli_error($con));
    }

    print_r(json_encode(array('code'=>$res,'msg'=>'修改成功'),JSON_UNESCAPED_UNICODE));

?>