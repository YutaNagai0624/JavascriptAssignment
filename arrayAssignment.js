// Bodlogo 1 
let myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];
function myAlphabetLength (){
    console.log(myAlphabet.length);

    if (myAlphabet.length < 4){
        console.log("Array is lesser than four");
    }
    else {
        console.log("Array is equal or more than four");
    }
}
myAlphabetLength()
// 
// Bodlogo 2 
var planets = ['Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus']
for (var i = 0; i < planets.length; i++){
    console.log((i + 1) + '. ' + planets[i])
}
// 
// Bodlogo 3
let WowDatatypes = ['Yuta', 32, 2.5, 'a', true]
for (var i = 0; i < WowDatatypes.length; i++){
    console.log((i + 1) + '. ' + typeof WowDatatypes[i])
}
// 
// Bodlogo 4 
let student1Courses = ['Математик', 'Англи хэл', 'Програмчлал'];
let student2Courses = ['Газар зүй', 'Испани', 'Програмчлал'];
var arr1;
var arr2;
for(i = 0; i < 3; i++){
    arr1 =  student1Courses[i];
    for(j = 0; j < student2Courses.length; j++){
        arr2 = student2Courses[j];
        if (arr1 == arr2) {
            console.log(arr2);
            
        }
    }
}
// 

