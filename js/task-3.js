
const findBestEmployee = function (employees) {

    const values = Object.values(employees);
    const maxQuantityTasks = Math.max(...values);

    for (const key in employees) {
        if (employees[key] === maxQuantityTasks) {
            return (`${key}: ${employees[key]}`);
        }
    }
    //--------ОСТАВИЛ ДЛЯ СЕБЯ КОД-------//
    // const entries = Object.entries(employees);
    // for (const entry of entries) {

    //     const key = entry[0];
    //     const value = entry[1];

    //     if (value === maxQuantityTasks) {
    //         return (`${key}: ${value}`);
    //     }
    // };
    //--------END КОД--------------------//

}
console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux