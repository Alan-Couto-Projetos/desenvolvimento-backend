const Cliente = require('../entidade/cliente.entidade');

class ClienteService {
  constructor() {
    this.clientes = [];
  }

  criarCliente(clienteDto) {
    const novoCliente = new Cliente(
      this.clientes.length + 1,
      clienteDto.nome,
      clienteDto.email
    );
    this.clientes.push(novoCliente);
    return novoCliente;
  }

  listarClientes() {
    return this.clientes;
  }

  buscarClientePorCodigo(codigo) {
    return this.clientes.find(cliente => cliente.codigo === parseInt(codigo));
  }
}

module.exports = ClienteService;