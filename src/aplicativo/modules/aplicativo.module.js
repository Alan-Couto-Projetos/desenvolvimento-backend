const { Module } = require('@nestjs/common');
const AplicativoController = require('../controllers/aplicativo.controller');
const AplicativoService = require('../service/aplicativo.service');

@Module({
  controllers: [AplicativoController],
  providers: [AplicativoService],
})
class AplicativoModule {}

module.exports = AplicativoModule;