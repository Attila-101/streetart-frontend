import React,{useEffect,useState} from "react"
 function ErrorHandler(props) {
     const {errorHandler} = props;
     
const  errorPrint=(err) => {
    
   if(err.hasError) {if(err.message.data) {
       return (err.message.data.email + '      ' +  err.message.data.username+ '     ' +  err.message.data.password)
    }else{
        return err.message
    }}
}

    const [show,setShow] = useState(false)

    useEffect(()=>{
        setShow(false);
        if(errorHandler.hasError) {
            setShow(true);
        }
    },[errorHandler])

    return(
<div>
    {/* {console.log(errorPrint(errorHandler))}
    {errorHandler.hasError?(errorHandler.message.data?console.log(errorHandler.message.data):console.log(errorHandler.message)):""} */}
{show? (
     <div className="error">
         <p>{errorPrint(errorHandler)}</p>
         {/* <p>{errorHandler.hasError?(errorHandler.message.data?"":errorHandler.message):""}</p> */}
     </div>
     
     ):("")
}

</div>

    );
}

export default ErrorHandler