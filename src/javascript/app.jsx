import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class HelloWorldComponent extends React.Component {
    render() {
        return (
            <h1>Hello, world!</h1>
        )
    }
}
$(document).ready(() => {
    ReactDOM.render(
      <HelloWorldComponent/>,
      document.getElementById('root')
    );
});
