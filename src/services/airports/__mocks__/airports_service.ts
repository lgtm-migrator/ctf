const originalModule = jest.requireActual('../airports_service');

jest
  .spyOn(originalModule, 'load')
  .mockImplementation(() =>
    Promise.resolve(require('../../../../data/airports.json'))
  );

module.exports = originalModule;