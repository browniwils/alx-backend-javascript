#!/usr/bin/env node

/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */

import Car from './10-car';

export default class EvCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    return new Car();
  }
}
