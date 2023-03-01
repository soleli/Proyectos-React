import { Component } from "react";

class SearchBar extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
        <div className=" mb-3">
            <input type="text" className="form-control" onKeyUp={(e) => this.props.handleKeyPress(e)}  />
        </div>
        );
    }
}
export default SearchBar;