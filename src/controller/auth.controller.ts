import { Request, Response } from 'express'
import { Joi } from 'express-validation'
import { UserModel } from '../models/user-model'
import bcryptjs from 'bcryptjs'

const registerValidation = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  confirm_password: Joi.string().required(),
})

export const register = async (req: Request, res: Response) => {
  const body = req.body
  const { error } = registerValidation.validate(body)

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    })
  }

  if (body.password !== body.confirm_password) {
    return res.status(400).json({
      success: false,
      message: 'Passwords do not match',
    })
  }

  const salt = await bcryptjs.genSalt(10)
  const hashedPassword = await bcryptjs.hash(body.password, salt)

  const user = new UserModel({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    password: hashedPassword,
  })
  const savedUser = await user.save()

  const { password, ...data } = await savedUser.toJSON()

  res.send(data)
}

export const login = async (req: Request, res: Response) => {
  const body = req.body

  const user = await UserModel.findOne({ email: body.email })

  if (!user) {
    return res.status(400).json({
      success: false,
      message: 'User not found',
    })
  }

  const isMatch = await bcryptjs.compare(body.password, user.password)

  if (!isMatch) {
    return res.status(400).json({
      success: false,
      message: 'Incorrect password',
    })
  }

  const { password, ...data } = await user.toJSON()

  res.send(data)
}
