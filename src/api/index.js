const BASE_URL = "http://craaxkvm.epsevg.upc.es"
const EST_PORT = "23601"
const RSV_PORT = "23701"

export const apiFetchEstaciones =  () => {
    let url = `${BASE_URL}:${EST_PORT}/api/estaciones`
    console.log(url)
    return fetch(url).then(res => Promise.all([res, res.json()]))
}

export const apiFetchEstacionById = id => {
    let url = `${BASE_URL}:${EST_PORT}/api/estaciones/${id}`
    console.log(url)
    return fetch(url).then(res => Promise.all([res, res.json()]))
}