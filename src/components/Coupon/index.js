import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Coupon.scss';
import tick from '../../assets/img/tick.svg';
import lock from '../../assets/img/lock.svg';
import clock from '../../assets/img/clock.png';

class Coupon extends Component {
    icon(){
        const { type, title, blocked } = this.props;
        return <img src={
            blocked ? lock : type === 'bonus' ? tick : clock
        } alt={title} />;
    }
    render() {
        const { type, title, extra_text, button_text, blocked} = this.props;
        const couponType = blocked ? 'block' : type;
        return (
            <div className={blocked ? 'cupon blocked' : 'cupon'}>
                <div className="content-cupon">
                    <div className="content-title">
                        <p>
                            {title}
                        </p>
                    </div>
                    {
                        blocked || (extra_text && extra_text.length > 0)
                        ? 
                            <div className="content-extra-text">
                                {extra_text}
                            </div>
                        :
                            <div className="content-button">
                                <button className={couponType}>{button_text}</button>
                            </div>
                    }
                </div>
                <div className={`${couponType}-icon`}>
                    {this.icon()}
                </div>
            </div>
        );
    }
}

Coupon.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    extra_text: PropTypes.string,
    button_text: PropTypes.string,
    blocked: PropTypes.bool
}

Coupon.defaultProps = {
    type: 'bonus',
    title: '£10 FREE BINGO BONUS TO USE NOW',
    button_text: 'Play',
    extra_text: '',
    blocked: false
}

export default Coupon;