
/* javaScript uses roll */

/* console.log(" Hello typeScript Baby");
const age = 21 ;
const myName = 'farhad'
const isStudent = true ;
console.log(age,myName); */


/* typeScript  type cencetive codin rull of typeScript  */

const age:number = 21;
const myName:string = 'farhad ahmed';
const isStudent:boolean = true ;

console.log(` My name is ${myName} .I am ${age} years old`, `. He is a Sutdent ${isStudent}`);


function sum(num1:number , num2:number):number {
       const mul  = num1 * num2 ;
       return mul ;
}

const result = sum(3,11);
console.log(result); 


// No retuen in a funtion .we used void 

function multiplay(num:number):void {
    console.log(num*num);    
}

// multi purpose uses 

/* function sum(num1:number | string , num2:number|string ):number|string {
       const value:number|string  = num1 + num2 ;
       return value ;
}
const result = sum(3,11);
console.log(result);
 */
