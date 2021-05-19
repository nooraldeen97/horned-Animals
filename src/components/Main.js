import React from 'react';
import HornedBeasts from './HornedBeast';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Main extends React.Component{


  constructor(props){
    super(props)
    this.state={
      filteredObj:this.props.hornedData,
      hornsNum:''
    }
  }

  submitForm=(event)=>{
    event.preventDefault()
    
  this.setState({

    filteredObj: this.state.filteredObj.filter(item => item.horns.includes(this.state.hornsNum))
  })
    

  }

  updateOption=(event) =>{
    this.setState({
      hornsNum:event.target.value
    })

  }
  
  

  render(){
    return(
        <>

        <Form onSubmit={this.submitForm}>
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>select the hornedbeast depend on horned number :</Form.Label>
            <Form.Control as="select" onChange={this.updateOption}>
                 <option value='1'>1</option>
                 <option value='2'>2</option>
                 <option value='3'>3</option>
                 <option value='100'>woow</option>
            </Form.Control>
            </Form.Group>
            <Button type="submit">filter</Button>
        </Form>

        {this.state.filteredObj.map((item,index)=>{
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


