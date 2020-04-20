import React, { Component } from "react";
import Item from "./item";

class List extends Component{
    constructor(props) {
        super(props);

    }
     RenderListItem = () => {
         return this.props.video.map(data => <Item d={data}  v={this.props.Vplay}/>)
     }
    render() {
        console.log(this.props.video);
        return (
            <div className="row">
             {this.RenderListItem()} 
            </div>
        )
    }
}


export default List;