const PagamentoController = require('../Controllers/pagamento.controller');
const PagamentoService = require('../Services/pagamento.service');

class PagamentoModule {
  constructor(app) {
    this.app = app;
    this.pagamentoController = new PagamentoController();

    this.setupRoutes();
  }

  setupRoutes() {
    this.app.post('/pagamentos', (req, res) => this.pagamentoController.createPagamento(req, res));
    this.app.get('/pagamentos', (req, res) => this.pagamentoController.listarPagamentos(req, res));
  }
}

module.exports = PagamentoModule;