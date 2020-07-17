
 console.log('\n');
function feetToMile(feet){
    
    var mile=feet*0.00018939; // function for converting feet to mile
   
    return mile;
}



// base code for feet to mile convertion
var feet = 5280;
 if(feet<0){
     console.log('Distance can not be negative')
 }
 else{
    var convertedmile = feetToMile(feet);
  
    console.log("Your converted distance is:", convertedmile, "mile");
   
 }


 console.log('\n');

 // code for wood calculation

 // function for wood caclculation
 function woodCalculator(chair,table,bed){
var woodforchair = chair*1;
var woodforbed = bed*5;
var woodfortable = table*3;
var totalwood = woodforchair+woodforbed+woodfortable;
console.log("The number of wood needed are given below:")

console.log(woodforchair , "cubic feet wood was needed for chair");

console.log(woodforbed , "cubic feet wood was needed for bed");

console.log(woodfortable , "cubic feet wood was needed for table");

console.log("The total number of needed wood  is", totalwood);
return 0;
 }

 var chair = 10;
 var table = 0;
 var bed = 12;
 if(chair<0 || bed < 0 || table < 0 ){
     console.log(" Number of chair , table or bed can not be negative enter na valid number");
 }
 else  {
     woodCalculator(chair,table,bed);
 }
 console.log('\n');



 //code for brickcalculator  problem


 function brickCalculator(numberoffloors){
     if(numberoffloors<=10)
     {
         var numberofbricks = numberoffloors * 15 *1000;
     }
     else if(numberoffloors>10&&numberoffloors<=20)
     {
         var numberofbricks = (10*15*1000) + (numberoffloors-10)*12*1000;
     }
     else{
         var numberofbricks = (10*15*1000) + (10*12*1000) + (numberoffloors-20)*10*1000;
     }
   console.log("The number of bricks needed is:" , numberofbricks);
 }


 var numberoffloors = 100;
 if(numberoffloors<=0){
 console.log("You can not build a building with out floors");
 }
 else{
     brickCalculator(numberoffloors);
 }

 console.log('\n');



 //tiny friend problem

function tinyFriend(friendname){
    var shortestfriend=Infinity;
    
    for(var i = 0 ; i<friendname.length;i++){
        if (typeof friendname[i] === 'string' && friendname[i].length < shortestfriend) {
            shortestfriend = friendname[i].length;// finding the shortest length name 
        }
    }

console.log("The Shortest length of available names is :", shortestfriend);
console.log("The shortest names are:")
    
    
for(var i = 0 ; i<friendname.length;i++)
{
    if(shortestfriend===friendname[i].length){
       console.log(friendname[i]);   // there can be multiple names with same length
    }
}
}


var friendname = ['Rafik', 'KArim' , 'Soufik' , 'janina'];

tinyFriend(friendname);


// end of the assignment