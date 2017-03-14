import React from 'react';

export default class Player extends React.Component {
    render() {
        return (
            <div className="player">
                <div className="seekbar">
                    <span className="buffer"></span>
                    <span className="current"></span>
                </div>
                <div className="controlls">
                    <div className="left"></div>
                    <div className="center">
                        <div className="like"><i className="fa fa-thumb-up"></i></div>
                        <div className="playPause"><i className="fa fa-play"></i></div>
                        <div className="dislike"><i className="fa fa-thumb-down"></i></div>
                    </div>
                    <div className="right"></div>
                </div>
            </div>
        )
    }
}
