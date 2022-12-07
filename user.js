class User{
    name;
    password;
    constructor(name, password){
        this.name = name;
        this.password = password;
    }

    getName(){
        return this.name;
    }

    setName(newName){
        this.name = newName;
    }

    showInfo(){
        return "Ten toi la: " + this.name + " Mat khau la: " + this.password;
    }

    showInfo2(){
        return `Ten toi la ${this.name} Mat khau la ${this.password} `;
    }
    static tenCoSo = "CodeGym Online";
}
let kax = new User("Kieu Anh xinh", "123456");
// truy cap truc tiep den thuoc tinh
kax.name = "ầhhasjfhajsfgjs";
//lay thuoc tinh ra -> getter
//get+ten thuoc tinh
kax.getName();
//gan lai gia tri cho thuoc tinh->setter
//set+ ten thuoc tinh

// than thien voi nhung ngon ngu lap trinh huong doi tuong

// function User1(){
//     // thuoc tinh
//     this.name = "";
//     this.password = "";

//     // phuong thuc
//     this.showInfo = function(){
//         return "Ten toi la: " + this.name + " Mat khau la: " + this.password;
//     }

// }
// let ka2 = new User1();
// ka2.name = "Vu Thi Kieu Anh";
// ka2.password = "12345";