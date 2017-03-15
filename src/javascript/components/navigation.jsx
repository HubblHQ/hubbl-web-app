import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="navigation">
                <div className="back"><i className="fa fa-chevron-circle-left" aria-hidden="true"></i></div>
                <div className="hubName">Brave new hub</div>
                <div className="userNameContainer">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <div className="userName">Ivan Petrov</div>
                </div>
            </div>
        )
    }
}
