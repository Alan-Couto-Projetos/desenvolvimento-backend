const Aplicativo = require('../entidade/aplicativo.entidade');

class AplicativoService {
  constructor() {
    this.aplicativos = [];
  }

  criarAplicativo(aplicativoDto) {
    const novoAplicativo = new Aplicativo(
      this.aplicativos.length + 1,
      aplicativoDto.nome,
      aplicativoDto.custoMensal
    );
    this.aplicativos.push(novoAplicativo);
    return novoAplicativo;
  }

  listarAplicativos() {
    return this.aplicativos;
  }

  buscarAplicativoPorCodigo(codigo) {
    return this.aplicativos.find(aplicativo => aplicativo.codigo === parseInt(codigo));
  }

  atualizarCustoMensal(codigo, novoCusto) {
    const aplicativo = this.buscarAplicativoPorCodigo(codigo);
    if (aplicativo) {
      aplicativo.custoMensal = novoCusto;
      return aplicativo;
    }
    return null;
  }
}

module.exports = AplicativoService;