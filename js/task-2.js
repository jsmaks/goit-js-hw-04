

const countProps = function (obj) {
    const count = Object.keys(obj).length;
    return count;

    //-------Для Себя Оставлю----//
    // let count = 0;
    // const entries = Object.entries(obj);
    // for (const entry of entries) {
    //     count++;
    // }
    //--------END CODE-----//
}


console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

