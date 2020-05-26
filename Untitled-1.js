 function tipCal(bill){
    var tip; 
    switch(tip) {
         case bill < 50:
            return bill * .2;
         case bill >= 50 && bill < 200:
                return bill * 1;
         default:
                return bill * 2;
    }
    }
    var bill = (48, 268);
console.log(bill);
