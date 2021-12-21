class stu
{rollno:number=1;name:string="kbkhn";percentage:number;marks:number=152;
grade:any;

result():void
    {
var percetage= this.marks/6;
let res= percetage;
console.log(res);
if( res<50)
{
    return this.grade("A");


}
else if (res>50)
{
    return this.grade("b");
}
   console.log(this.grade);

}



    display():void{
        console.log(this.rollno +" "+this.name+" "+this.percentage+" " +this.marks+""+this.grade);
    }
}
let s=new  stu();
s.display();