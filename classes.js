console.log('hello');

class Animal {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }
    getNameAndSpecies() {
        let an = console.log( `${this.name} is the name of a ${this.species} dog`);
        return an;
    }
};


let Billy = new Animal("Billy", "German Sheapperd", 5);
let Sam = new Animal("Sam", "Hampster", 2);
let Darla = new Animal("Darla", "horse", 12);
console.log(Billy);
console.log(Darla);
console.log("The name is ", Darla.name);
console.log("Her species is ", Darla.species);
