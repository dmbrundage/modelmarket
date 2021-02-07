
import ClippedDrawer from '../Components/NavContent';
import React from "react";
import ContentContainer from '../Components/ContentCards';
import Toolbar from '@material-ui/core/Toolbar';
import * as model_data from './data/model_file';

document.body.style.backgroundColor = "#d4d4d4";
class Homepage extends React.Component {

  modelSelected = selected_model => {
    this.setState({ model: selected_model }, this.myModelFunction);
    console.log(this.state.model)

  }
  updateShared = shared_value => {
    console.log(shared_value)
    const filteredcards = this.props.data.filter((card) => card.tags.includes(shared_value))
    this.setState({ filtereddata: filteredcards }, this.myFunction);

  }


  resetfilter = shared_value => {
    this.props.resetfilter(shared_value);
    //const filteredcards = this.state.data.filter((card) => card.resettags.includes(shared_value))
    //this.setState({ filtereddata: filteredcards }, this.myFunction);

  }

  myFunction = () => {
    const { filtereddata } = this.state;
  }

  myModelFunction = () => {
    const { filtereddata } = this.state;
  }
  filtervalue = i => {
    this.props.filtervalue(i);

  }
  modelSelected = i => {
    this.props.modelSelected(i);

  }

  render() {
    return (

      <div className="App">
        <Toolbar />
        <ContentContainer dataprop={this.props.filtereddata} modelSelected={this.modelSelected} />
        <ClippedDrawer filter={this.props.filterValue} updateShared={this.filtervalue} resetfilter={this.resetfilter} />
      </div>
    );
  }
}

export default Homepage;