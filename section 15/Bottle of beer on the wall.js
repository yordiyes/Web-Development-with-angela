console.log("Lyrics of the song 99 Bottels of Beer.");
let counter = 99;
function beer(){
    while (counter >= 0){
        if (counter === 1){
            console.log(`${counter} bottle of beer on the wall,${counter} bottle of beer on the wall, 
            Take one down and pass it around,${counter-1} bottels of beer on the wall.`)
        } else if(counter != 0){
            console.log(`${counter} bottles of beer on the wall,${counter} bottles of beer on the wall, 
            Take one down and pass it around,${counter-1} bottels of beer on the wall.`)
        }else{
            console.log(`No more bottles on the wall, no more bottles of beer,
            Go to the store and buy some more, 99  bottles of beer on the wall`)
        }
        counter = counter - 1;
    }
}
beer();