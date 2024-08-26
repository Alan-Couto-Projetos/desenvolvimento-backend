
const { Controller, Post, Get, Res, HttpStatus, Injectable } = require('@nestjs/common');
const UsuarioService = require('../Services/usuario.service');

@Controller('usuarios')
@Injectable()
class UsuarioController {
  constructor() {
    this.usuarioService = new UsuarioService();
  }

  @Post('login')
  login(req, res) {
    const { usuario, senha } = req.body;

    if (!usuario || !senha) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Usuário e senha são obrigatórios' });
    }

    const usuarioAutenticado = this.usuarioService.autenticarUsuario(usuario, senha);

    if (usuarioAutenticado) {
      return res.status(HttpStatus.OK).json({ message: 'Login bem-sucedido', usuario: usuarioAutenticado });
    } else {
      return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Credenciais inválidas' });
    }
  }

  @Post()
  criarUsuario(req, res) {
    const novoUsuario = this.usuarioService.criarUsuario(req.body);
    return res.status(HttpStatus.CREATED).json(novoUsuario);
  }

  @Get()
  listarUsuarios(req, res) {
    const usuarios = this.usuarioService.listarUsuarios();
    return res.status(HttpStatus.OK).json(usuarios);
  }

  @Get(':codigo')
  buscarUsuarioPorCodigo(req, res) {
    const codigo = req.params.codigo;
    const usuario = this.usuarioService.buscarUsuarioPorCodigo(codigo);
    if (usuario) {
      return res.status(HttpStatus.OK).json(usuario);
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ message: 'Usuário não encontrado' });
    }
  }
}

module.exports = UsuarioController;