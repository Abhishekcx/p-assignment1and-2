function bill(a:number)
{
    if(a<10000)
    {
        a=a+a*(.005);

    } 
   else if(a>10000||a<2000)
    {
        a=a+a*(.01);

    } 
  else  if(a>20000||a<30000)
    {
        a=a+a*(.015);

    } 
  else  if (a>30000)
    {
        a=a+a*(.025)
    }
    console.log(a);
}
bill(2500);