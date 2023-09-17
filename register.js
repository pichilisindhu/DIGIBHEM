function calroomrate()
{
    var days=parseInt(document.getElementById("nod").value);
    var roomrate=parseInt(document.getElementById("room").value);
    document.getElementById("totalroom").value=roomrate*days;
}
function amenitiesrate()
{
   var a=parseInt(document.getElementById("amen").value);
   var b=parseInt(document.getElementById("nod").value);
   document.getElementById("am").value=a*b;
}
function additionalcharges()
{
    var x=0
    if(parseInt(document.getElementById("nod").value)>2)
    {
        var days=parseInt(document.getElementById("nod").value);
        var persons=parseInt(document.getElementById("nop").value);
         x= (days-2)*1000*persons;
    }
    else
    {
        x=0;
    }
    document.getElementById("addicost").value=x;
}
function totalcost()
{
    var totalroomcost=parseInt(document.getElementById("totalroom").value);
    var totalamenitiescost=parseInt(document.getElementById("am").value);
    var totaladdcharges=parseInt(document.getElementById("addicost").value);
    document.getElementById("totalcost").value=totalroomcost+totalamenitiescost+totaladdcharges;
}
function balance()
{
    var total=parseInt(document.getElementById("totalcost").value);
    var advance=parseInt(document.getElementById("advance").value);
    document.getElementById("balance").value=total-advance;
}
function advance()
{
    calroomrate();
    amenitiesrate();
    additionalcharges();
    totalcost();
    balance();


}
