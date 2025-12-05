import fs from 'fs';
import path from 'path';

// Get the database file path(OS agnostic)
const p = path.join(import.meta.dirname, '..', 'data', 'products.json');
const getProductsFromFile = cb => {
  // Get all the products from the file if error create empty array
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

export class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        if (err) console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}
