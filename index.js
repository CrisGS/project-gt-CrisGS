import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app = express();
app.use(cors({optionsSuccessStatus: 200}));

app.use(express.static('public'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get('/', (_, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/category', (_, res) => {
    res.sendFile(__dirname + '/views/category.html');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started');
});