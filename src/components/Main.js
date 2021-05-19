import React from 'react';
import HornedBeasts from './HornedBeast';


class Main extends React.Component{
  render(){
    return(
        <>
        {this.props.hornedData.map((item,index)=>{
            return(
        <HornedBeasts
        title={item.title}
        image_url={item.image_url}
        description={item.description}
        key={index}

        OurSelected ={this.props.OurSelected}
        />

        )
        
    })}
    </>

    )
  }
}


export default Main;


