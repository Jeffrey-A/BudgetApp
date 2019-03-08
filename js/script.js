var $text = $("input[type=text]");
var $amount = $("input[type=number]");;
var $addButton = $("#addButton");
var $ulIncome = $("#income-sources");
var $ulExpenses = $("#expenses-sources");



function createIncomeElement(text,amount ){
    $ulIncome.append("<li>"+$text.val()+"<span>+"+$amount.val()+"</span>"+"</li>");
}

function createExpensesElement(text,amount ){
    $ulExpenses.append("<li>"+$text.val()+"<span>-"+$amount.val()+"</span>"+"</li>");
}




$addButton.on('click',function(){
    createExpensesElement($text,$amount);
});
