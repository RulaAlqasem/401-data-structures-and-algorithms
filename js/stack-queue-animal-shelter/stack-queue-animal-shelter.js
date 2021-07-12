'use strict';

class AnimalShelter {
  constructor() {
    this.shelter = [];
  }

  enqueue(animalObj) {
    console.log(animalObj);
    if (`${Object.keys(animalObj)}` !== `${[]}`) {
      this.shelter.push(animalObj);
    }

  }

  dequeue(pref) {
    if (pref !== 'dog' && pref !== 'cat') {
      return null;
    } else {
      let i = 0;
      while (Object.keys(this.shelter[i])[0] !== pref && i < this.shelter.length) {
        i++;
      }
      let final = this.shelter[i];
      this.shelter.splice(i, 1);
      return final;
    }
  }
}

module.exports = AnimalShelter;