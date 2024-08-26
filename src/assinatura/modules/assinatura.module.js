const { Module } = require('@nestjs/common');
const AssinaturaController = require('../../assinatura/controllers/assinatura.controller');
const AssinaturaService = require('../Services/assinatura.service');

@Module({
  controllers: [AssinaturaController],
  providers: [AssinaturaService],
})
class AssinaturaModule {}

module.exports = AssinaturaModule;