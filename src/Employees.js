import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
const Employees = () => {
    let [data, setData] = useState([])
    useEffect( ()=>{
        axios.get("employer.json")
        .then( response => setData(response.data) )
    },[] )
    return( 
        <div className="em">
            <h1>Employee Details</h1>
            <table>
            <tr>
                <th>Name</th>
                <th>Location</th>
            </tr>
            {
                data.map( (val,index) => {
                    return(
                        <tr>
                            <td className="td">{val.name}</td>
                            <td className="td">{val.loc}</td>
                        </tr>
                    )
                } )
            }
    
        </table>
        </div>
        
    )
}
export default Employees;