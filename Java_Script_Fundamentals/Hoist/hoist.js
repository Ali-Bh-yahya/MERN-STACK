// // 1 example
// // console.log(hello);
                                   
// // var hello ='world'; // undefined

// // solve the problem

// var hello; // undefined

// hello ='world'; // undefined

// console.log(hello); // world


// // 2 example

// // var needle ='haystack';
 
// // test();
 
// // function test()
// // {
// // var needle ='magnet';
// // console.log(needle);
// //  //magnet
// // }

// // After Hosting
// var needle ;

// function test() {

//     var needle;
//     needle = 'magnet';
//     console.log(needle); // magnet
 
// }

// needle = 'hysstack';
// test();
// console.log(needle); // hysstack

// // 3 example
// // var brendan ='super cool';
 
// // function print()
// // {
// //    brendan = 'only okay';
// //    console.log(brendan);
// //    // only okay
// // }
 
// // console.log(brendan);
// // super cool

// // After Hosting example 3
//  var brendan;
//   function print(){
//     brendan = 'only okay';
//     console.log(brendan); // function not called
//   }
//   brendan ='super cool';
//   console.log(brendan); // super cool

// // 4 example
// var food ='chicken';
 
// console.log(food);
 
// eat();
 
// function eat(){
 
// food ='half-chicken';
 
// console.log(food);
 
// var food ='gone';}


// // solve example 
// var food;
// function eat() {
//     var food;
//     food = 'half-chicken';
//     console.log(food); // 'half-chicken'
//     food = 'gone';
// }
// food = 'chicken';
// console.log(food); // 'chicken'
// eat();





// // 5 example

// // mean(); // mean is not a function
// // console.log(food);// undefined
// // var mean = function () {
// //     food = "chicken";
// //     console.log(food); // 'chicken'
// //     var food = "fish";
// //     console.log(food);// fish
// // };
// //  mean();
// // console.log(food); // undefined



// // 6 example

// console.log(genre);//undefined
// var genre = "disco";
// rewind(); // i can't call this function 
// function rewind() {
//     var genre = "rock";
//     console.log(genre);//rock
//     genre = "r&b";
//     console.log(genre);//r&b
// }
// console.log(genre);//disco

// // 7 example

// dojo = "san jose";
// console.log(dojo);//san jose
// learn();// i cant call the function beacouse this interpreter language 
// function learn() {
//     var dojo = "seattle";
//     console.log(dojo);//seattle
//     dojo = "burbank";
//     console.log(dojo);//burbank
// }
// console.log(dojo);//san jose


// 8 example

console.log(makeDojo("Chicago", 65));//{ name: 'Chicago', students: 65, hiring: true }
console.log(makeDojo("Berkeley", 0));//error
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    } else if (dojo.students <= 0) {
        dojo = "closed for now";// 
    }
    return dojo;
}
// dojo = "closed for now";
// ^

// TypeError: Assignment to constant variable.

