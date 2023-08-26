import React from 'react';
import Cards from './Cards';
import sdata2 from './data2';
 const Amazon=()=>{
    return(
        <>      
        {/* Cards */}
        {sdata2.map((ele)=>{
          return(
            <Cards 
            key={ele.id}    //"Here" key is unique property,and for every element in list we must have unique "key" property
            simg={ele.simg}
            title={ele.title}
            sname={ele.sname}
            slink={ele.slink}
            />
          )
        })}
        </>
      )
 }
 export default Amazon;