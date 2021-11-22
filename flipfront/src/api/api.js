const Api = {
    apiUrl: 'http://localhost:3000/anuncios',
    fetchGetAll: () => fetch(Api.apiUrl),
    fetchGetById: id => fetch(`${Api.apiUrl}/${id}`),
    fecthPost: (anuncios) => {
        return fetch(`${Api.apiUrl}/add`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(anuncios)
        })
    },
    fecthPut: (anuncios, id) => {
        return fetch(`${Api.apiUrl}/${id}`, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(anuncios)
        })
    },
    fetchDelete: (id) => {
        return fetch(`${Api.apiUrl}/${id}`, {
            method: 'DELETE',
        })
    }
}
export default Api;