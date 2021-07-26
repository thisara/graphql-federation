import pkg from 'notarealdb';

const { DataStore } = pkg;

const store = new DataStore('../data');

const products = store.collection('products');

export default products;