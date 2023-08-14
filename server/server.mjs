// ES6 module syntax
// npm install -g nodemon
// server.js
// curl http://localhost:3500/api/messages
// ATLAS_URI=mongodb+srv://hellowasabito:nrjmosjztnOJL9mK@cluster0.j2rw6xm.mongodb.net/?retryWrites=true&w=majority
// node server.mjs
// npm install nodemon --save-dev
// replace the package.json 
// "main": "server.mjs",
//  "scripts": {  "start": "node server.mjs",
import express from 'express';
import axios from 'axios';

const app = express();


app.get('/api/messages', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            res.status(500).send('An error occurred while fetching data.');
        });
});

const PORT = 3500;
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
    console.log('Server is now running and ready to accept requests.');
}); 

/* 
// Common JS Syntax
// node server.js

const express = require('express');
const axios = require('axios');

const app = express();

app.get('/api/messages', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            res.status(500).send('An error occurred while fetching data.');
        });
});

const PORT = 3500;
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
 */


// If i am connected to a database this is the code
/* 

import { MongoClient } from 'mongodb';

const ATLAS_URI = 'mongodb+srv://hellowasabito:nrjmosjztnOJL9mK@cluster0.j2rw6xm.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB Atlas URI

 async function connectToDatabase() {
    try {
        const client = new MongoClient(ATLAS_URI, { useUnifiedTopology: true });
        await client.connect();
        console.log('Connected to MongoDB Atlas');
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
    }
}


connectToDatabase();  */



/* import { MongoClient } from 'mongodb';

const ATLAS_URI = 'mongodb+srv://hellowasabito:nrjmosjztnOJL9mK@cluster0.j2rw6xm.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB Atlas URI

async function connectToDatabase() {
    try {
        const client = new MongoClient(ATLAS_URI, { useUnifiedTopology: true });
        await client.connect();
        console.log('Connected to MongoDB Atlas');

        const db = client.db('sample_training');
        const collection = db.collection('records');

         
         const queryResult = await collection.find({}).toArray();
         console.log('Query result:', queryResult);
 
         const insertResult = await collection.insertOne({ name: 'New Entry' });
         console.log('Insert result:', insertResult);

       

        
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
    }
}

connectToDatabase(); */


