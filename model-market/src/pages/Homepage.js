
import ClippedDrawer from '../Components/NavContent';
import React from "react";
import ContentContainer from '../Components/ContentCards';
import Toolbar from '@material-ui/core/Toolbar';
import * as model_data from './data/model_file';

document.body.style.backgroundColor = "#d4d4d4";
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data : model_data['default'],
                    filterValue: " ",
                  filtereddata:model_data['default'] ,
                  inputvalue:""
        };
        
  }

  updateShared= shared_value => {
    const filteredcards = this.state.data.filter( (card) => card.tags.includes(shared_value))
    this.setState({filtereddata: filteredcards}, this.myFunction); 
    
}

myFunction = () => {
  const {filtereddata} = this.state;
}


    render(){
  return (

    <div className="App">
    <Toolbar />
        <ContentContainer dataprop={this.state.filtereddata} filter={this.state.filterValue} />
        <ClippedDrawer  filter={this.state.filterValue} updateShared={this.updateShared}/>
      </div>
  );
}}

export default Homepage;