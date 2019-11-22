import { XXX } from './../src/backend.js';

describe('City', () => {
  jest.useFakeTimers();
  let xxx;


  beforeEach(function() {
    xxx = new ClassName();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a contamination level of 3 after 30001 milliseconds', () => {
    thing.examplefunction();
    jest.advanceTimersByTime(30001);
    expect(thing.method).toEqual(3);
  });



});
