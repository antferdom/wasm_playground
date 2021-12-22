import express from 'express'

const app = express();
const PORT = 3000; // port to be use by the server

// Serve up anything that's in the public forlder.
app.use(express.static('public'));

app.get('/', (request, respond) => {
        respond.send('Hello World.');
    });

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))