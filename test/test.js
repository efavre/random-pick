'use strict';
const app = require('../app');
const assert = require('assert');
const request = require('supertest')(app);
const should = require("should");

describe('API', function() {

  describe('POST /options', function() {
    it('should randomly pick a value from input array', function(done) {
      const input = ["one", "two"]
      request
        .post('/options')
        .send(input)
        .set('Content-type', 'application/json')
        .expect(200)
        .expect('Content-Type', 'text/plain')
        .end(function(err, res) {
          input.should.containEql(res.text);
          done();
        });
    });
  });
});
