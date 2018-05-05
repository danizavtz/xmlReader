
(function() {

    'use strict';

    const express = require('express');
    const router = express.Router();

    router.use(require('./controllers/controller'));

    module.exports = router;


}());
