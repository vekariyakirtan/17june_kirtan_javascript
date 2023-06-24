function sbtot()
{
    var p=document.getElementById("price").value;
    var q=document.getElementById("qty").value;
    var total=p*q;

    var dis = total*5/100;

    var finalPrice = total - dis;
    
    document.getElementById("total_price").innerHTML=+finalPrice;
    document.getElementById("card_d").innerHTML=+dis;
}
