import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
    render() {
        const { title } = this.props;
        return (
            <div className="header">
                <nav className="navbar">
                    <div className="row">
                        <div className="col-10 col-md-6 title">
                            {title}
                        </div>
                        <div className="col-2 col-md-6 btn-close">
                            <div className="close-container">
                                <div className="leftright"></div>
                                <div className="rightleft"></div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;