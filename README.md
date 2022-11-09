# Empty Apollo TSX

Empty boilerplate for fullstack GraphQL, React and MongoDB projects.

## Install

First run `yarn` or `npm install`, this will install all the dependencies. Then, create a `.env` file at the root of the project, with this data:

```
PORT=5005
MONGODB_URI=<Url to your MongoDB database>
ORIGIN=http://localhost:3000
```

Now, create a second `.env` file in the `client` folder with this data:

```
REACT_APP_GRAPHQL_URI=http://localhost:5005/
```

All set, you can start to code!
