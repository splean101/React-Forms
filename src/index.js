import React from 'react';
import ReactDOM from 'react-dom';

class AnimationText extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: 'black' };
        this.red = this.red.bind(this);
        this.green = this.green.bind(this);
        this.blue = this.blue.bind(this);
    }
    red() {
        this.setState({ color: 'red' });
    }
    green() {
        this.setState({ color: 'green' });
    }
    blue() {
        this.setState({ color: 'blue' });
    }
    render() {
        return (
            <>
                <div style={this.state}> {this.props.text} </div>
                <button type='button' onClick={this.red}>red</button>
                <button type='button' onClick={this.green}>green</button>
                <button type='button' onClick={this.blue}>blue</button>
            </>
        )
    }
};

ReactDOM.render(<AnimationText text='AnimationText' />,
    document.getElementById('div1'))