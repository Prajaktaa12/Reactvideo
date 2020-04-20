import React, { Component } from "react";

class Search extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputdata:""
        }
    }
    Handleform = (e) => {
        e.preventDefault();
        this.props.Idata(this.state.inputdata);
   }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <form onSubmit={this.Handleform}>
                        <div className="form-group">
                            <input type="text" placeholder="enter here" className="form-control"
                                value={this.state.inputdata}
                                onChange={e => this.setState({ inputdata: e.target.value })}
                            />
                        </div>
                    </form>
            </div>
            </div>
        )
    }
}


export default Search;