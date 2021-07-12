'use strict';

const AnimalShelter = require('../stack-queue-animal-shelter');


//Happy Path
describe('Testing functions of Animal Shelter class', () => {
  let shelter;
  beforeEach(() => {
    shelter = new AnimalShelter;
    shelter.enqueue({ cat: 'soso' });
    shelter.enqueue({ dog: 'medo' });
    shelter.enqueue({ cat: 'monmon' });
    shelter.enqueue({ dog: 'lele' });
  });
  it('add obj to the Animal Shelter when using enqueue', () => {

    expect(shelter.shelter[0]).toEqual({ cat: 'soso' });
  });
  it('removes the oldest value from the Animal Shelter with the specified animal type cat', () => {
    expect(shelter.dequeue('cat')).toEqual({ cat: 'soso' });
  });
  it('removes the oldest value from the Animal Shelter with the specified animal type dog', () => {
    expect(shelter.dequeue('dog')).toEqual({ dog: 'medo' });
  });
  it('returns null if no pref is specified on dequeue function', () => {
    expect(shelter.dequeue()).toEqual(null);
  });
  it('dosent add impty obj ', () => {

    const shelter1 = new AnimalShelter;
    shelter1.enqueue({});
    shelter1.enqueue({ cat: 'soso' });
    shelter1.enqueue({ dog: 'medo' });
    shelter1.enqueue({ cat: 'monmon' });
    shelter1.enqueue({ dog: 'lele' });

    expect(shelter1.shelter[0]).toEqual({ cat: 'soso' });
  });
});