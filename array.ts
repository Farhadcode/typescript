const salary:number = 25000 ;
const friendSalaries:number[] = [74794,88656,87485,576834, 663344] 
const friendName:string[] =['baki', 'farhad','shole','sakib'];

friendSalaries[1] = 200010;
friendSalaries.push(745876);

friendName [1] = 'sifat';
friendName.push('mukta');



let max = 0;
for(const salary of friendSalaries){
    if(salary > max ){
        max = salary ;
    }
}