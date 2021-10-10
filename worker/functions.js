export async function getSystems() {
  try {
    let data = await statuspage.get('systems')
    return new Response(data, { status: 200 })
  } catch (err) {
    return new Response(err, { status: 500 })
  }
}

export async function updateSystem(data) {
  try {
    await statuspage.put('systems', JSON.stringify(data))
    return new Response("Updated!", { status: 200 })
  } catch (err) {
    return new Response(err, { status: 500 })
  }
}

export async function getIncidents() {
  const date_string = new Date().toISOString().slice(0, 7)
  let data = await statuspage.get('incidents:' + date_string)
  if (!data) {
    console.log('no data')
    data = []
  }
  return new Response(data, { status: 200 })
}

export async function newIncident(data) {
  try {
    const date_string = new Date().toISOString().slice(0, 7)
    data.timestamp = Date.now()
    let incidents = await statuspage.get('incidents:' + date_string)

    if (incidents === null) {
      console.log('doesnt exist')
      incidents = [].concat(data)
      console.log(JSON.stringify(incidents))
    } else {
      console.log('exist')
      incidents = JSON.parse(incidents)
      incidents = [].concat(incidents, data)

    }

    await statuspage.put('incidents:' + date_string, JSON.stringify(incidents))
    // const counter = await updateCounter()
    return new Response("Created!", { status: 200 })
  } catch (err) {
    return new Response(err, { status: 500 })
  }
}

export async function updateIncident(data) {
  try {
    const date_string = data.date_string
    const id = data.id
    let incidents = await statuspage.get('incidents:' + date_string)
    const index = json.findIndex(j => j.id === id)

    if (index) {
      incidents[index] = data
      return new Response("Updated!", { status: 200 })
    } else {
      return new Response("Incident not found!", { status: 404 })
    }
  } catch (err) {
    return new Response(err, { status: 500 })
  }
}

export async function recentIncidents() {
  const date_string = new Date().toISOString().slice(0, 7)
  let data = await statuspage.get('incidents:' + date_string)
  if (!data) {
    console.log('no data')
    data = []
  }
  return new Response(data, { status: 200 })
}

// async function updateCounter()
// {
//   let count = await statuspage.get('count')
//   count = ++count
//   await statuspage.put('count', count)
//   return count
// }