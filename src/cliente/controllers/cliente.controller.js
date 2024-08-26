const { Controller, Post, Get, Res, HttpStatus } = require('@nestjs/common');
const ClienteService = require('../service/cliente.service');

@Controller('clientes')
class ClienteController {
  constructor() {
    this.clienteService = new ClienteService();
  }

  criarCliente(req, res) {
    try {
      const novoCliente = this.clienteService.criarCliente(req.body);
      return res.status(HttpStatus.CREATED).json(novoCliente);
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao criar cliente', error });
    }
  }

  listarClientes(req, res) {
    try {
      const clientes = this.clienteService.listarClientes();
      return res.status(HttpStatus.OK).json(clientes);
    } catch (error) {
      console.error('Erro ao listar clientes:', error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao listar clientes', error });
    }
  }

  buscarClientePorCodigo(req, res) {
    try {
      const { codigo } = req.params;
      const cliente = this.clienteService.buscarClientePorCodigo(codigo);
      if (cliente) {
        return res.status(HttpStatus.OK).json(cliente);
      } else {
        return res.status(HttpStatus.NOT_FOUND).json({ message: 'Cliente não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao buscar cliente por código:', error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao buscar cliente', error });
    }
  }
}

module.exports = ClienteController;