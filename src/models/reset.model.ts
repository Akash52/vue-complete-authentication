import { Schema, model } from 'mongoose'

export interface Reset {
  email: string
  token: string
}

const resetSchema = new Schema<Reset>({
  email: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    unique: true,
    required: true,
  },
})

export const ResetModel = model<Reset>('Reset', resetSchema)
