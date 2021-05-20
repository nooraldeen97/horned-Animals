import React from 'react';
import HornedBeasts from './HornedBeast';
import Form from 'react-bootstrap/Form'
import data from './data.json';


class Main extends React.Component{

  
  
  
  
  updateOption=(event) =>{

    let hornsNum =parseInt(event.target.value)
    let result;
    let allHornes=data
     if (hornsNum) {
       result = allHornes.filter(item =>{
        if(item.horns == hornsNum)
       return item;
       })
        
      //  return result;
      } else {
        
        result = allHornes;
      }

      this.props.filterCards(result)
     }
   

    


  
  

  render(){
    return(
        <>

        <Form >
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>select the hornedbeast depend on horned number :</Form.Label>
            <Form.Control as="select" custom onChange={this.updateOption}>
                 <option value=''>all</option>
                 <option value='1'>1</option>
                 <option value='2'>2</option>
                 <option value='3'>3</option>
                 <option value='100'>woow</option>
            </Form.Control>
            </Form.Group>
        </Form>

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


