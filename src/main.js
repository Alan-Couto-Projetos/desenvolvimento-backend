
const express = require('express');
const bodyParser = require('body-parser');
const UsuarioController = require('./usuario/Controllers/usuario.controller');
const UsuarioService = require('./usuario/Services/usuario.service');
const PagamentoController = require('./pagamento/Controllers/pagamento.controller');
const PagamentoService = require('./pagamento/Services/pagamento.service');
const AssinaturaController = require('./assinatura/controlllers/assinatura.controller');
const AssinaturaService = require('./assinatura/Services/assinatura.service');
const AplicativoController = require('./aplicativo/controllers/aplicativo.controller');
const AplicativoService = require('./aplicativo/service/aplicativo.service');
const ClienteController = require('./cliente/controllers/cliente.controller');
const ClienteService = require('./cliente/service/cliente.service');

const app = express();
app.use(bodyParser.json());

const usuarioService = new UsuarioService();
const usuarioController = new UsuarioController(usuarioService);
const pagamentoService = new PagamentoService();
const pagamentoController = new PagamentoController(pagamentoService);
const assinaturaService = new AssinaturaService();
const assinaturaController = new AssinaturaController(assinaturaService);
const aplicativoService = new AplicativoService();
const aplicativoController = new AplicativoController(aplicativoService);
const clienteService = new ClienteService();
const clienteController = new ClienteController(clienteService);

// Rotas de Usuário
app.post('/usuarios/login', (req, res) => usuarioController.login(req, res));
app.post('/usuarios', (req, res) => usuarioController.criarUsuario(req, res));
app.get('/usuarios', (req, res) => usuarioController.listarUsuarios(req, res));
app.get('/usuarios/:codigo', (req, res) => usuarioController.buscarUsuarioPorCodigo(req, res));

// Rotas de Pagamento
app.post('/pagamentos', (req, res) => pagamentoController.createPagamento(req, res));
app.get('/pagamentos', (req, res) => pagamentoController.listarPagamentos(req, res));

// Rotas de Assinatura
app.post('/assinaturas', (req, res) => assinaturaController.criarAssinatura(req, res));
app.get('/assinaturas', (req, res) => assinaturaController.listarAssinaturas(req, res));
app.get('/assinaturas/cliente/:codCli', (req, res) => assinaturaController.listarAssinaturasPorCliente(req, res));
app.get('/assinaturas/aplicativo/:codApp', (req, res) => assinaturaController.listarAssinaturasPorAplicativo(req, res));

// Rotas de Aplicativo
app.post('/aplicativos', (req, res) => aplicativoController.criarAplicativo(req, res));
app.get('/aplicativos', (req, res) => aplicativoController.listarAplicativos(req, res));
app.get('/aplicativos/:codigo', (req, res) => aplicativoController.buscarAplicativoPorCodigo(req, res));
app.patch('/aplicativos/:codigo', (req, res) => aplicativoController.atualizarCustoMensal(req, res));

// Rotas de Cliente
app.post('/clientes', (req, res) => clienteController.criarCliente(req, res));
app.get('/clientes', (req, res) => clienteController.listarClientes(req, res));
app.get('/clientes/:codigo', (req, res) => clienteController.buscarClientePorCodigo(req, res));

// Inicia o servidor
app.listen(3000, () => {
  console.log('Aplicação rodando em http://localhost:3000');
});