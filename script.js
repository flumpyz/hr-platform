const baseApiUrl = 'http://localhost:8000/api'
let token


let result = await fetch(baseApiUrl + '/auth/registration?name=test7&email=test7@example.com&password=test', {
    method: 'POST',
    headers: new Headers({
        Accept: 'application/json'
    }),
})
result = result.json()
console.log(result)


result = await fetch(baseApiUrl + '/auth/login', {
    method: 'POST',
    headers: new Headers({
        Accept: 'application/json'
    }),
    body: JSON.stringify({
        email: 'test7@example.com',
        password: 'test'
    })
});
console.log(result)
result = result.json()
token = result.access_token
console.log(result)

if (!token) {
    console.log('Token is null')
}


result = await fetch(baseApiUrl + '/auth/logout', {
    method: 'POST',
    headers: new Headers({
        Accept: 'application/json',
        Authorization: "Bearer " + token
    })
});
result = result.json()
console.log(result)


result = await fetch(baseApiUrl + '/auth/login', {
    method: 'POST',
    headers: new Headers({
        Accept: 'application/json'
    }),
    body: JSON.stringify({
        email: 'test@example.com',
        password: 'test'
    })
});
result = result.json()
token = result.access_token
console.log(result)


result = await fetch(baseApiUrl + '/auth/me', {
    method: 'POST',
    headers: new Headers({
        Accept: 'application/json'
    }),
});
result = result.json()
console.log(result)


result = await fetch(baseApiUrl + '/studyDirections', {
    method: 'POST',
    headers: new Headers({
        Accept: 'application/json',
        Authorization: "Bearer " + token
    }),
    body: JSON.stringify({
        title: 'frontend',
    })
});
result = result.json()
console.log(result)


result = await fetch(baseApiUrl + '/studyDirections', {
    method: 'GET',
    headers: new Headers({
        Accept: 'application/json',
        Authorization: "Bearer " + token
    })
});
result = result.json()
console.log(result)


result = await fetch(baseApiUrl + '/studyDirections/1', {
    method: 'GET',
    headers: new Headers({
        Accept: 'application/json',
        Authorization: "Bearer " + token
    })
});
result = result.json()
console.log(result)


result = await fetch(baseApiUrl + '/mentors', {
    method: 'POST',
    headers: new Headers({
        Accept: 'application/json',
        Authorization: "Bearer " + token
    }),
    body: JSON.stringify({
        user_id: 1,
    })
});
result = result.json()
console.log(result)


result = await fetch(baseApiUrl + '/mentors', {
    method: 'GET',
    headers: new Headers({
        Accept: 'application/json',
        Authorization: "Bearer " + token
    })
});
result = result.json()
console.log(result)


result = await fetch(baseApiUrl + '/mentors/1', {
    method: 'GET',
    headers: new Headers({
        Accept: 'application/json',
        Authorization: "Bearer " + token
    })
});
result = result.json()
console.log(result)


result = await fetch(baseApiUrl + '/mentors/add-study-direction', {
    method: 'POST',
    headers: new Headers({
        Accept: 'application/json',
        Authorization: "Bearer " + token
    }),
    body: JSON.stringify({
        study_direction_id: 1,
        years_experience: 3,
    })
});
result = result.json()
console.log(result)
