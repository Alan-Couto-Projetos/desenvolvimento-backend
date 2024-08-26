class Pagamento {
  constructor(codigo, codAssinatura, valorPago, dataPagamento) {
    this.codigo = codigo;
    this.codAssinatura = codAssinatura;
    this.valorPago = valorPago;
    this.dataPagamento = new Date(dataPagamento); // Certificando que a data seja manipulada corretamente
  }
  
}

module.exports = Pagamento;