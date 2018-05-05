(function() {
    'use strict';
    exports.validateRequest = (req, res, next) => {
        req.checkBody('quantity', 'quantity is required').notEmpty();
        req.checkBody('quantity', 'quantity should be greater than 0').isInt({min: 0});
        req.getValidationResult().then((result) => {
            if (!result.isEmpty()) {
                return res.status(400).json({ errors: result.array() });
            }
            return next();
        });
    };
}());