import { useRouteError } from "react-router-dom"

const  Error=()=>{
    const err=useRouteError();    
    console.log(err);
    return(
        <>
        <h1>Oops !!</h1>
        <h4>Something went wrong, please try again</h4>
        <h6>{err.status} : {err.statusText}</h6>
        </>
    )
}

export default Error;