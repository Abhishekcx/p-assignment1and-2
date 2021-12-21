function DiscountBill(amount:number){
    var dis:number;
    if (amount>=30000){
      dis=(amount*25)/100;
    }
    else if (amount<30000 && amount>=20000){
      dis=(amount*15)/100;
    }
    else if (amount<20000 && amount>=10000){
      dis=(amount*10)/100;
    }
    else if (amount<10000){
      dis=(amount*5)/100;
    }
    console.log(amount+" "+dis+" "+ (amount-dis));
  
  }
  
  
  
  DiscountBill(30000);