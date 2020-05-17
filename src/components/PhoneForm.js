import React, { Component } from 'react';

class PhoneForm extends Component {

    domRef = React.createRef();

    state = {
        name: '',
        phone: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        });
        this.domRef.current.focus();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="name"
                    placeholder="이름" 
                    onChange={this.handleChange} 
                    value={this.state.name}
                    ref={this.domRef}
                />
                <input
                    name="phone"
                    placeholder="전화번호" 
                    value={this.state.phone}
                    onChange={this.handleChange}
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;