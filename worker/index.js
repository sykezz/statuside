import { Router } from 'itty-router'
import { CorsResponse, getIncidents, getSystems, newIncident, updateIncident, updateSystem } from './functions.js'

const router = Router()

addEventListener('fetch', event => {
  event.respondWith(router.handle(event.request))
})

router.get('/', () => {
  return CorsResponse("Hello!", 200)
})

router.get('/system', async () => { return getSystems() })
router.post('/system', async request => {
  const data = await request.json()
  return updateSystem(data)
})

router.get('/incident', async () => { return getIncidents() })
router.post('/incident/new', async request => {
  const data = await request.json()
  return newIncident(data)
})
router.post('/incident/:datestring/:id', async request => {
  const data = await request.json()
  const { params } = request
  return updateIncident(params.datestring, params.id, data)
})

// 404 for everything else
router.all('*', () => CorsResponse("Not Found.", 404))
