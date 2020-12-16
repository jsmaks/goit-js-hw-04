
const countTotalSalary = function (employees) {
    let total = 0;
    for (const key in employees) {
        total += employees[key];
    }
    return total;
};
// const values = Object.values(employees);
//---------Для себя оставил---//
// for (let value of values) {
//     total += value;
// }
//---------END CODE----------//

console.log(countTotalSalary({})); // 0

console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    }),
); // 330

console.log(
    countTotalSalary({
        kiwi: 200,
        lux: 50,
        chelsy: 150,
    }),
); // 400