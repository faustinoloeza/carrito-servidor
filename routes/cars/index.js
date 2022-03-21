'use strict'

const {getCars, getCar, getCarsOptions, createCar, updateCar} = require('../../controllers/cartController');

module.exports = async function (fastify, opts) {
  fastify.get('/', getCarsOptions);
  fastify.get('/:id', getCar);
  fastify.put('/:id', updateCar);
  fastify.post('/', createCar);
}

