import React from 'react';

const Sticky=(props)=>{
    return(
        <div id={props.id} style={{position: 'sticky',top:-1,zIndex:1}}>
            {props.children}
        </div>
    ) 
}

export default Sticky;