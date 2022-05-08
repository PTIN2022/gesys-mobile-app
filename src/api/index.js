const BASE_URL = "http://craaxkvm.epsevg.upc.es"
const EST_PORT = "23601"
const RSV_PORT = "23701"

export const apiFetchEstaciones =  () => {
    let url = `${BASE_URL}:${EST_PORT}/api/estaciones`
    console.log(url)
    return fetch(url).then(res => Promise.all([res, res.json()]))
}

export const apiFetchReservas = () => {
    let url = `${BASE_URL}:${RSV_PORT}/reservas`
    console.log(url)
    return fetch(url).then(res => Promise.all([res, res.json()]))
}

export const apiFetchEstacionById = id => {
    let url = `${BASE_URL}:${EST_PORT}/api/estaciones/${id}`
    console.log(url)
    return fetch(url).then(res => Promise.all([res, res.json()]))
}

export const apiFetchReservaById = id => {
    let url = `${BASE_URL}:${RSV_PORT}/reservas/${id}`
    console.log(url)
    return fetch(url).then(res => Promise.all([res, res.json()]))
}

export const apiFetchReservaByEstacion = id => {
    let url = `${BASE_URL}:${RSV_PORT}/reservas/estacion/${id}`
    console.log(url)
    return fetch(url).then(res => Promise.all([res, res.json()]))
}

export const apiFetchReservaByDNI = id => {
    let url = `${BASE_URL}:${RSV_PORT}/reservas/bydni/${id}`
    console.log(url)
    return fetch(url).then(res => Promise.all([res, res.json()]))
}

export const apiFetchReservaByMatricula = id => {
    let url = `${BASE_URL}:${RSV_PORT}/reservas/bymatricula/${id}`
    console.log(url)
    return fetch(url).then(res => Promise.all([res, res.json()]))
}