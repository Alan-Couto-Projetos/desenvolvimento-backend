const { Controller, Post, Get, Res, HttpStatus } = require('@nestjs/common');
const AssinaturaService = require('../Services/assinatura.service');

@Controller('assinaturas')
class AssinaturaController {
  constructor() {
    this.assinaturaService = new AssinaturaService();
  }

  criarAssinatura(req, res) {
    try {
      const novaAssinatura = this.assinaturaService.criarAssinatura(req.body);
      return res.status(HttpStatus.CREATED).json(novaAssinatura);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao criar assinatura', error });
    }
  }

  listarAssinaturas(req, res) {
    try {
      const { tipo } = req.params;
      const assinaturas = this.assinaturaService.listarAssinaturas(tipo);
      return res.status(HttpStatus.OK).json(assinaturas);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao listar assinaturas', error });
    }
  }

  listarAssinaturasPorCliente(req, res) {
    try {
      const { codCli } = req.params;
      const assinaturas = this.assinaturaService.listarAssinaturasPorCliente(codCli);
      return res.status(HttpStatus.OK).json(assinaturas);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao listar assinaturas por cliente', error });
    }
  }

  listarAssinaturasPorAplicativo(req, res) {
    try {
      const { codApp } = req.params;
      const assinaturas = this.assinaturaService.listarAssinaturasPorAplicativo(codApp);
      return res.status(HttpStatus.OK).json(assinaturas);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao listar assinaturas por aplicativo', error });
    }
  }
}

module.exports = AssinaturaController;