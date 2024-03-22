// // Tao 1 function hello
// function hello(){ //Khai bao
//     console.log("hello 500 ae lop web39");
// }

// hello(); //Thuc thi

// Function phan biet tham so va doi so
// Parameter: Tham so -> Dat ten tuy y
// Argument: Doi so


// function hi(name){ //name -> Tham so

//     // console.log(name);

//     console.log(`Hello 500 anh em! Minh la ${name}`);
// }

// hi("Nguyen Van B"); //Gia tri truyen vao la doi so
// hi("Le thi C");

// Function tinh tong 2 so

// function sum(a, b){

//     console.log(a);
//     console.log(b);

//     // let a = 5;
//     // let b = 6;

//     console.log(a + b);
// }

// sum(4,6);

// Function khong co tham so -> It dung trong thuc te

// function sayHello(){
//     console.log("Hello 500 anh em");
// }
// sayHello();

// Function co tham so -> It dung trong thuc te
// function sayHello(name,age){//age, name la tham so

//     console.log(name);

//     console.log(`Toi la ${name} Toi ${age}`);

//     // console.log(age);
// }

// sayHello("Duc", 22);

// Function co ket qua tra ve -> Su dung nhieu trong thuc te

// function sum(a,b,c){


//     // console.log(a);
//     // console.log(b);
//     // console.log(c);

//     // let d = a + b + c;
//     // return d;

//     return (a + b + c);
// }

// // Thuc thi
// // console.log(sum(1,2,3)); (Cach 1)

// // Cach 2
// let numberSum = sum(1,2,3);
// console.log(numberSum);



// Cau lenh co dieu kien - If
// > : lon hon
// < : be hon
// >= : lon hon va bang
// <= : be hon va bang
// = : gan gia tri vao bien
// ==: so sanh gia tri
// ===: so sanh gia tri + kieu du lieu

// let money = 30;

// if (money > 27){
//     console.log("Ban du tien mua iphone!");
// }

// cau lenh dieu kien if else
// let hour = 15;

// if(hour < 12) {
//     console.log("Buoi sang");
// }else {
//     console.log("Buoi chieu");
// }

// Cau lenh dieu kien if - else if - else
// let time = 20;

// if (time <= 10) {
//     console.log("Chao buoi sang");
// } else if (time >= 12 && time < 18 ) {
//     console.log("Chao buoi chieu");
// } else {
//     console.log("Chao buoi toi");
// }


// Vi du Switch - Case (Dieu kien cu the)
// let money = 10;

// switch(money) {
//     case money = 10 : {
//         console.log("Ca phe da");
//         break;
//     }
//     case money = 12 : {
//         console.log("ca phe sua");
//         break;
//     }
//     case money = 8 : {
//         console.log("Sting dau");
//         break;
//     }
//     case money = 2 : {
//         console.log("Tra da");
//         break;
//     }
//     default : {
//         console.log("Ngheo");
//         break;
//     }
// }

// First class function
// function sum(a,b) {
//     // console.log(a);
//     // console.log(b);

//     return (a + b);
// }

// // console/.log(sum(1,2));
// let sumFn = sum(1,2);
// console.log(sumFn);



// Function nay co the la tham so cua function khac
// function isSum(a,b) {
//     return (a + b);
// }

// //console.log(sum(1,3));

// function numberSum(isSum, c) {
//     return (isSum + c)
// }

// let result = numberSum(isSum(1,3), 5);
// console.log(result);

// ES5 - khai bao va su dung 1 function
// function sayHello() {
//     console.log("Hello 500 ae");
// }

// sayHello();

// ES6 - Khai bao va su dung 1 function

// let sayHello = () => {
//     console.log("hello 500 ae");
// }
// sayHello();



// ES5 - Tinh tong 3 so
// function sum(a,b,c) {
//     return a + b + c;
// }

// console.log(sum(1,2,3));

// ES6 - Tinh tong 3 so
let sum = (a,b,c) => {
    return (a+b+c);
}

console.log(sum(1,2,3));








