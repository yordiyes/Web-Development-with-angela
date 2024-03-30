function fibonacciGenerator(number){
    var value;
    var array = [];
    for(var i=0; i<number; i++){
        if(i == 0){
            value = 0;
            array.push(value);
        }else if( i == 1){
            value = 1;
            array.push(value);
        }else{
            value = array[i-1] + array[i-2];
            array.push(value);
        }
    }
    return array;
}
var output = fibonacciGenerator(7);
console.log(output);