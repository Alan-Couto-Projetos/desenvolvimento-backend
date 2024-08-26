const Usuario = require('../interfaces/usuario.interface');

class UsuarioService extends Usuario {
    constructor() {
        super();
        this.usuario = 'usuario';
        this.senha = '1234';
    }

    login(usuario, senha) {
        return usuario === this.usuario && senha === this.senha;
    }
}

module.exports = UsuarioService;