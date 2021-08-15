let LinkedListMaster = require('../data-structure/linked_list');
let LinkedList = LinkedListMaster.ll;
let HashTable = require('./hashtable');


describe('Hash Table functionality', () => {
  it('Should add a key/value pair', () => {
    let table = new HashTable(1024);
    table.add('Rula', 'student');
    expect(table.contains('Rula')).toBeTruthy();
  });
  it('Should retrieve a value if given a key', () => {
    let table = new HashTable(1024);
    table.add('Rula', 'student');
    expect(table.get('Rula')).toEqual('student');
  });
  it('Should return null for a key that does not exist', () => {
    let table = new HashTable(1024);
    table.add('Rula', 'student');
    expect(table.get('Frank')).toBeFalsy();
  });
  it('Should succesfully handle a collision within the table', () => {
    let table = new HashTable(1024);
    table.add('Rula', 'student');
    table.add('Rula', 'instructor');
    expect(table.contains('Rula')).toBeTruthy();
    expect(table.get('Rula')).toEqual('instructor');
    expect(table.find('Rula').next).toBeTruthy();

  });
  it('Should succesfully retrieve a value from a collision within the table', () => {
    let table = new HashTable(1024);
    table.add('Rula', 'student');
    table.add('Rula', 'instructor');
    expect(table.find('Rula').next.value['Rula']).toEqual('student');
  });
  it('Should succesfully hash a a key to an in-range value', () => {
    let table = new HashTable(1024);
    let hashOne = table.hash('Rula');
    let hashTwo = table.hash('JingleHeimerSchmidt');
    expect(hashOne < 1024 && hashOne > 0).toBeTruthy();
    expect(hashTwo < 1024 && hashTwo > 0).toBeTruthy();
  });
});
