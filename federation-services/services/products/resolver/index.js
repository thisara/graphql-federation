import products from '../service/index.js'

const resolvers = {
    Product: {
        __resolveReference(object) {
            return products.find(product => product.upc === object.upc);
        }
    },
    Query: {
        topProducts(_, args) {
            return products.slice(0, args.first);
        }
    }
};

export default resolvers;