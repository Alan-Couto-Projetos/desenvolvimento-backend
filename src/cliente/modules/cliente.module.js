const { Module } = require('@nestjs/common');
const ClienteController = require('../controllers/cliente.controller');
const ClienteService = require('../service/cliente.service');

@Module({
  controllers: [ClienteController],
  providers: [ClienteService],
})
class ClienteModule {}

module.exports = ClienteModule;