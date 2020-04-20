import React, { Component } from "react";
import Search from "./components/search";
import List from "./components/list";
import axios from "axios";
import Selected from "./components/selected";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchData: "",
            videodata: [],
            selectedVideo:"",
            count:0,
            countd:0
            

        }
    };

componentDidMount(){
    this.FetchInputdata("youtube")
}


    FetchInputdata = async (data) => {
        console.log(data);
        this.setState({ searchData: data });
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                part: "snippet",
                maxResults: 5,
                q: data,
                key: "insert your own key"
            }
        });
        console.log(response);
        this.setState({ videodata: response.data.items });
        this.setState({ selectedVideo: response.data.items[0] });
    };
    
    
    SelectedVideoListItem = (item) => {
        console.log(item);
        this.setState({ selectedVideo: item });
    }
    
    incrementlike =() =>{
        let newCount = this.state.count + 1
        this.setState({
        count: newCount
        })
    }

    incrementdislike =() =>{
        let newCountd = this.state.countd + 1
        this.setState({
        countd: newCountd
        })
    }

    

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    <Search Idata={this.FetchInputdata} />
                    </div>

            </div>
                <div className="row">
                    <div className="col-md-7">
                        <Selected videoplayer={this.state.selectedVideo}/>
                        <button onClick={this.incrementlike}>Likes: {this.state.count} </button>
                        <button onClick={this.incrementdislike} style={{margin:"05px"}}>Dislikes: {this.state.countd}</button>
                    
                    </div>
                    <div className="col-md-5">
                        <List video={this.state.videodata} Vplay={this.SelectedVideoListItem}/>
                    </div>
                </div>
                   
            </div>
        )
    }
}

export default App;