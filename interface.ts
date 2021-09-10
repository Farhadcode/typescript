// type and interface main  difference

/*  type Name = {

 }
// But maximum time Interface use korbo

 interface Name1 {

 } */

 interface Player {
     name : string ,
     club: string ,
     salary: number ,
     wife?: string ,
     previouseClubs ?: string [] 
 }
// funtion diclere 

 const messy:Player ={
     name:'L Messy ',
     club:'PAG',
     salary: 2436233845 ,
     wife:'Antonilla Rujia',
     previouseClubs:['barcelona','PSG']
 }

 const  Manna : Player = {
    name:'L Messy ',
    club:'PAG',
    salary: 504033 ,
   
 }

 interface Employee{
     name: string,
     designation: string ,
     salary: number
     age: number
 }

 interface Developer extends Employee{
     language: string,
     codeEditor: string,
     typingSpeed: number

 }

 const farhan : Developer ={
      language:'js',
      codeEditor:'VS Code',
      typingSpeed:20,
      name:"farhand Ahmed",
      age:32,
      salary:50000,
      designation:'React Native'
 }