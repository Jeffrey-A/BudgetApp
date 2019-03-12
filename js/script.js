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






var deleteB;
$li.each(function(){
    $(this).on('mouseover',function(){
        var currentLI = $(this);
        deleteB = $(currentLI.children()[1]);
        deleteB.show();

        deleteB.on("click", function(){
            currentLI.remove();
            setUp();
        });

    });
});

$li.each(function(){
    $(this).on('mouseout',function(){
        deleteB = $($(this).children()[1]);
        deleteB.hide();

    });
});




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
    $totalIncome.text("+"+totalIncomeSum);
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
    var newLi = $("<li>"+$text.val()+"<span>+"+$amount.val()+"</span>"+"</li>");
    var $deleteButtonImg = $('<img></img>').attr('src','img/delete.png');
    $deleteButtonImg.addClass('deleteBt');

    newLi.append($deleteButtonImg);
    newLi.on("mouseover", function(){
        $deleteButtonImg.show();

        $deleteButtonImg.on("click", function(){
            newLi.remove();
            setUp();
        });
    });

    newLi.on('mouseout',function(){
        deleteBu = $($(this).children()[1]);
        deleteBu.hide();

    });

    $ulIncome.append(newLi);
    clearInput();
}

function createExpensesElement($text,$amount ){
    var newLi = $("<li>"+$text.val()+"<span>-"+$amount.val()+"</span>"+"</li>");
    var $deleteButtonImg = $('<img></img>').attr('src','img/delete.png');
    $deleteButtonImg.addClass('deleteBt');

    newLi.append($deleteButtonImg);
    newLi.on("mouseover", function(){
        $deleteButtonImg.show();

        $deleteButtonImg.on("click", function(){
            newLi.remove();
            setUp();
        });
    });

    newLi.on('mouseout',function(){
        deleteBu = $($(this).children()[1]);
        deleteBu.hide();

    });

    $ulExpenses.append(newLi);
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

