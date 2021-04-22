function compute()
{

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var contribution = document.getElementById("contribution").value;
    var years = document.getElementById("years").value;
    var money = parseInt(principal);
    var add = parseInt(contribution);
    var year = new Date().getFullYear()+parseInt(years);
    var i = 0;
    while(i<years){
        money=money+add+(money*(rate/100));
        i++;
    }
    money = money.toFixed(0);
    if (principal<0 || rate<0 || years<=0){ 
    alert("Please enter valid amounts in each section");
    }
    else {
    document.getElementById("result").innerHTML="If you deposit $"+principal+" this year\<br\>and contribute $"+contribution+" every year\<br/> at an interest rate of "+rate+"%\<br\>you will have a total of $"+money+"\<br\>in the year "+year+".\<br\>";
    }
    
}