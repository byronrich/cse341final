const Validator = require('validatorjs');

const saveAuthor = (req, res, next) => {
    const validationRule = {
        name: 'required|string|min:2|max:100',
        biography: 'string',
        nationality: 'required|string|min:2|max:50'
    };

    const validation = new Validator(req.body, validationRule);

    validation.passes(() => {
        next();
    });

    validation.fails(() => {
        res.status(400).json({
            success: false,
            errors: validation.errors.all()
        });
    });
};

module.exports = {
    saveAuthor
};