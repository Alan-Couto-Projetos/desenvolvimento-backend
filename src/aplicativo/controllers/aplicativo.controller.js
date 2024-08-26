const { Controller, Post, Get, Patch, Res, HttpStatus } = require('@nestjs/common');
const AplicativoService = require('../service/aplicativo.service');

@Controller('aplicativos')
class AplicativoController {
  constructor() {
    this.aplicativoService = new AplicativoService();
  }

  criarAplicativo(req, res) {
    try {
      const novoAplicativo = this.aplicativoService.criarAplicativo(req.body);
      return res.status(HttpStatus.CREATED).json(novoAplicativo);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao criar aplicativo' });
    }
  }

  listarAplicativos(req, res) {
    try {
      const aplicativos = this.aplicativoService.listarAplicativos();
      return res.status(HttpStatus.OK).json(aplicativos);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao listar aplicativos' });
    }
  }

  buscarAplicativoPorCodigo(req, res) {
    try {
      const { codigo } = req.params;
      const aplicativo = this.aplicativoService.buscarAplicativoPorCodigo(codigo);
      if (aplicativo) {
        return res.status(HttpStatus.OK).json(aplicativo);
      } else {
        return res.status(HttpStatus.NOT_FOUND).json({ message: 'Aplicativo não encontrado' });
      }
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao buscar aplicativo' });
    }
  }

  atualizarCustoMensal(req, res) {
    try {
      const { codigo } = req.params;
      const { custoMensal } = req.body;
      const aplicativoAtualizado = this.aplicativoService.atualizarCustoMensal(codigo, custoMensal);
      if (aplicativoAtualizado) {
        return res.status(HttpStatus.OK).json(aplicativoAtualizado);
      } else {
        return res.status(HttpStatus.NOT_FOUND).json({ message: 'Aplicativo não encontrado' });
      }
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao atualizar custo mensal' });
    }
  }
}

module.exports = AplicativoController;