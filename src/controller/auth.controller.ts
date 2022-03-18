import { Request, Response } from 'express'
import { Joi } from 'express-validation'

const registerValidation = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  confirm_password: Joi.string().required(),
  phone_number: Joi.string().required(),
})

export const register = (req: Request, res: Response) => {
  const body = req.body
  const { error } = registerValidation.validate(body)

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    })
  }
  res.send(body)
}
