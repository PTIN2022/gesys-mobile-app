const BASE_URL = "http://craaxkvm.epsevg.upc.es"
const EST_PORT = "23601"
const RSV_PORT = "23701"

export const apiFetchEstaciones =  (latitude, longitude) => {
    let url = `${BASE_URL}:${RSV_PORT}/api/estaciones/coor/${latitude}/${longitude}`
    console.log(url)
    return fetch(url).then(res => Promise.all([res, res.json()]))
}

export const apiFetchReservas = () => {
    let url = `${BASE_URL}:${RSV_PORT}/reservas`
    return fetch(url).then(res => Promise.all([res, res.json()]))
}

export const apifetchVehicles = (token, cliente_id) => {
    let url = `${BASE_URL}:${RSV_PORT}/api/vehiculos/cliente/${cliente_id}`
    return fetch(url, {
        method: 'GET',
        headers: {
            'x-access-tokens': token
        }
    }).then(res => Promise.all([res, res.json()]))
}

export const apiFetchEstacionById = id => {
    let url = `${BASE_URL}:${EST_PORT}/api/estaciones/${id}`
    return fetch(url).then(res => Promise.all([res, res.json()]))
}

export const apiFetchReservaById = id => {
    let url = `${BASE_URL}:${RSV_PORT}/reservas/${id}`
    return fetch(url).then(res => Promise.all([res, res.json()]))
}

export const apiFetchReservaByEstacion = id => {
    let url = `${BASE_URL}:${RSV_PORT}/reservas/estacion/${id}`
    return fetch(url).then(res => Promise.all([res, res.json()]))
}

export const apiFetchReservaByDNI = id => {
    let url = `${BASE_URL}:${RSV_PORT}/reservas/bydni/${id}`
    return fetch(url).then(res => Promise.all([res, res.json()]))
}

export const apiFetchReservaByMatricula = id => {
    let url = `${BASE_URL}:${RSV_PORT}/reservas/bymatricula/${id}`
    return fetch(url).then(res => Promise.all([res, res.json()]))
}


export const apiFetchTransacciones =  (latitude, longitude) => {
    
}

export const apiPostReserva = (data, token) => {
    let url = `${BASE_URL}:${RSV_PORT}/reservas`
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-access-tokens': token
        },
        body: JSON.stringify(data)
    }).then(res => Promise.all([res, res.json()]))
}

export const apiLogin = (data) => {
    let url = `${BASE_URL}:${RSV_PORT}/api/login`
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(res => Promise.all([res, res.json()]))
}

export const apiAddVehicle = (data) => {
    let url = `${BASE_URL}:${RSV_PORT}/vehicles`
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // Header of token?
        },
        body: JSON.stringify(data)
    }).then(res => Promise.all([res, res.json()]))
}
