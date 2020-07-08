const router = require('express').Router()
const User = require('../models/User')
const validateRegisterInput = require('../validation/register')

router.route('/register')
      .get((req, res) => {
            const { isValid, errors } = validateRegisterInput(req.body)

            if(!isValid) {
                  return res.status(404).json(erros)
            }
            
            return res.send('Ok!')
})

module.exports = router