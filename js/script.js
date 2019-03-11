var $text = $("input[type=text]");
var $amount = $("input[type=number]");;
var $addButton = $("#addButton");
var $ulIncome = $("#income-sources");
var $ulExpenses = $("#expenses-sources");
var $options = $("#select-menu option")
var $totalIncome = $("#totalIncome");
var $totalExpenses = $("#totalExpenses");
var $li = $('li');

var $finalIncome = $("#finalIncome");



// var $delete = $(".deleteBt")[0];

// for(var i =0; i<$li.length; i+=1){
//     $($li[i]).hover(function(){
//         $delete = $(".deleteBt")[i];
//         $($delete).toggleClass("deleteBtActive");
        
        
//     });
// }

function getTotal($array){
    var total =0;
    $array.each(function(){
        total += parseInt($(this).text());
    });

    return total;
}

var totalIncomeSum;
var totalExpensesSum;
var totalIncomeValue;
var totalExpensesValue
var $incomeValues;
var $expensesValues;

function setUp(){
    $incomeValues = $("#income-sources span");
    $expensesValues = $("#expenses-sources span");
    totalIncomeSum = getTotal($incomeValues);
    totalExpensesSum = getTotal($expensesValues);
    $totalIncome.text(totalIncomeSum);
    $totalExpenses.text(totalExpensesSum);
    totalIncomeValue = parseInt($totalIncome.text());
    totalExpensesValue = parseInt($totalExpenses.text());
    $finalIncome.text(""+(totalIncomeValue - totalExpensesValue));
}

setUp();

function clearInput(){
    $text.val("");
    $amount.val("");
}

function createIncomeElement($text,$amount ){
    $ulIncome.append("<li>"+$text.val()+"+<span>"+$amount.val()+"</span>"+"</li>");
    clearInput();
}

function createExpensesElement($text,$amount ){
    $ulExpenses.append("<li>"+$text.val()+"-<span>"+$amount.val()+"</span>"+"</li>");
    clearInput();
}

function main(){
    for(var i=0; i<$options.length; i+=1){
        if ($options[i].selected && $($options[i]).val() === "plus"){
            createIncomeElement($text,$amount);
            break;
        }else{
            createExpensesElement($text,$amount);
            break;
        }
    }
    setUp();
    
    
}


$addButton.on('click',function(){
    main();  
});

$amount.on('keypress', function(e){
    var key = e.keyCode;
    if (key == 13){
        main();
    }
});

