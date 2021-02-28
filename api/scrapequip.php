<?php
    $scrapname = $_POST['scrapname'];
    $scrapnum = $_POST['scrapnum'];
  


    $con = mysqli_connect('localhost','root','4233132','equipment');

    $sql = "DELETE FROM `equipment` WHERE `equipname`='$scrapname' AND `equipnum`='$scrapnum'";
    
  
    $res = mysqli_query($con,$sql);

    if(!$res){
        die('数据库链接失败' .mysqli_error($con));
    }

    print_r(json_encode(array('code'=>$res,'msg'=>'修改成功'),JSON_UNESCAPED_UNICODE));

?>