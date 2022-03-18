import { Router, Request, Response } from 'express'
import { register } from './../controller/auth.controller'

const router = Router()

router.post('/register', register)

export default router
