<?php
function dice($throw, $i)
{
    $image = imagecreate(200, 200) or die ("Cannot Initialize new GD image stream");
    $background_color = imagecolorallocate($image, 0, 0, 0);
    $color = imagecolorallocate($image, 255, 255, 255);

    if($throw == 1 OR $throw == 3 OR $throw == 5){
        imagefilledellipse($image, 100,100,40,40, $color); // center
    }

    if($throw == 2 OR $throw == 3){
        imagefilledellipse($image, 50, 50, 40, 40, $color); // left up
        imagefilledellipse($image, 150, 150, 40, 40, $color); // right down
    }

    if($throw ==4 OR $throw == 5 OR $throw == 6){
        imagefilledellipse($image, 50, 50, 40, 40, $color); // left up
        imagefilledellipse($image, 150, 50, 40, 40, $color); // right up
        imagefilledellipse($image, 50, 150, 40, 40, $color); // left down
        imagefilledellipse($image, 150, 150, 40, 40, $color); // right down
    }

    if($throw == 6){
        imagefilledellipse($image, 50, 100, 40, 40, $color); // left middle
        imagefilledellipse($image, 150, 100, 40, 40, $color); // right middle

    }

    $filename = strval($i) . ".png";

    imagepng($image, $filename);
    imagedestroy($image);

}
for($i = 0; $i < 5; $i++) {
    $throw = rand(1, 6);
    dice($throw, $i);
    print "<img src=" . $i .".png?" . date("U") . ">&nbsp;";
}
?>
<form action = "<?php echo $_SERVER['PHP_SELF']; ?>" METHOD = "POST">
    <input type = "submit" name="submit" value="new throw">
</form>
