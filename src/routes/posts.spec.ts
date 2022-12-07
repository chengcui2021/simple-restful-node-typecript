let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

//Our parent block
describe('Posts', () => {
	beforeEach((done) => { 
		   done();		   
	});
 /*
  * Test the /GET route
  */
  describe('/GET all posts', () => {
	  it('it should GET all the posts', (done) => {
			chai.request(server)
		    .get('/posts')
		    .end((err, res) => {
			  	res.should.have.status(200);
			  	res.body.should.be.a('object');
		      done();
		    });
	  });
  });

  describe('/GET/:id post', () => {
    it('it should GET a post by the given id', (done) => {
            chai.request(server)
          .get('/post/23')
          .end((err, res) => {
                res.should.have.status(200);
                res.body['LandParcels'].length.should.be.eql(2);
            done();
          });
        });
});
});