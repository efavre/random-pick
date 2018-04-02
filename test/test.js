'use strict';
const app = require('../app');
const request = require('supertest')(app);
const should = require("should");

describe('API', function() {
  describe('POST /random-pick', function() {
    it('should randomly pick a value from input array', function(done) {
      const input = ["one", "two"]
      request
        .post('/random-pick')
        .send(input)
        .set('Content-type', 'application/json')
        .expect(200)
        .expect('Content-Type', 'application/json')
        .end(function(err, res) {

          input.should.containEql(res.body.option);
          done();
        });
    });
  });
});
