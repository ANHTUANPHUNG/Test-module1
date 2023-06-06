// Bài 3: Đếm tần suất xuất hiện của 1 giá trị x trong ma trận các số nguyên
let matrix = [[1, 5, 9], [4, 7, 9], [8, 5, 3], [6, 5, 3], [9, 3, 6], [6, 3, 7]];
let number = 2;
function frequency(matrix, number) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (number == matrix[i][j]) {
                count += 1
            }
        }
    }
    if (count != 0) {
        console.log(count);
    } else {
        console.log('không trùng');
    } return count;
} frequency(matrix, number);