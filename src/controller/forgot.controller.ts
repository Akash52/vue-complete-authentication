import { Request, Response } from 'express'
import { ResetModel } from '../models/reset.model'

export const forgot = async (req: Request, res: Response) => {
  const body = req.body
  const token = Math.random().toString(36).substring(2, 15)

  if (!body.email) {
    return res.status(400).json({
      success: false,
      message: 'Email is required',
    })
  }

  const reset = new ResetModel({
    email: body.email,
    token,
  })
  const savedReset = await reset.save()

  res.send({
    success: true,
    message: 'Reset email sent',
  })
}
