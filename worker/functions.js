export async function getSystems() {
  try {
    let data = await statuskv.get('systems')
    return CorsResponse(data, 200)
  } catch (err) {
    return CorsResponse(err, 500)
  }
}

export async function updateSystem(request) {
  const data = await request.json()
  try {
    await statuskv.put('systems', JSON.stringify(data))
    return CorsResponse("Updated!", 200)
  } catch (err) {
    return CorsResponse(err, 500)
  }
}

export async function getIncidents() {
  const date = new Date()
  let date_string = date.getUTCFullYear() + '-' + (date.getUTCMonth() + 1)
  let data = await statuskv.get('incidents:' + date_string)

  // console.log(data)
  if (!data) {
    console.log('data1 [' + date_string + ']: no data')
    data = JSON.stringify([])
  }

  if (date.getUTCDate() < 15) {
    date.setDate(0); // 0 will result in the last day of the previous month
    date_string = date.getUTCFullYear() + '-' + (date.getUTCMonth() + 1)
    console.log('data2 [' + date_string + ']: fetching')
    let data2 = await statuskv.get('incidents:' + date_string)
    // console.log(data2)
    if (data2) {
      data = [].concat(JSON.parse(data), JSON.parse(data2))
      data = JSON.stringify(data)
    } else {
      console.log('data2: no data')
    }
  }

  return CorsResponse(data, 200)
}

export async function newIncident(request) {
  const data = await request.json()
  try {
    const date_string = new Date().toISOString().slice(0, 7)
    let incidents = await statuskv.get('incidents:' + date_string)

    if (!data.date && !data.timestamp) {
      data.date = new Date().toISOString().slice(0, 10)
      data.timestamp = Math.floor(Date.now() / 1000)
    }

    data.id = Date.now().toString(36) + Math.random().toString(36).substr(2)

    if (incidents === null) {
      console.log('doesnt exist')
      incidents = [].concat(data)
      console.log(JSON.stringify(incidents))
    } else {
      console.log('exist')
      incidents = JSON.parse(incidents)
      incidents = [].concat(incidents, data)
    }

    await statuskv.put('incidents:' + date_string, JSON.stringify(incidents))
    return CorsResponse("Created!", 200)
  } catch (err) {
    return CorsResponse(err, 500)
  }
}

export async function updateIncident(request) {
  const data = await request.json()
  const { params } = request
  const date_string = params.datestring
  const id = params.id
  try {
    let incidents = await statuskv.get('incidents:' + date_string)

    if (incidents === null) {
      return CorsResponse("Incident not found!", 404)
    }

    incidents = JSON.parse(incidents)
    const index = incidents.findIndex((j) => j.id === id);

    if (index !== -1) {
      incidents[index] = data
      incidents = JSON.stringify(incidents)
      await statuskv.put('incidents:' + date_string, incidents)
      return CorsResponse(incidents, 200)
    } else {
      return CorsResponse("Incident not found!", 404)
    }
  } catch (err) {
    return CorsResponse(err, 500)
  }
}

export async function recentIncidents() {
  const date_string = new Date().toISOString().slice(0, 7)
  let data = await statuskv.get('incidents:' + date_string)
  if (!data) {
    console.log('no data')
    data = []
  }
  return CorsResponse(data, 200)
}

// async function updateCounter()
// {
//   let count = await statuskv.get('count')
//   count = ++count
//   await statuskv.put('count', count)
//   return count
// }

export function CorsResponse(data, status) {
  return new Response(data, {
    status: status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
      'content-type': 'application/json'
    }
  })
}