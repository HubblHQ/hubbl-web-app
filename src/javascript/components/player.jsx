import React from 'react';

function Infos(props) {
  return (
    <div className="infos">
      <div className="cover"><img src="/assets/dixie-biscuit.jpg"/></div>
    </div>
  )
}


export default class Player extends React.Component {
    render() {
        return (
            <div className="player">
                <Infos/>
                <div className="controlls">
                    <div className="seekbar">
                        <span className="buffer"></span>
                        <span className="current"></span>
                    </div>
                    <div className="wrapper">
                      <div className="headings">
                        <div className="heading">Dixie Biscuit</div>
                        <div className="subheading">by Tape Five</div>
                      </div>
                      <div className="common">
                          <div className="like"><i className="fa fa-thumbs-up"></i></div>
                          <div className="playPause"><i className="fa fa-play"></i></div>
                          <div className="dislike"><i className="fa fa-thumbs-down"></i></div>
                      </div>
                      <div className="volume"><i className="fa fa-volume-up" aria-hidden="true"></i></div>
                    </div>
                </div>
            </div>
        )
    }
}
