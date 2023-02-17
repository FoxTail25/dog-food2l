const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

class Api {
    constructor(t) {
        this.path = 'https://api.react-learning.ru';
        this.token = t;
    }

    getProducts() {
        return fetch(`${this.path}/products`, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        .then(onResponce)
    }

    getOneProduct(productId) {
        return fetch(`${this.path}/products/${productId}`, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        .then(onResponce)

    }

    addProduct(product) {
        return fetch(`${this.path}/products`, {
            metod: 'POST',
            body: JSON.stringify(product),
            headers: {
                "Authorization": `Bearer ${this.token}`,
            },
        })
        .then(onResponce)
    }

    updProduct(productId, data ) {
        return fetch(`${this.path}/products/${productId}`, {
            metod: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                "Authorization": `Bearer ${this.token}`,
            },
        })
        .then(onResponce)

    }

    delProduct(productId) {
        return fetch(`${this.path}/products/${productId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        }).then(onResponce)
    }

    changeLikeProd(prodId, islike) {
        return fetch(`${this.path}/products/likes/${prodId}`, {
            method: islike ? "DELETE" : "PUT",
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        }).then(onResponce)
            .catch((err) => { console.log(`ошибка ${err}`) })
    }
    

    logIn(user) {
        return fetch('https://api.react-learning.ru/signin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify(user),
        }).then(onResponce)
    }

    signUP(user) {
        return fetch('https://api.react-learning.ru/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user),
        }).then(onResponce)
    }
    userInfo() {
        return fetch(`${this.path}/v2/group-7/users/me`, {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        }).then(onResponce)
    }
}

export default Api;



