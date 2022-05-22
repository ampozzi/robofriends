import React from 'react';

const Sticky=(props)=>{
    return(
        <div id='sticky' style={{position: 'sticky',top:-1,zIndex:1}}>
            {props.children}
        </div>
    ) 
}

export default Sticky;