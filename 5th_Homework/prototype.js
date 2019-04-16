function Plant(name, description, species, age, habitat, size) {

    this.id = randomInteger(100, 999);
    this.name = name;
    this.description = description;
    this.species = species;
    this.age = age;
    this.habitat = habitat;
    this.size = size;



    function randomInteger(min, max) {

        var random = min - 0.5 + Math.random() * (max - min + 1)

        random = Math.round(random);

        return random;

    }

};

Plant.prototype.getId = function () {

    return this.id;

};

Plant.prototype.setId = function (id) {

    this.id = id;

};

Plant.prototype.getName = function () {

    return this.name;

};

Plant.prototype.setName = function (name) {

    this.name = name;

};

Plant.prototype.getDescription = function () {

    return this.description;

};

Plant.prototype.setDescription = function (description) {

    this.description = description;

};

Plant.prototype.getSpecies = function () {

    return this.species;

};

Plant.prototype.setSpecies = function (species) {

    this.species = species;

};

Plant.prototype.getAge = function () {

    return this.age;

};

Plant.prototype.setAge = function (age) {

    this.age = age;

};

Plant.prototype.getSize = function () {

    return this.size;

};

Plant.prototype.setSize = function (size) {

    this.size = size;

};

Plant.prototype.getHabitat = function () {

    return this.habitat;

};

Plant.prototype.setHabitat = function (habitat) {

    this.habitat = habitat;

};





function PlantFern(name, description, species, age, habitat, size, forIvanKupalaDay) {

    Plant.apply(this, arguments);

    this.forIvanKupalaDay = forIvanKupalaDay;

};

PlantFern.prototype.getForIvanKupalaDay = function () {

    return this.forIvanKupalaDay;

};

PlantFern.prototype.setForIvanKupalaDay = function (forIvanKupalaDay) {

    this.forIvanKupalaDay = forIvanKupalaDay;

};




function PlantSpruce(name, description, species, age, habitat, size, сhristmasTree) {

    Plant.apply(this, arguments);

    this.сhristmasTree = сhristmasTree;

};

PlantSpruce.prototype.getChristmasTree = function () {

    return this.сhristmasTree;

};

PlantSpruce.prototype.setChristmasTree = function (сhristmasTree) {

    this.сhristmasTree = сhristmasTree;

};



//Create

function CreatePlant(name, description, species, age, habitat, size, forIvanKupalaDay, сhristmasTree) {

    if (forIvanKupalaDay !== undefined) {

        var plant = new PlantFern(name, description, species, age, habitat, size, forIvanKupalaDay);

    } else if (сhristmasTree !== undefined) {

        var plant = new PlantSpruce(name, description, species, age, habitat, size, сhristmasTree);

    } else if (forIvanKupalaDay == undefined && christmasTree == undefined) {

        var plant = new Plant(name, description, species, age, habitat, size)

    } else {

        console.log("Сreation failed");

    };

    return JSON.stringify(plant);

}


