import React, { Component } from "react";
import SearchBox from './SearchBox'
import Gallery from './Gallery'
class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ''
        }
        this.searchTerm = this.searchTerm.bind(this)
    }
    searchTerm(query){
        this.setState({searchTerm: query})
    }
    
  render() {
      const {searchTerm} = this.state;
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">Pic Gallery</a>
        </nav>
        <SearchBox onSearchTerm={this.searchTerm}/>
        <Gallery query={searchTerm}/>
      </div>
    );
  }
}

export default Main;
