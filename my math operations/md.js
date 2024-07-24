function addNumber(){
                var num1 = parseInt(document.getElementById("text1").value);
                var num2 = parseInt(document.getElementById("text2").value);

                var sum = num1+num2;
          
                document.getElementById("res").value = sum;  
                             
                }



function subNumber(){
                var num1 = parseInt(document.getElementById("text1").value);
                var num2 = parseInt(document.getElementById("text2").value);


    var sub = num1-num2;

    document.getElementById("res").value = sub;  
}




function mulNumber(){
    var num1 = parseInt(document.getElementById("text1").value);
    var num2 = parseInt(document.getElementById("text2").value);

    var mul = num1*num2;

    document.getElementById("res").value = mul;  
}




function divNumber(){
    var num1 = parseInt(document.getElementById("text1").value);
    var num2 = parseInt(document.getElementById("text2").value);

    var div = num1/num2;
   
document.getElementById("res").value = div; 
}