
import React from "react";
import SearchInput from './component/SearchInput';
import axios from 'axios';
import ImageList from "./component/ImageList";

class App extends React.Component{
  state={image: []}
  onSearchSubmit =async(entry)=>
  {
    
    const response=await axios.get(`https://pixabay.com/api/?key=33309286-49df0c9341b3ccfc78edbe15a&q=${entry}&image_type=photo&pretty=true`)
    console.log(this)
    this.setState({image:response.data.hits})
  }
  render(){
  return(
    <div className='ui container' style={{marginTop:'30px'}}>
      <SearchInput onSearchSubmit={this.onSearchSubmit}></SearchInput>
      {/* we have {this.state.image.length} images */}
      <ImageList image={this.state.image}></ImageList>
    </div>
  )
}
}
export default App;