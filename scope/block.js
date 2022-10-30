//block scope
function fruit() {
    if (true){
        var fruit1='Apple';
        let fruit2='kiwi';
        const fruit3='banana';
    }
    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}
fruit()