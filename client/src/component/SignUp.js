import React, { Component } from 'react';
import { login, logout } from '../redux/signup';
import { connect } from 'react-redux';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit2 = this.onSubmit2.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    }
    onSubmit2(e) {
        e.preventDefault();
        this.props.logout()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className='form-inline'>

                        {this.props.loggedIn === true ? <h1>Welcome: {this.props.user.email}</h1> : null}

                        <div className='form-group'>

                            <input
                                className='form-control'
                                name='email'
                                value={this.state.value}
                                type='text'
                                field='password'
                                placeholder='email'
                                onChange={this.onChange}
                            />

                            <input
                                className='form-control'
                                name='password'
                                value={this.state.value}
                                type='password'
                                field='password'
                                placeholder='password'
                                onChange={this.onChange}
                            />

                            <button>Login</button>
                            <button onClick={this.onSubmit2}>Logout</button>

                        </div>
                    </div>
                </form>
            </div>
        )
    };
}
export default connect(state => state.auth, { login, logout })(SignUp)