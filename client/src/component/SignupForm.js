import React, { Component } from 'react';
import { connect } from 'react-redux';
import { make } from '../redux/auth';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.make(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className='form-inline'>
                        <div className='form-group'>

                            <input
                                className='form-control'
                                name='name'
                                value={this.state.value}
                                type='text'
                                placeholder='name'
                                onChange={this.onChange}
                            />

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

                            <button>Sign up</button>

                        </div>
                    </div>
                </form>
            </div>
        )
    };
}
export default connect(state => state.auth,{make})(SignupForm)