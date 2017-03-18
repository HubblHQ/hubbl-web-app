import React from 'react';
import Nanoscroller from './elements/nanoscroller.jsx';

function PlaylistItem(props) {
        return (
            <div className="item">
                <div className="cover">
                    <img src={props.cover}/>
                </div>
                <div className="infos">
                    <div className="title">{props.title}</div>
                    <div className="author">added by {props.author}</div>
                </div>
                <div className="controlls">
                    <div className="like"><i className="fa fa-caret-up"></i></div>
                    <div className="rating">-200</div>
                    <div className="dislike"><i className="fa fa-caret-down"></i></div>
                </div>
            </div>
        )
}

export default class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playlist: [
                {title: "Adelle - Rolling in the beef", author: "Ivan Petrov", cover: "assets/dixie-biscuit.jpg" },
                {title: "Adelle - Rolling in the beef", author: "Ivan Petrov", cover: "assets/dixie-biscuit.jpg" },
                {title: "Adelle - Rolling in the beef", author: "Ivan Petrov", cover: "assets/dixie-biscuit.jpg" },
                {title: "Adelle - Rolling in the beef", author: "Ivan Petrov", cover: "assets/dixie-biscuit.jpg" },
                {title: "Adelle - Rolling in the beef", author: "Ivan Petrov", cover: "assets/dixie-biscuit.jpg" },
                {title: "Adelle - Rolling in the beef", author: "Ivan Petrov", cover: "assets/dixie-biscuit.jpg" },
                {title: "Adelle - Rolling in the beef", author: "Ivan Petrov", cover: "assets/dixie-biscuit.jpg" },
                {title: "Adelle - Rolling in the beef", author: "Ivan Petrov", cover: "assets/dixie-biscuit.jpg" },
                {title: "Adelle - Rolling in the beef", author: "Ivan Petrov", cover: "assets/dixie-biscuit.jpg" },
                {title: "Adelle - Rolling in the beef", author: "Ivan Petrov", cover: "assets/dixie-biscuit.jpg" },
                {title: "Adelle - Rolling in the beef", author: "Ivan Petrov", cover: "assets/dixie-biscuit.jpg" },
                {title: "Adelle - Rolling in the beef", author: "Ivan Petrov", cover: "assets/dixie-biscuit.jpg" }
            ]
        };
    }

    render() {
        return (
            <div className="content">
                <div className="panelContainer">
                    <div className="header">
                        <div className="tab selected">
                            1
                        </div>
                        <div className="tab">
                            2
                        </div>
                        <div className="tab">
                            3
                        </div>
                    </div>
                    <div className="body">

                    </div>
                </div>
                <div className="playlistContainer">
                    <Nanoscroller>
                        <div className="currentPlaying">
                            <div className="cover">
                                <img src="data:image/jpeg;base64,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" alt="Cover"></img>
                            </div>
                            <div className="infos">
                                <div className="title">Adelle - Rolling in the beef</div>
                                <div className="author">added by Ivan Petrov</div>
                                <div className="controlls">
                                    <button className="btn"><i className="fa fa-thumbs-up"></i> Like</button>
                                    <button className="btn"><i className="fa fa-thumbs-down"></i> Dislike</button>
                                </div>
                            </div>
                        </div>
                        <div className="restPlaylist">
                            {this.state.playlist.map((e, i) => <PlaylistItem key={i} {...e}/>)}
                        </div>
                    </Nanoscroller>
                </div>
            </div>
        )
    }
}
