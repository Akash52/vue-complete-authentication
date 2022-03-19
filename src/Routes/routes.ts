import { Router, Request, Response } from 'express'
import { register, login } from './../controller/auth.controller'

const router = Router()

router.post('/register', register)
router.post('/login', login)

export default router
