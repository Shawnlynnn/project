<?php


$con = mysqli_connect('localhost','root','4233132','administrator');

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM `adminlist` WHERE `username`='$username' AND `password`='$password'";

$res = mysqli_query($con,$sql);

if(!$res)
{
    die('error for mysql: ' . mysqli_error());

}

$row = mysqli_fetch_assoc($res);
if(!$row){
    // 没有匹配的数据  登录失败
    echo json_encode(array(
        "code"=>0,
        "message" =>"登录失败"
    ));
} else{
    echo json_encode(array(
        "code"=>1,
        "massage"=>"登录成功"
    ));
}

?>