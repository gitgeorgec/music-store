const tokenURL = 'https://secret-plateau-59047.herokuapp.com/access_token'

export async function getToken(){
    return fetch(tokenURL)
    .then(res => {
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
        if(!res.ok) {
            if(res.status >=400 && res.status <500){
                return res.json().then(data=>{
                    let err ={errorMessage: data.error.message}
                    throw err
                })
            }else {
                let err = {errorMessage: 'Please try again later, server is not responsed'}
                throw err
            }
        }
        return res.json()
    })
    .then(res=>{
        console.log(res)
        return res
    })
    .catch(err=>console.log(err))
}