const Assinatura = require('../entidade/assinatura.entidade');

class AssinaturaService {
  constructor() {
    this.assinaturas = [];
  }

  criarAssinatura(assinaturaDto) {
    if (!assinaturaDto.codApp || !assinaturaDto.codCli) {
      throw new Error('Dados de assinatura incompletos.');
    }

    const novaAssinatura = new Assinatura(
      this.assinaturas.length + 1,
      assinaturaDto.codApp,
      assinaturaDto.codCli,
      new Date(), // inicioVigencia começa agora
      null // fimVigencia começa indefinida
    );
    this.assinaturas.push(novaAssinatura);
    return novaAssinatura;
  }

  listarAssinaturas(tipo) {
    const agora = new Date();
    if (tipo === 'ATIVAS') {
      return this.assinaturas.filter(assinatura => assinatura.fimVigencia > agora);
    } else if (tipo === 'CANCELADAS') {
      return this.assinaturas.filter(assinatura => assinatura.fimVigencia <= agora);
    } else {
      return this.assinaturas;
    }
  }

  listarAssinaturasPorCliente(codCli) {
    return this.assinaturas.filter(assinatura => assinatura.codCli === parseInt(codCli));
  }

  listarAssinaturasPorAplicativo(codApp) {
    return this.assinaturas.filter(assinatura => assinatura.codApp === parseInt(codApp));
  }
}

module.exports = AssinaturaService;