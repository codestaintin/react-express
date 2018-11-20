/* eslint-disable */
import request from 'supertest';
import dotenv from 'dotenv';
import { assert, expect } from 'chai';
import server from '../../server';
import GroceryItemModel from '../models/groceryItemsModel';

dotenv.config();

let grocerySeed = [
  { name: 'Yam' },
  { name: 'Potato' }
];

describe('Tests for groceryItems actions', () => {
  before((done) => {
    GroceryItemModel.create(grocerySeed);
    done();
  });

  after((done) => {
    GroceryItemModel.remove({}).then(() => {
      done();
    });
  });
  it('should get all grocery items', (done) => {
    request(server)
      .get('/api/v1/groceries')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        assert.isArray(res.body);
        expect(res.body[0].name).to.equal(grocerySeed[0].name);
        done();
      });
  });
  it('should delete an item', (done) => {
    request(server)
      .delete(`/api/v1/grocery/${grocerySeed[0]._id}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('should add a new item', (done) => {
    const groceryItem = { name: 'Cabbage' };
    request(server)
      .post('/api/v1/grocery')
      .send(groceryItem)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
  });

  it('should get an item', (done) => {
    request(server)
      .get(`/api/v1/grocery/${grocerySeed[0]._id}`)
      .end((err, res) => {
        expect(res.status).to.equal(422);
        expect(res.body.message).to.equal("Grocery not found");
        done();
      });
  });
});