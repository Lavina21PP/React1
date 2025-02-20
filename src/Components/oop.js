// //create class พิมพ์ใหญ่ตัวแรก
// class User{
//     //property
//     name = 'Lavina'
//     password = 123
// }

// //create object พิมพ์เล็กทั้งหมด
// const user1 = new User();
// const user2 = new User();
// const user3 = new User();

// user1.name = 'Nar';
// console.log(user1)

// user2.name = 'Sin';
// console.log(user2)


// //create class พิมพ์ใหญ่ตัวแรก
// class User{
//     //property
//     name = 'Null'
//     pass = 0
//     constructor(name, pass){
//         this.name = name;
//         this.pass = pass;
//         // console.log(`เรียก Constructor ${name}`)
//     }
// }

// //create object พิมพ์เล็กทั้งหมด
// const user1 = new User('Nar', 111);
// const user2 = new User('Sin', 222);
// const user3 = new User('Lar', 333);

// console.log(user1.name);
// console.log(user1.pass);


// //create class พิมพ์ใหญ่ตัวแรก
// class User{
//     //property
//     name = 'Null'
//     pass = 0
//     //parameter constructor
//     constructor(name, pass){
//         this.name = name;
//         this.pass = pass;
//         // console.log(`เรียก Constructor ${name}`)
//     }
//     //method
//     showDetail(){
//         console.log(`Username: ${this.name}, Password: ${this.pass}`)
//     }
// }

// //create object พิมพ์เล็กทั้งหมด
// const user1 = new User('Nar', 111);
// const user2 = new User('Sin', 222);
// const user3 = new User('Lar', 333);

// user1.showDetail()
// user2.showDetail()
// user3.showDetail()


// //create class พิมพ์ใหญ่ตัวแรก
// class User{
//     //property
//     #name = 'Null'
//     #pass = 0
//     //parameter constructor
//     constructor(name, pass){
//         this.#name = name;
//         this.#pass = pass;
//         // console.log(`เรียก Constructor ${name}`)
//     }
//     //method
//     showDetail(){
//         console.log(`Username: ${this.#name}, Password: ${this.#pass}`)
//     }
//     set Name(newName){
//         this.#name = newName;
//     }
//     get Name(){
//         return this.#name;
//     }
// }

// //create object พิมพ์เล็กทั้งหมด
// const user1 = new User('Nar', 111);
// const user2 = new User('Sin', 222);
// const user3 = new User('Lar', 333);

// user1.Name = 'Suea';
// console.log(user1.Name)