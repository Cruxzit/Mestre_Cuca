import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import receitasRoutes from './routes/receitas.routes.js';

const app = express();
app.use(cors({origin: 'http://localhost:5137'})); //froentend Vite/React
app.use(express.json());


// Rota de teste
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// Rotas principais
app.use('/api/receitas', receitasRoutes);

// Servir imagens locais, se existirem
app.use('/public', express.static('public'));

app.listen(process.env.PORT || 3001, () =>
  console.log(`✅ API pronta em http://localhost:${process.env.PORT || 3001}`)
);