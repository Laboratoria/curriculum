'use strict';

const Assert = require('chai').assert;
const restaurantBill = require('../solution/restaurantBill');

describe('restaurantBill()', () => {

  it('deveria devolver $11, para 50', () => {
    const preTaxAmount = 50;
    const tax = preTaxAmount * 0.1;
    const total = '$' + (preTaxAmount + tax) / 5 ;
    Assert.deepEqual(restaurantBill(preTaxAmount), total);
  });

  it('deveria devolver $22, para 100', () => {
    const preTaxAmount = 100;
    const tax = preTaxAmount * 0.1;
    const total = '$' + (preTaxAmount + tax) / 5 ;
    Assert.deepEqual(restaurantBill(preTaxAmount), total);
  });

  it('deveria devolver $18.7, para 85', () => {
    const preTaxAmount = 85;
    const tax = preTaxAmount * 0.1;
    const total = '$' + (preTaxAmount + tax) / 5 ;
    Assert.deepEqual(restaurantBill(preTaxAmount), total);
  });
});
