export const authRequest = async (endpoint,data={},method="POST",headers=null)=>{

    const header = new Headers();
    if( localStorage.getItem('user') == "null")
        window.location = '/denied'

    header.append("Content-Type", "application/json");
    header.append("Authorization", "Bearer "+localStorage.getItem('user'));
    let param = {
        method:method,
        body:JSON.stringify(data),
        mode:'cors',
        headers: header,
        credentials:'include'
    }
    if(method === 'GET')
        delete(param.body)
    if(headers != null)
        header = headers;
        let response = await fetch(process.env.REACT_APP_SERVER_URL+'/'+endpoint,param)
    .then(res=>{
        if(res.status !== 200 && res.status !== 201)
            return false;
        else{
            return res.json();
        }
    })
    .then(res=>{
        if(res)
            return res
        else
            return false
    })

    return response;
}

export const publicRequest = async (endpoint,data={},method='GET',headers=null)=>{
    
    const header = new Headers();
    header.append("Content-Type", "application/json");
    header.append("Cookie", "PHPSESSID=r6sbtv34k4qdll17joi4vh97e4");
    if(headers != null)
    header = headers;
    let response = await fetch(process.env.REACT_APP_SERVER_URL+'/'+endpoint,{
        method:method,
        headers: header,
        credentials:'include'
    })
    .then(res=>{
        if(res.status !== 200){
            return false;
        }
        else{
            return res.json();
        }
    })
    .then(res=>{
        if(res)
            return res
        else{
            console.log(res.status)
            return false;
        }
    })

    return response;
}