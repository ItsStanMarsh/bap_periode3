<?php
$weight = $_REQUEST["weight"];
$length = $_REQUEST["lengthcm"];
BMIcalc($weight, $length);


function BMIcalc($weight, $length){
$length = $length/100;

$bmi = $weight / ($length*$length);

$bmi = round($bmi, 1);
echo "Your legnth in meters is: $length<br>";
echo "Your weight in kilograms is: $weight<br>";
echo "Your BMI is: $bmi";
}
 ?>
