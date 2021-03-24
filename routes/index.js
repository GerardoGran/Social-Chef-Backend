import { Router } from 'express'

import { postCook } from '../controllers/cookController'

const router = Router()

router.post('/cooks', postCook)

export default cookRouter