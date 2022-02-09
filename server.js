import { app } from './app.js';

const PORT  = 3000; // port to be use by the server

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));