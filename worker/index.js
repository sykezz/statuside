import { Router } from 'itty-router'
import { getIncidents, newIncident, systemGet, systemUpdate } from './functions.js'

const router = Router()

addEventListener('fetch', event => {
  event.respondWith(router.handle(event.request))
})

router.get('/', () => {
  new Response('Home page')
})

router.get('/system', async () => { return getSystems() })
router.post('/system', async request => {
  let data = await request.json()
  return updateSystem(data)
})
router.get('/incident', async () => { return getIncidents() })
router.post('/incident/new', async request => {
  let data = await request.json()
  return newIncident(data)
})
router.post('/incident', async request => {
  let data = await request.json()
  return updateIncident(data)
})

// 404 for everything else
router.all('*', () => new Response('Not Found.', { status: 404 }))
