function leap (years){
    if((years % 4 ==0 && years % 400 !=0 ||years %100 ==0)){
        return "This year is a leap year";
    }
    else{
        return "This year is not leap year";
    }
}
console.log(leap(2022));