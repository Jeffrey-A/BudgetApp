var $text = $("input[type=text]");
var $amount = $("input[type=number]");;
var $addButton = $("#addButton");
var $ulIncome = $("#income-sources");
var $ulExpenses = $("#expenses-sources");
var $options = $("#select-menu option")


function clearInput(){
    $text.val("");
    $amount.val("");
}

function createIncomeElement($text,$amount ){
    $ulIncome.append("<li>"+$text.val()+"<span>+"+$amount.val()+"</span>"+"</li>");
    clearInput();
}

function createExpensesElement($text,$amount ){
    $ulExpenses.append("<li>"+$text.val()+"<span>-"+$amount.val()+"</span>"+"</li>");
    clearInput();
}




$addButton.on('click',function(){
    // createExpensesElement($text,$amount);
    for(var i=0; i<$options.length; i+=1){
        if ($options[i].selected && $($options[i]).val() === "plus"){
            createIncomeElement($text,$amount);
            break;
        }else{
            createExpensesElement($text,$amount);
            break;
        }
       
    }
});
