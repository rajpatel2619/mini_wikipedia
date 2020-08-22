import React,{useState,useEffect} from 'react'
import axios from 'axios';
const Search =()=>{
    const [term,setTerm] = useState("");
    const [results,setResult] = useState([]);
    console.log(results);
    useEffect(()=>{
        const search = async ()=>{
           const {data} = await axios.get("https://en.wikipedia.org/w/api.php",{
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:term || "programming",
                }
            })
            
            setResult(data.query.search);
            
        }

        if(!results.length){
            search();
        }
        else{

            
                   const timeoutId =  setTimeout(()=>{
                        search();
            
                    },400);
            
                    return()=>{
                        clearTimeout(timeoutId);
                    };
        }

    },[term,results.length]);
    
    const renderedresults = results.map((result)=>{
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                    className="ui button"
                    target="__blank"
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                       Read More >>
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <div className="description">
                        <span dangerouslySetInnerHTML={{__html:result.snippet}}>
                        </span>
                      
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div className="ui container">
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Input</label>
                    <input 
                    placeholder="Search for a keyword ex: programming"
                    onChange={(e)=>setTerm(e.target.value)}
                    value={term}
                    className="input" />
                </div>
            </div>
            <div className="ui called list">
                {renderedresults}
            </div>

        </div>
    )
}
export default Search;