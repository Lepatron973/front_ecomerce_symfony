export const checkToken = ()=>{
    const header = new Headers();

    if( localStorage.getItem('user') == 'null')
        return false;

    header.append("Content-Type", "application/json");
    header.append("Authorization", "Bearer "+localStorage.getItem('user'));

    
    fetch(process.env.REACT_APP_SERVER_URL+'/checkToken',{
        method:"POST",
        body:"",
        mode:'cors',
        headers: header
    })
    .then(res=>{
        if(res.status == 408){
            localStorage.setItem('user',null)
        }
        
    })
 
}