<?php
    $equipname = $_POST['equipname'];
    $equipnum = $_POST['equipnum'];
    $value = $_POST['value'];
    $in_time = $_POST['in_time'];
    $equipstatus = $_POST['equipstatus'];


    $con = mysqli_connect('localhost','root','4233132','equipment');
    $rgstSql = "INSERT INTO `equipment` VALUES (null, '$equipnum','$equipname','$value','正常','$in_time','$in_time')";

    $res = mysqli_query($con,$rgstSql);
    print_r($res);
    if(!$res){
        die('数据库链接错误啊' . mysqli_error($con));
    }
    ?>