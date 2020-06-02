const express = require('express');
const graphqlHTTP=require('express-graphql');

const app=express();
app.app('/graphql'.graphqlHTTP({
schema
}));

app.listen(4000,()=>{
    console.log("listening on port 4000");
});