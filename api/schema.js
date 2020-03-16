const {gql} = require('apollo-server');

//Definimos el schema de nuestro objeto en graphql, puede tener diferentes tipos de datos: ID (identificador único), String, Int, Float o Boolean
//Cuando agregamos el signo de exclamación, definimos que ese atributo es requerido
const typeDefs = gql`
    type Highlight{
        id: ID!
        content: String!
        title: String
        author: String
    }
    type Query{
        highlights: [Highlight],
        highlight(id: ID!): Highlight
    }
    type Mutation{
        newHighlight(content: String! title: String author: String): Highlight!
        updateHighlight(id: ID! content: String!): Highlight!
        deleteHighlight(id: ID!): Highlight!
    }
`;

//Defininimos la forma en que se accederá a los datos mediante querys, un query solo permite acceder a los datos, pero no modificarlos
//Las mutaciones, son las formas en que definimos cómo modificar nuestros datos, ya sea agregando, cambiando o eliminando
module.exports = typeDefs;