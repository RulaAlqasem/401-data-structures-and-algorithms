
const validateBrackets = require('../stack-queue-brackets');

describe('Testing functions validateBrackets', () => {

  it('return true when there is valid prackets', () => {

    expect(validateBrackets('{}(){}')).toEqual(true);
  });

  it('return true when there is valid prackets with extra character', () => {
    expect(validateBrackets('{}{Code}[Fellows](())')).toEqual(true);
  });
  it('return false when there is one pracets', () => {
    expect(validateBrackets('}')).toEqual(false);
  });
  it('returns false when the prackets unvalid', () => {

    expect(validateBrackets('{(})')).toEqual(false);

  });

});