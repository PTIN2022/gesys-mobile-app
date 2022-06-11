const BASE_URL = "http://craaxkvm.epsevg.upc.es"
const EST_PORT = "23601"
const RSV_PORT = "23701"

export const apiFetchEstaciones =  (latitude, longitude) => {
    let url = `${BASE_URL}:${RSV_PORT}/api/estaciones`
    console.log(url, "http://craaxkvm.epsevg.upc.es:23701/api/estaciones/coor/1/1")
    return fetch(url).then(res => Promise.all([res, res.json()]))
}

export const apiFetchReservas = () => {
    let url = `${BASE_URL}:${RSV_PORT}/reservas`
    return fetch(url).then(res => Promise.all([res, res.json()]))
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

export const apiPostReserva = data => {
    let url = `${BASE_URL}:${RSV_PORT}/reservas`
    console.log(url)
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => Promise.all([res, res.json()]))
}

export const apiLogin = (data) => {
    let url = `https://reqres.in/api/login`
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(res => Promise.all([res, res.json()]))
}
