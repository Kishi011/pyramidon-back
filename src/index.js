import routes from './routes/index.js';
import express from 'express';
import cors from 'cors';

const app = express();
const porta = 3333;

app.use(cors());  

app.use(express.json());

routes(app);

app.use((_, res) => {
  res.status(404).send('404 - Página não encontrada');
});

app.listen(porta, () => {
  console.log(`Sistema de Estágios rodando na porta ${porta}`);
});
