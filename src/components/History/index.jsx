import React ,{useState} from "react";

function History(props) {
    const [hide, setHide] = useState(false);
    console.log(props.historyData)  
    return (
        <>
            

            <button onClick={() => setHide(!hide)}>
                {!hide && 'Show History'}
                {hide && 'Hide History'}
            </button >
            <ul>
            {hide && props.historyData.map((api,idx)=>{
               return(
                   <li key={idx}>{api}</li>
                   )
                })
       
        }
        </ul>
        </>
    )
}
export default History