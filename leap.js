function leap (years){
    if((years % 4 ==0 && years % 400 !=0 ||years %100 ==0)){
        return "leap years";
    }
    else{
        return "no leap years";
    }
}
console.log(leap(2022));