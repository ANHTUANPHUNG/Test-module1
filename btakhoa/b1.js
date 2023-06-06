// Bài 1: Hãy đưa chẵn về đầu, lẻ về cuối, phần tử 0 nằm giữa mảng
function arrange(arr) {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr1.push(arr[i]);
        } else if (arr[i] % 2 == 0 && arr[i] != 0) {
            arr2.push(arr[i]);

        } else if (arr[i] % 2 != 0) {
            arr3.push(arr[i]);
        }
    }

    return arr2.concat(arr1, arr3);
}

let arr = [1, 3, 4, 5, 7, 11, 9, 64, 45, 34, 423, 65, 75, 8, 14, 5, 7, 0]
arrange(arr);
console.log(arrange(arr));