(function() {
    'use strict';
    exports.validateRequest = (req, res, next) => {
        req.checkBody('quantity', 'quantity is required').notEmpty();
        req.getValidationResult().then((result) => {
            if (!result.isEmpty()) {
                return res.status(400).json({ errors: result.array() });
            }
            return next();
        });
    };
}());