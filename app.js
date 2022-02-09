import express from 'express';

export const app = express();

// Serve up anything that's in the public forlder.
app.use(express.static('public'));

app.get('/', (request, respond) => {
        respond.status(200).send('Hello World Refactorized v1.0');
    });

export default function hello() {
        console.log("Hello World!");
    }