import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import jQuery from 'jquery';
import Navigation from './components/navigation.jsx';
import Content from './components/content.jsx';
import Player from './components/player.jsx';

window.$ = $;
window.jQuery = jQuery;

class AppComponent extends React.Component {
    render() {
        return (
            <div className="appContainer">
                <Navigation/>
                <Content/>
                <Player/>
            </div>
        )
    }
}

$(document).ready(() => {
    ReactDOM.render(
      <AppComponent/>,
      document.getElementById('root')
    );
});
