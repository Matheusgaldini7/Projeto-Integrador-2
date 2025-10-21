const express = require('express');
const router = express.Router();

// Banco de dados simulado (temporário)
let alunos = [];

// Cadastro de aluno
router.post('/cadastraAluno', (req, res) => {
  const { ra, nome, email, tel } = req.body;

  if (!ra || !nome || !email || !tel) {
    return res.status(400).json({ mensagem: 'Preencha todos os campos.' });
  }

  const novoAluno = { ra, nome, email, tel };
  alunos.push(novoAluno);

  res.status(201).json({
    mensagem: 'Aluno cadastrado com sucesso!',
    aluno: novoAluno
  });
});

// Listar alunos
router.get('/', (req, res) => {
  if (alunos.length === 0) {
    return res.status(200).json({ mensagem: 'Nenhum aluno cadastrado ainda.' });
  }
  res.json(alunos);
});

module.exports = router;
