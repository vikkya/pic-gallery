import React, {Component} from 'react';

class SearchBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSearch(e) {
        this.setState({searchTerm: e.target.value})
        const query = e.target.value;
        this.props.onSearchTerm(query);
    }
    handleSubmit(e) {
        e.preventDefault();

    }
    render(){
        return(
        <div className="input-group">
        <form onSubmit={this.handleSubmit}>
        <input
            type="text"
            className="form-control"
            aria-label="Text input with dropdown button"
            onChange={this.handleSearch}
            value={this.state.searchTerm}
          />
        </form>
         
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
              <div role="separator" className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </div>
          </div>
        </div>
        )
    }
}
export default SearchBox;