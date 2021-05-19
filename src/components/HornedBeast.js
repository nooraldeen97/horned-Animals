import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




class HornedBeasts extends React.Component{

    constructor(props){
      super(props)
      this.state={
        vote :0,

      }
    }
   
    UserClick=()=>{
      this.setState({
        vote : this.state.vote +1 ,
      })
    }

  render(){
    return(
      <div className='cards'>
    <Card>
    <Card.Img variant="top"  src={this.props.image_url} itle={this.props.title} />
    <Card.Body>
      <Card.Title>{this.props.title}</Card.Title>
      <Card.Text>
      {this.props.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" onClick ={this.UserClick}>vote </Button>
      <small className="text-muted">   {this.state.vote}</small>
    </Card.Footer>
  </Card>
  </div>
   ) 

  }
}


export default HornedBeasts;





// return(
//   <div>
//       <h2>{this.props.title}</h2>
//       <img onClick ={this.UserClick} src={this.props.image_url} alt={this.props.title} title={this.props.title}/> 
//       <p>{this.props.description}</p>
//       <p>{this.state.vote}</p>
//   </div>
// )