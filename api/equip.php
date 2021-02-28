<?php

    $index = $_GET['index'];
    $length = $_GET['length'];

    $con = mysqli_connect('localhost','root','4233132','equipment');

    $array = array();

    $totalSql = "SELECT * FROM `equipment`";
    $totalRes = mysqli_query($con,$totalSql);

    $arrTotal = array();
    $rowTotal = mysqli_fetch_assoc($totalRes);
    while($rowTotal){
        array_push($arrTotal,$rowTotal);
        $rowTotal = mysqli_fetch_assoc($totalRes);
    }

    $array['total'] = count($arrTotal);//获取总数并添加给array属性total
    $start = ($index-1)*$length;// LIMIT索引值，数据的长度

    $sql = "SELECT * FROM `equipment` LIMIT $start,$length";
    $res = mysqli_query($con,$sql);
    $arr = array();
    $row = mysqli_fetch_assoc($res);
    while($row){
        array_push($arr,$row);
        $row = mysqli_fetch_assoc($res);
    }

    $array['list']=$arr;
    $array['listLength'] = count($arr);
    print_r(json_encode($array,JSON_UNESCAPED_UNICODE));





?>