import { Router, Request, Response } from 'express'
import { register, login, user, logout } from './../controller/auth.controller'

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.get('/user', user)
router.post('/logout', logout)

export default router
