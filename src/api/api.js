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

export async function getAuth(sign,username,email,password){
    const url = 'https://secret-plateau-59047.herokuapp.com/api/auth/'+sign
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
    const url="https://secret-plateau-59047.herokuapp.com/test/" +userId
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

export async function getUser(){
    return fetch("http://localhost:8081/api/user/"+localStorage.id,{
      headers: {
          "Content-Type": "text/plain",
          "authorization":`Bearer ${localStorage.jwtToken}`
        }
      })
      .then(res=>res.json())
      .catch(err=>console.log(err))
  }

export async function makeOrder(token,order){
    return fetch("https://secret-plateau-59047.herokuapp.com/api/charge/"+localStorage.id, {
      method: "POST",
      headers: {
          "Content-Type": "text/plain",
          "authorization":`Bearer ${localStorage.jwtToken}`
        },
      body: JSON.stringify({token,...order})
    })
}
// http://localhost:8081/