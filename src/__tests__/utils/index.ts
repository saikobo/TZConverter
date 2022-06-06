import {objectToQueryString} from '../../utils/url-helper';

describe('utility functions tests', () => {
  describe('convert object to query string', () => {
    it('should convert object to query string', () => {
      const queryObj = {
        lng: 0.123,
        lat: 0.9812,
      };
      expect(objectToQueryString(queryObj)).toEqual('lng=0.123&lat=0.9812');
    });
  });
});
