
function taskkk(){

    let today = new Date();
    let day = today.getDay();
    let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    
    let a = []; //store[0,1,2]
    let n =3; //noOfLeave  lengthof arr

    let cDate = a[0] = 05/30/2022;//let startdate = 05/30/2022 ;
    const date = new Date('2022-04-21');

const dateCopy = new Date(date.getTime());

dateCopy.setDate(dateCopy.getDate() + 7);

// 👇️ Thu Apr 28 2022
console.log(dateCopy);

// 👇️ Thu Apr 21 2022 (didn't change original)
console.log(date);

for(i=0;i<=n-1;i++){

    
    if(a[i] = !daylist.Sunday && !daylist.Saturday)    //see if element occurs again in the array
    {    
        // today = mm+ '-'+ dd + '-'+ yyyy;
        console.log("current date is :" + today)
        a.push(today.getDay(cDate) + ','+ day[i] + ','); 
   
        cDate++;
    };
    // return a;
    console.log("leave date is "+ a )
}

console.log("yess");
}
taskkk();
