const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Middleware para JSON
app.use(express.json());
app.use(cors());

// Servir pasta de front-end como arquivos estáticos
app.use(express.static('Front-end SistemaAluno'));

// Rotas do sistema
const rotasAlunos = require('./rotas/SistemaAlunos/alunos');
app.use('/alunos', rotasAlunos);

// Rota opcional para acessar HTML do cadastro diretamente
app.get('/cadastrar', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front-end SistemaAluno/CadastrarAluno/cadastrar.html'));
});

// Inicia servidor
const PORTA = 3000;
app.listen(PORTA, () => console.log(`Servidor rodando na porta ${PORTA}`));
