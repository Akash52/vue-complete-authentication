import { Router, Request, Response } from 'express'
import { register, login, user } from './../controller/auth.controller'

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.get('/user', user)

export default router
