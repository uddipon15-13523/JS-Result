// function discount(totalprice){
//     if(totalprice >5000){
//         console.log("You are 20% discount");
//     }
//     else if(totalprice>=3000){
//         console.log("your are 15% discoutn");
//     }
//     else if(totalprice>= 1000){
//         console.log("your are 10% disocut");
//     }
//     else{
//         console.log("your are no discount ")
//     }
// }
// discount(3000);
function discount(totalprice){
    if(totalprice>5000){
        const discountprice =totalprice *(20/100);
        const netprice = totalprice-discountprice;
        console.log(netprice);
    }
    else if(totalprice>=3000){
        const discountprice =totalprice *(15/100);
        const netprice =totalprice-discountprice;
        console.log(netprice);
    }
    else if(totalprice>=100){
        const discountprice = totalprice* (10/100);
        const netprice = totalprice-discountprice;
        console.log(netprice);
    }
    else{
        console.log("your are no discount")
    }
}
discount(1000);