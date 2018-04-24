function ajax(weight, length){
    var debug = true;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else {
      xmlhttp = new ActiveXObject("microsoft.XMLHTTP");
    }

    var controlScript = "BMI.php";
    var httpString = controlScript + "?weight= " + weight + "&lengthcm= " + length;
    var httpResponse = "";
    if(debug) console.log(httpString);
    xmlhttp.open("GET", httpString, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
        if(debug) console.log("http response = " + xmlhttp.responseText);
        httpResponse = xmlhttp.responseText;
        document.getElementById('result').innerHTML = httpResponse;
      }

    }
}
