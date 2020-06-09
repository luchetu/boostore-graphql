const express = require('express');
const graphqlHTTP=require('express-graphql');
const mongoose=require('mongoose');
const schema = require('./schema/schema');
const cors = require('cors');

const app=express();

// allow cross-origin requests
app.use(cors());

mongoose.connect('mongodb+srv://hluchetu:hum1234@cluster0-6frs1.mongodb.net/Cluster0?retryWrites=true&w=majority');
mongoose.connection.once('open',()=>{
    console.log("connected to database");
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000,()=>{
    console.log("listening on port 4000");
});