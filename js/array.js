"use strict";
const salary = 25000;
const friendSalaries = [74794, 88656, 87485, 576834, 663344];
const friendName = ['baki', 'farhad', 'shole', 'sakib'];
friendSalaries[1] = 200010;
friendSalaries.push(745876);
friendName[1] = 'sifat';
friendName.push('mukta');
let max = 0;
for (const salary of friendSalaries) {
    if (salary > max) {
        max = salary;
    }
}
