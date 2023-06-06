// Bài 4: Sử dụng JS để thiết kế lớp Agency.
// + Lớp này có các thuộc tính sau:
// - agencyCode
// – agencyName
// – phoneNumber
// – address
// – email
// + Lớp này có constructor nhận vào 5 thuộc tính trên
// + Lớp này có các phương thức sau
// - getPhonenumber() -> trả về số điện thoại của đại lý và 3 số cuối của điện thoại thay bằng 3 chữ X
// - getInfo() -> Hiển thị thông tin đầy đủ về 1 đại lý (đủ cả 5 thông tin)
// + tạo một mảng agencyList gồm 2 object từ class Agency trên
// + Viết các hàm sau:
// - createAgency() để thêm mới 1 agency vào trong mảng agencyList
// - removeAgency(agencyCode): để xóa 1 agency ra khỏi agenceyList trên
class Agency {
    constructor(agencyCode, agencyName, phoneNumber, address, email) {
        this.agencyCode = agencyCode;
        this.agencyName = agencyName;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.email = email
    }
    getphoneNumber() {
        return this.phoneNumber.slice(0, this.phoneNumber.length - 3) + "xxx";
    }
    getinfo() {
        return (`${this.agencyCode} và ${this.agencyName} và ${this.phoneNumber} và ${this.address} và ${this.email}`);

    }

}

var agency1 = new Agency('C0423I1', 'Cường', '0123456789', '19 Nguyễn', 'a@gmail.com');
var agency2 = new Agency('C0423I2', 'Tuấn', '0123456789', '19 Nguyễn nguyễn', 'b@gmail.com');
var number = agency1.getphoneNumber();
console.log(number);
console.log(agency1.getinfo());
var agencyList = [agency1, agency2];
function createAgency(agencyCode, agencyName, phoneNumber, address, email) {
    let newAgency = new Agency(agencyCode, agencyName, phoneNumber, address, email)
    agencyList.push(newAgency);
}
function removeAgency(agencyCode) {
    for (let index in agencyList) {
        let agency = agencyList[index]
        if (agency.agencyCode == agencyCode) {
            agencyList.splice(index, 1)
        }
    }
    return agencyList;
}
removeAgency("C0423I2")
createAgency('C0423I3', 'Đạt', '0123456789', '19 Nguyễn', 'c@gmail.com');
console.log(agencyList);


