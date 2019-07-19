import React from 'react';
import ReactDOM from 'react-dom';

class CalcForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value1: '',value1isValid: false, value2: '', value2isValid: false };
        this.onChange1 = this.onChange1.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        /*this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);
        this.mul = this.mul.bind(this);
        this.div = this.div.bind(this);*/
    }
    value1isValid(value1) {
        if (typeof value1 === 'number' && !isNaN(value1)) {
            return true;
        }
        return false;
    }
    value2isValid(value2) {
        if (typeof value2 === 'number' && !isNaN(value2)) {
            return true;
        }
        return false;
    }
    onChange1(event) {
        console.log(event.target.value);
        
        this.setState({ value1: +event.target.value, value1isValid: this.value1isValid(event.target.value)});
    }
    onChange2(event) {
        console.log(event.target.value);
        this.setState({ value2: +event.target.value, value1isValid: this.value2isValid(event.target.value)});
    }
    render() {
        return (
            <form>
                <label htmlFor="value1">value1:</label>
                <input type="number" name="value1" value={this.state.value1} onChange={this.onChange1} />
                <br />
                <label htmlFor="value2">value2:</label>
                <input type="number" name="value2" value={this.state.value2} onChange={this.onChange2} />
                <br />
                <button type="button" onClick={this.onChange}>Say hello</button>
            </form>
        );
    }
}


ReactDOM.render(
    <CalcForm />,
    document.getElementById("div1")
);
