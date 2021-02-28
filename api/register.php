<?php
    $username = $_POST['username'];
    $password = $_POST['password'];
    $Tel = $_POST['Tel'];
    $email = $_POST['email'];


    $con = mysqli_connect('localhost','root','4233132','administrator');
    $rgstSql = "INSERT INTO `adminlist` VALUES (null, '$username','$password','$Tel','$email')";

    $res = mysqli_query($con,$rgstSql);
    print_r($res);
    if(!$res){
        die('数据库链接错误啊' . mysqli_error($con));
    }
    // $row = mysqli_fetch_assoc($res);
    // print_r($row);

    // if(!$row){
    //     $rgstSql = "INSERT INTO `adminlist` VALUES (null, '$username','$password','$Tel','$email')";

    //     $rgstRes = mysqli_query($con,$rgstSql);

        
    //     if(!$rgstRes){
    //         die('数据库链接错误' . mysqli_error($con));
    //     }
    //     print_r('运行到里面了吗');
    //     print_r(json_encode(array('code'=>1,"msg"=>"添加成功"),JSON_UNESCAPED_UNICODE));
    // }else{
    //     print_r('这里要写什么');
    // }
?>