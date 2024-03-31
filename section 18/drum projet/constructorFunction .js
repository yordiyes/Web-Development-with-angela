function houseKeeper(name, yearOfExperience, cleaningRepertoire){
    this.name = name;
    this.yearOfExperience = yearOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
    this.celan = function(){
        console.log("Cleaning in progress.")
    }
}
var houseKeeper1 = new houseKeeper("beti",5,["lobby","bedroom"]);
houseKeeper1.celan();