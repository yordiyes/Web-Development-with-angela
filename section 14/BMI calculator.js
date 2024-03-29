function bmiClaculator(weight, height){
    var bmi =  weight/(height*height);
    
    return Math.round(bmi);
}
var bmi = bmiClaculator(65, 1.8);
console.log(bmi);