const { Controller, Post, Body } = require('@nestjs/common');
const UsuarioService = require('../services/usuario.service');

@Controller('auth')
class UsuarioController {
    constructor() {
        this.usuarioService = new UsuarioService();
    }

    @Post('login')
    async login(@Body() body) {
        const { usuario, senha } = body;
        const isAuthenticated = this.usuarioService.login(usuario, senha);
        if (isAuthenticated) {
            return { message: 'Login bem-sucedido' };
        } else {
            return { message: 'Credenciais inválidas' };
        }
    }
}

module.exports = UsuarioController;