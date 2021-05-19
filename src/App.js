import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import data from './components/data.json';
import SelectedBeast from './components/SelectedBeast';


class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      hornedData : data,
      selectedAnimal: {},
      show:false
    }
  }






  

  OurSelected=(title)=> {
    let foundObj = data.find(element => {      
      if (element.title === title) {
                return element;
                
              }})
    
              this.setState({
                show:true,
                selectedAnimal: foundObj
              })
            }
            


    handleClose = () =>{
      this.setState({
        show:false,
      })
    }





  render(){
    return(
      <>
      <Header/>
      <Main
       hornedData={this.state.hornedData}
       OurSelected={this.OurSelected}
       
      />
      <Footer/>
        <SelectedBeast
        show={this.state.show}
        handleClose={this.handleClose}
        selectedAnimal={this.state.selectedAnimal}
        />

      </>
    )
  }

}


export default App;