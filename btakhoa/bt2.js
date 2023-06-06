// Bài 2: Tính tổng các giá trị trên 1 dòng trong ma trận các số nguyên
function total(num) {
    let total1 = [];
    for (let i = 0; i < num.length; i++) {
        total1[i] = 0;
        for (let j = 0; j < num[i].length; j++) {
            total1[i] += num[i][j];
        }
    } return total1;
}
console.log(total([[4, 6, 7], [8, 9, 9], [4, 6, 4, 3], [4, 5, 7], [8, 9, 4, 3, 5, 5, 7]]));
