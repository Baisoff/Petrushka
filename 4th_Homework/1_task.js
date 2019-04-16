var PlantFern = [];

var PlantSpruce = [];



// Parent class

function Plant(name, description, species, age, habitat, size) {

    // Data initialize

    this.name = name;

    this.description = description;

    this.species = species;

    this.age = age;

    this.habitat = habitat;

    this.size = size;



    // Setter and Getter for name

    this.setname = function(name) {

        this.name = name;

    };



    this.getname = function() {

        return this.name;

    };



    // Setter and Getter for description

    this.setdescription = function(description) {

        this.description = description;

    };



    this.getdescription = function() {

        return this.description;

    };



    // Setter and Getter for species

    this.setspecies = function(species) {

        this.species = species;

    };



    this.getspecies = function() {

        return this.species;

    };



    // Setter and Getter for age

    this.setage = function(age) {

        this.age = age;

    };



    this.getage = function() {

        return this.age;

    };



    // Setter and Getter for habitat

    this.sethabitat = function(habitat) {

        this.habitat = habitat;

    };



    this.gethabitat = function() {

        return this.habitat;

    };


    // Setter and Getter for size

    this.setsize = function(size) {

        this.size = size;

    };



    this.gethabitat = function() {

        return this.habitat;

    };

}



function PlantFern(name, description, species, age, habitat, size, forIvanKupalaDay) {

    Plant.call(this, name, description, species, age, habitat, size, forIvanKupalaDay);

    this.forIvanKupalaDay = forIvanKupalaDay;



    this._setforIvanKupalaDay = function(forIvanKupalaDay) {

        this.forIvanKupalaDay = forIvanKupalaDay;

    };



    this._getforIvanKupalaDay = function() {

        return forIvanKupalaDay;

    };

}



function addPlantFern(name, description, species, age, habitat, size, forIvanKupalaDay) {

    var object = new addPlantFern(name, description, species, age, habitat, size, forIvanKupalaDay);

    PlantFern.push(object);

    return PlantFern;

}



function PlantSpruce(name, description, species, age, habitat, size, CristmasTree) {

    PlantSpruce.call(this, name, description, species, age, habitat, size, CristmasTree);

    this.CristmasTree = CristmasTree;



    this._setCristmasTree = function(CristmasTree) {

        this.CristmasTree = CristmasTree;

    };



    this._getCristmasTree = function() {

        return CristmasTree;

    };

}



function addPlantSpruce(name, description, species, age, habitat, size, CristmasTree) {

    var object = new PlantSpruce(name, description, species, age, habitat, size, CristmasTree);

    PlantSpruce.push(object);

    return PlantSpruce;

}



//Create

function CreatePlant(name, description, species, age, habitat, size) {

    if (forIvanKupalaDay !== undefined) {

        var Plant = new PlantFern(name, description, species, age, habitat, size, forIvanKupalaDay);

    } else if (сhristmasTree !== undefined) {

        var Plant = new PlantSpruce(name, description, species, age, habitat, size, сhristmasTree);

    } else if (forIvanKupalaDay == undefined && christmasTree == undefined) {

        var Plant = new Plant(name, description, species, age, habitat, size)

    } else {

        console.log("Сreation failed");

    };

}