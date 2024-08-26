const { Controller, Post, Get, Res, HttpStatus } = require('@nestjs/common');
const PagamentoService = require('../Services/pagamento.service');

@Controller('pagamentos')
class PagamentoController {
  constructor(pagamentoService) {
    this.pagamentoService = pagamentoService;
  }

  createPagamento(req, res) {
    try {
      console.log('Requisição para criar pagamento recebida:', req.body);

      const novoPagamento = this.pagamentoService.createPagamento(req.body);

      return res.status(HttpStatus.CREATED).json(novoPagamento);
    } catch (error) {
      console.error('Erro ao criar pagamento:', error.message || error);

      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Erro ao criar pagamento',
        error: error.message || error,
      });
    }
  }

  listarPagamentos(req, res) {
    try {
      const pagamentos = this.pagamentoService.listarPagamentos();
      return res.status(HttpStatus.OK).json(pagamentos);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao listar pagamentos', error });
    }
  }
}

module.exports = PagamentoController;