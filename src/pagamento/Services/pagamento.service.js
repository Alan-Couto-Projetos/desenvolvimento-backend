const Pagamento = require('../entidade/pagamento.entidade');

class PagamentoService {
  constructor() {
    this.pagamentos = [];
  }

  createPagamento(pagamentoDto) {
    console.log('Dados recebidos para criar pagamento:', pagamentoDto);

    if (!pagamentoDto.codAssinatura || !pagamentoDto.valorPago || !pagamentoDto.dataPagamento) {
      throw new Error('Dados de pagamento incompletos ou inválidos.');
    }

    const novoPagamento = new Pagamento(
      this.pagamentos.length + 1,
      pagamentoDto.codAssinatura,
      pagamentoDto.valorPago,
      pagamentoDto.dataPagamento
    );

    console.log('Novo pagamento criado:', novoPagamento);

    this.pagamentos.push(novoPagamento);
    return novoPagamento;
  }

  listarPagamentos() {
    return this.pagamentos;
  }
}

module.exports = PagamentoService;