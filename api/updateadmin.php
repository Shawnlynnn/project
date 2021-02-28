<?php
    $username = $_POST['username'];
    $prepsw = $_POST['prepsw'];
    $aftpsw = $_POST['aftpsw'];

    $con = mysqli_connect('localhost','root','4233132','administrator');

    $sql = "UPDATE `adminlist` SET `password`='$aftpsw' WHERE `username`='$username' AND `password`='$perpsw' ";
    $res = mysqli_query($con,$sql);
   
    if(!$res){
        die('数据库链接失败' .mysqli_error($con));
    };

    print_r(json_encode(array('code'=>$res,'msg'=>'修改成功'),JSON_UNESCAPED_UNICODE));

?>