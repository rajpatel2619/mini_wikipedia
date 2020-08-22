import React,{useState} from 'react'
import Accordion from './Accordion'
import Search from './Search'
import Dropdown from './Dropdown'
import Translate from './Translate'


const items =[
    {
        title:"what is react?",
        content:'react a front end lib'
    },
    {
        title:"why use react?",
        content:'ui'
    },
    {
        title:" number 3 why use react?",
        content:'answer 3'
    },
]
const options =[
    {
        label:'the color red',
        value:'red',
    },
    {
        label:'the color green',
        value:'green',
    },
    {
        label:'the color blue',
        value:'blue',
    },
];



export default ()=>{
    // const [selected, setSelected] = useState(options[0]);
    // const [showDropdown,setShowDropdown]=useState(true);

    return(
        <div className="ui container">
            {/* <Accordion items={items} /> */}
            <Search />
            {/* <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            { showDropdown ?
            <Dropdown 

            onSelectedChange={setSelected}
            selected={selected} 
            options={options} />
            
            :null}
            <div style={{color:`${selected.value}`}}> i am in {selected.value} color</div> */}
            {/* <Translate /> */}
        </div>
    );
};