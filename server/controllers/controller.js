(function() {
  'use strict';

  const express = require('express');
  const router = express.Router();
  const service = require('../services/service');
  const validator = require('../validators/validate')

  router.get('/data', validator.validateRequest, service.lookUpData, service.logData);

  module.exports = router;
}());