import React from "react";

const Item  = ({d,v}) =>{
        return (
            <div
                key={d.id.videoId}
                className="row" style={{ margin: "5px" }} onClick={() => v(d)}>
                <div className='col-md-12'>
                    <div className="card text-left">
                        <img className="card-img-top" src={d.snippet.thumbnails.medium.url} alt=""
                          style={{height:"150px"}}
                        />
                      <div className="card-body">
                            <h4 className="card-title">{d.snippet.title}</h4>
                            <p className="card-text">{d.snippet.description}</p>
                      </div>
                    </div>
              </div>
            </div>
        )
    }


export default Item;