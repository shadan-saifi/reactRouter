import { useParams } from "react-router-dom";


function User() {
    const {userid}=useParams()

    return(
        <div className="w-full h-[100px] bg-violet-400 text-6xl rounded-xl text-center pt-4">
            User: {userid}
        </div>
    )
    
}
export default User