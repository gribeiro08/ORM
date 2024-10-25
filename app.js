const express = require('express');
const sequelize = require('./config/database'); // Importando a configuração do banco de dados
const routes = require('./routes/index'); // Importando as rotas

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares para interpretação do corpo da requisição
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes); // Prefixo para suas rotas

// Sincronização do banco de dados
sequelize.sync().then(() => {
  console.log("Todas as tabelas foram criadas!");
}).catch(err => {
  console.error("Erro ao sincronizar o banco de dados:", err);
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
