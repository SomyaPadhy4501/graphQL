export const typeDef = `
type Todo {
            id: ID!
            title: String!
            completed: Boolean
        }
            type Query {
        getTodos: [Todo]
        
        } 



`