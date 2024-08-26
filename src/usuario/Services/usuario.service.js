const Usuario = require('../entidade/usuario.entidade');
const { Injectable } = require('@nestjs/common');

@Injectable()
class UsuarioService {
  constructor() {
    this.usuarios = [
      new Usuario(1, 'admin', 'admin123'), // Usuário administrador padrão
    ];
  }

  criarUsuario(usuarioDto) {
    const novoUsuario = new Usuario(
      this.usuarios.length + 1,
      usuarioDto.usuario,
      usuarioDto.senha
    );
    this.usuarios.push(novoUsuario);
    return novoUsuario;
  }

  listarUsuarios() {
    return this.usuarios;
  }

  buscarUsuarioPorCodigo(codigo) {
    return this.usuarios.find(usuario => usuario.codigo === parseInt(codigo));
  }

  autenticarUsuario(usuario, senha) {
    return this.usuarios.find(
      (u) => u.getUsuario() === usuario && u.getSenha() === senha
    );
  }
}

module.exports = UsuarioService;