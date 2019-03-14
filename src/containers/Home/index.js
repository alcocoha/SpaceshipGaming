import React, { Component } from 'react';
import Header from '../../components/Header';
import Coupons from '../../containers/Coupons';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            user : ""
        }
    }

    componentDidMount() {
        fetch('./mockups/user.json')
            .then(resp => resp.json())
            .then(resp => {
                console.log('Success:',resp.user_name);
                this.setState({user: resp.user_name});
            })
            .catch(error => console.error('Error:', error));

    }

    render() {
        return (
            <div>
                <Header
                    title={`Welcome ${this.state.user}, thanks for joining.`}
                />
                <Coupons />
            </div>
        );
    }

}

export default Home;