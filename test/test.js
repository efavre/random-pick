'use strict';
const app = require('../app');
const request = require('supertest')(app);
const should = require("should");

describe('API', function() {
  describe('POST /random-pick', function() {
    it('should randomly pick a value from input array', function(done) {
      const arrayInput = ["one", "two"]
      request
        .post('/random-pick')
        .send(arrayInput)
        .set('Content-type', 'application/json')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end(function(err, res) {
          if (err) throw err;
          res.body.should.have.property('option').which.is.a.String();
          arrayInput.should.containEql(res.body.option);
          done();
        });
    });

    it('should gracefully fail if input not an array', function(done) {
      const objectInput = {"one":"two"}
      request
        .post('/random-pick')
        .send(objectInput)
        .set('Content-type', 'application/json')
        .expect(400)
        .end(function(err, res) {
          if (err) throw err;
          res.body.should.have.property('error').which.is.a.String();
          done();
        });
    });
  });
});

