import { useEffect } from "react";

export default function NotFound()  {
    useEffect(()=>{
        document.title ="Not Found- lifeCook";
    }, []);
  {
    return (
        <div className="ms-auth max-w-screen-lg"> 
            <p className="text-center">
                <h3>Not Found!</h3>
            </p> 
        </div>
    );
  }
}