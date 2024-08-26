const { Module } = require('@nestjs/common');
const UsuarioController = require('../Controllers/usuario.controller');
const UsuarioService = require('../Services/usuario.service');

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
class UsuarioModule {}

module.exports = UsuarioModule;