/// normal funtion 

function add (num1:number ,num2:number):number {
    return num1 + num2;
    
}

/// arrow funtion

const add2 = (num1:number , num2:number):number =>num2+ num1 ;

// return in  a funtion

const odMath = (x:number , y:number):number=>{

    const sum = x + y ;
    const mul = sum* x ;
     return mul ;
}

// No return in a  funtion

const doMath2 = (x:number , y:number):void=>{

    const sum = x + y ;
    const mul = sum* x ;
    
}