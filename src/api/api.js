function errorHandle(res){
    if(!res.ok) {
        if(res.status >=400 && res.status <500){
            return res.json().then(err=>{
                throw err
            })
        }else {
            let err = {errorMessage: 'Please try again later, server is not responsed'}
            throw err
        }
    }
}

export async function getToken(){
    const tokenURL = 'https://secret-plateau-59047.herokuapp.com/access_token'
    return fetch(tokenURL)
    .then(res => {
        errorHandle(res)
        return res.json()
    })
    .then(res=>res.access_token)
    .catch(err=>console.log(err))
}

export async function getData(searchURL,token){
    return fetch(searchURL,{
        method:'GET',
        headers: new Headers({
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        })
    })
    .then(res => {
        errorHandle(res)
        return res.json()
    })
    .then(res=>{
        console.log(res)
        return res
    })
    .catch(err=>console.log(err))
}

export async function getAuth(url,username,email,password){
    return fetch(url,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
        username, 
        email,
        password
        })
    })
    .then(res => {
        errorHandle(res)
        return res.json()
    })
    .then(res=>{
        console.log(res)
        return res
    })
    .catch(err=>console.log(err))
}

export async function checkAuth(userId, token){
    const url="http://localhost:8081/test/" +userId
    return fetch(url,{
        headers:{
            "authorization":`Bearer ${token}`
        }
    })
    .then(res => {
        errorHandle(res)
        return res.json()
    })
    .then(res=>{
        console.log(res)
        return res.auth==="success"?true:false
    })
    .catch(err=>console.log(err))
}
// http://localhost:8081/