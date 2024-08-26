const { Module } = require('@nestjs/common');
const ClienteModule = require('./cliente/modules/cliente.module');
const AplicativoModule = require('./aplicativo/modules/aplicativo.module');
const AssinaturaModule = require('./assinatura/modules/assinatura.module');
const UsuarioModule = require('./usuario/Modules/usuario.module');
const PagamentoModule = require('./pagamento/Modules/pagamento.module');

@Module({
  imports: [ClienteModule, AplicativoModule, AssinaturaModule, UsuarioModule, PagamentoModule],
})
class AppModule {}

module.exports = AppModule;