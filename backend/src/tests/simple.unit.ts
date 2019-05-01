import App from '../App';
import { expect } from 'chai';
import supertest from 'supertest';

import HttpStatus from '../utils/HttpStatus';
import UserController from '../controllers/UserController';

let app = new App([new UserController()]).getExpressApp();

describe('/user', function() {
    describe('#GET /getall', function() {
        it('should return a list of categories and the status 200', function(done) {
            supertest(app)
                .get('/user/getAll')
                .end(function(err, res) {
                    expect(res.status).to.equal(HttpStatus.OK);
                    expect(res.body).to.be.an('array');
                    done();
                });
        });
    });
});