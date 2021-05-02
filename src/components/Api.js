export default class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
        this.delete = this.delete.bind(this);
    }

    _getResponseData(res) {
        return res.ok
        ? res.json()
        : Promise.reject(`Ошибка: ${res.status}`)
    }

    getAllCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers
        }).then(res => this._getResponseData(res))
    }

    addNewCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: `${data.name}`,
                link: `${data.link}`
            })
        }).then(res => this._getResponseData(res))
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers
        }).then(res => this._getResponseData(res))
    }

    editUserInfo(userData) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: `${userData.name}`,
                about: `${userData.about}`
            })
        }).then(res => this._getResponseData(res))
    }

    editAvatar(link) {
        return fetch(`${this._url}/users/me/avatar`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            avatar: link
          })
        }).then(res => this._getResponseData(res))
    }

    like(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`, {
          method: 'PUT',
          headers: this._headers
        }).then(res => this._getResponseData(res))
    }

    dislike(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`, {
          method: 'DELETE',
          headers: this._headers
        }).then(res => this._getResponseData(res))
    }

    delete(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
          method: 'DELETE',
          headers: this._headers
        }).then(res => this._getResponseData(res))
    }
}