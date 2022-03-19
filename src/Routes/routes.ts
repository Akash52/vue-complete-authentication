import { Router } from 'express'
import { register, login, user, logout } from './../controller/auth.controller'
import { forgot } from './../controller/forgot.controller'

const router = Router()

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/user').get(user)
router.route('/logout').get(logout)
router.route('/forgot').post(forgot)

export default router
