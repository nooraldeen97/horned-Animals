import React from 'react';
import data from './data.json';
import HornedBeasts from './HornedBeast';


class Main extends React.Component{
  render(){
    return(
        <>
        {data.map((item,index)=>{
            return(
        <HornedBeasts
        title={item.title}
        image_url={item.image_url}
        description={item.description}
        key={index}
        />

        )
        
    })}
    </>

    )
  }
}


export default Main;


