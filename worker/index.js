import { Router } from 'itty-router'
import { CorsResponse, getIncidents, getSystems, newIncident, updateIncident, updateSystem } from './functions.js'

const router = Router()

addEventListener('fetch', event => {
  event.respondWith(router.handle(event.request))
})

const requireAuth = request => {
  const auth = request.headers.get('Authorization')
  if (!auth) {
    return CorsResponse(JSON.stringify({'message': 'Unauthorized'}), 401)
  }

  if (auth != AUTH_SECRET) {
    return CorsResponse(JSON.stringify({'message': 'Unauthorized'}), 401)
  }
}

router.get('/', () => { return CorsResponse("Hello!", 200)})
router.get('/system', getSystems)
router.post('/system', requireAuth, updateSystem)
router.get('/incident', getIncidents)
router.post('/incident/new', requireAuth, newIncident)
router.post('/incident/:datestring/:id', requireAuth, updateIncident)

// 404 for everything else
router.all('*', () => CorsResponse("Not Found.", 404))
