const baseApiUrl = 'http://localhost:8000/api'
let token


let result = await fetch(baseApiUrl + '/auth/registration?name=test&email=test@example.com&password=test', {
    method: 'POST',
    headers: new Headers({
        Accept: 'application/json'
    }),
})
result = await result.json()
console.log(result)


result = await fetch(baseApiUrl + '/auth/login?email=test@example.com&password=test', {
    method: 'POST',
    headers: new Headers({
        Accept: 'application/json'
    }),
});
result = await result.json()
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
result = await result.json()
console.log(result)


result = await fetch(baseApiUrl + '/auth/login?email=test@example.com&password=test', {
    method: 'POST',
    headers: new Headers({
        Accept: 'application/json'
    }),
});
result = await result.json()
token = result.access_token
console.log(result)


result = await fetch(baseApiUrl + '/auth/me', {
    method: 'POST',
    headers: new Headers({
        Accept: 'application/json',
        Authorization: "Bearer " + token
    }),
});
result = await result.json()
console.log(result)


result = await fetch(baseApiUrl + '/studyDirections?title=frontend', {
    method: 'POST',
    headers: new Headers({
        Accept: 'application/json',
        Authorization: "Bearer " + token
    }),
});
result = await result.json()
console.log(result)


result = await fetch(baseApiUrl + '/studyDirections', {
    method: 'GET',
    headers: new Headers({
        Accept: 'application/json',
        Authorization: "Bearer " + token
    })
});
result = await result.json()
console.log(result)


result = await fetch(baseApiUrl + '/studyDirections/1', {
    method: 'GET',
    headers: new Headers({
        Accept: 'application/json',
        Authorization: "Bearer " + token
    })
});
result = await result.json()
console.log(result)


result = await fetch(baseApiUrl + '/mentors?user_id=1', {
    method: 'POST',
    headers: new Headers({
        Accept: 'application/json',
        Authorization: "Bearer " + token
    }),
});
result = await result.json()
console.log(result)


result = await fetch(baseApiUrl + '/mentors', {
    method: 'GET',
    headers: new Headers({
        Accept: 'application/json',
        Authorization: "Bearer " + token
    })
});
result = await result.json()
console.log(result)


result = await fetch(baseApiUrl + '/mentors/1', {
    method: 'GET',
    headers: new Headers({
        Accept: 'application/json',
        Authorization: "Bearer " + token
    })
});
result = await result.json()
console.log(result)


result = await fetch(baseApiUrl + '/mentors/add-study-direction?study_direction_id=1&years_experience=3', {
    method: 'POST',
    headers: new Headers({
        Accept: 'application/json',
        Authorization: "Bearer " + token
    }),
});
result = await result.json()
console.log(result)
