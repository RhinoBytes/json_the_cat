// breedFetcherTest.js

const fetchBreedDescription = require('../breedFetcher');
const {assert} = require('chai');

describe('fetchBreedDescription', () =>{
  it('returns a string description for a valid dog breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, desc) => {
      // no error expected
      assert.isNull(error);
      assert.isString(desc);
      done();
    });
  });
  it('returns breed not found if no breed exists', (done) => {
    fetchBreedDescription('ergqewrg', (error, desc) => {
      assert.instanceOf(error, Error);
      assert.strictEqual(desc, null);
      done();
    });
  });
  
});