//Kilometer to Meter Converter

function kilometerToMeter(kilometer){
    if(kilometer > 0){
        return kilometer*1000;
    }
    else if(kilometer == 0){
        console.log("The Value is Null");
    }
    else{
        console.log("Please Enter Positive Value");
    }
};

var kilometerToMeterTest =kilometerToMeter(25);
console.log(kilometerToMeterTest);

//Budget Calculator

function budgetCalculator(watch,mobile,laptop){
    if((watch>=0) && (mobile>=0) && (laptop>=0)){    
        return (watch*50)+(mobile*100)+(laptop*500);
    }
    else{
        console.log("Please Enter Positive Value");
    }
};

var budgetCalculatorTest = budgetCalculator(0,5,0);
console.log(budgetCalculatorTest);

//Hotel Cost

function hotelCost(days){
        var totalcost=0;
    if(days<=10){
        var totalcost=days*100;
    }
    else if(days<=20){
        var firstTenDays=10*100;
        var remainingDays=days-10;
        var secondTenDays=remainingDays*80;
        totalcost=firstTenDays+secondTenDays;
    }
    else{
        var firstTenDays=10*100;
        var secondTenDays=10*80;
        var remainingDays=days-20;
        var lastDays=remainingDays*50;
        var totalcost=firstTenDays+secondTenDays+lastDays;
    }
    return totalcost;
};
var hotelCostTest=hotelCost(15);
console.log(hotelCostTest);

//Mega Friend

function megaFriend(friendArray){
        var megaName=friendList[0];
    for(var i =0;i<friendList.length;i++){
        var  friendName = friendList[i].length;
    if(friendName > megaName.length){
        megaName=friendList[i];}}
        return megaName;
};

var friendList = ["jamalhasan","salam","sanaullah","tunumunuchunu","roton"];
var megaFriendTest = megaFriend(friendList);
console.log(megaFriendTest);