

//Convert kilometer to meter. give input as a kilometer and ouput will convert kilometer to meter.
function kilometerToMeter(distance){
    if(distance<0)
    {
        console.log("Input is not valid. Please enter valid input.");
        return -1;
    }
    else
    {
        var meter = distance*1000;
        return meter;
    }
}

// var convertkilometerToMeter = kilometerToMeter(5);
// console.log(convertkilometerToMeter);



// Budget Calculator. It's find out total budget of watch, phone, laptop. Just set how many piece you want.

function budgetCalculator(watch,phone,laptop)
{
    
    if(watch<0 || phone<0 || laptop<0)
    {
        console.log("Input is not valid. Please enter valid input. ");
        return -1;
    }
    else
    {
        var watchprice = watch*50;
        var phoneprice = phone*100;
        var laptopprice = laptop*500;

        var totalbudget = watchprice+ phoneprice+ laptopprice;

        return totalbudget;
    }
}


// var ouputofbudgetCalculator = budgetCalculator(9,10,6);
// console.log(ouputofbudgetCalculator);


//Calculation about Hotel cost.Suppose, You stay in a hotel and this function help to find out total cost depends on the how many days stay here.

function hotelCost(days){
    var totalcost=0;

    if(days<0)
    {
        console.log("Input is not valid. Please enter valid input.");
        return -1;
    }

    else if(days<=10)
    {
        totalcost = days*100;
        return totalcost;        
    }

    else if(days<=20)
    {
        var firsttendays = 10*100;
        var remaindays =(days-10);
        var secondtendays = remaindays * 80;

        totalcost = firsttendays+secondtendays;
        return totalcost;
    }

    else
    {
        var firsttendays = 10*100;
        var secondtendays = 10*80;
        var remaindays = (days-20);

        var abovesecondtendays = remaindays * 50;

        totalcost = firsttendays +secondtendays +abovesecondtendays;
        return totalcost;
    }
    
}

//  var findtotalhotelcost = hotelCost(16);
//  console.log(findtotalhotelcost);




// Findout the largest string (name) from Array.

function megaFriend(friendname){
    var largest = friendname[0]
    var check=0;

    for (var i = 0; i < friendname.length; i++) {
        var name = typeof (friendname[i]);
        var comparename = typeof ("Dalwer");
        var emptyname = '';
        var nothing = ' ';
        if (friendname.length < 1 ||  name != comparename || friendname[i] == emptyname || friendname[i] == nothing)
        {
            check = "Input is not valid. Please enter valid input.";
        }
    }
    if(check != 0){
        console.log("Input is not valid. Please enter valid input.");
        return -1;
    }

    else{

        for(var i=0;i<friendname.length;i++)
        {
            var checklist= friendname[i];
            if(checklist.length>largest.length)
            {
                largest =checklist;
            }
    
        }
        return largest;
    }
  
}

// var friendnamearray =["risu","jahid","arob","Zayed","Shahid", "Dalwer"];
// var output = megaFriend(friendnamearray);
// console.log(output);