import pkg from 'apollo-server';
import fs from 'fs';
import path from 'path';

const { gql } = pkg;

const td = fs.readFileSync(path.resolve(fs.realpathSync('.'),'./services/accounts/schema/schema.graphql'),{encoding:'utf-8'})

const typeDefs = gql`${td}`;

export default typeDefs;