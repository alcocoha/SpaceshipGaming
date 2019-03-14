import React, { Component } from 'react';
import Coupon from '../../components/Coupon';
import './Coupons.scss';

class Coupons extends Component {
    constructor(){
        super();
        this.state = {
            coupons : {}
        }
    }

    componentDidUpdate(){
        // console.log("state", this.state);
    }

    componentDidMount() {
        fetch('./mockups/coupons.json')
            .then(resp => resp.json())
            .then(resp => {
                console.log('Success:',resp);
                this.setState({coupons: resp});
            })
            .catch(error => console.error('Error:', error));
        
    }

    handleBonus = () =>{
        const { coupons } = this.state;
        if(coupons && coupons.bonus){
            return coupons.bonus.map((item, index)=>{
                return (
                    <div className="col-12 col-md-6 coupon-bonus"  key={item.bonus_id}>
                        <Coupon
                            type="bonus"
                            title={item.title}
                            extra_text={item.extra_text}
                            button_text={item.button_text}
                            blocked={item.blocked}
                        />
                    </div>
                );
            });
        }

    }

    handleOffers = () =>{
        const { coupons } = this.state;
        if(coupons && coupons.offer){
            return coupons.offer.map((item, index)=>{
                return (
                    <div className="col-12 col-md-6 coupon-offer"  key={item.offer_id}>
                        <Coupon
                            type="offer"
                            title={item.title}
                            extra_text={item.extra_text}
                            button_text={item.button_text}
                            blocked={item.blocked}
                        />
                    </div>
                );
            });
        }

    }

    render() {
        const { coupons } = this.state;
        let offerB = null;
        let bonusB = null;

        if(coupons){
            if(coupons.offer) offerB = coupons.offer.filter(item => item.blocked).length;
            if(coupons.bonus) bonusB = coupons.bonus.filter(item => item.blocked).length;
        }
        return (
            <div className="coupons">
                <div className="container">
                    {
                        coupons && coupons.bonus &&
                        <div className="container-bonus">
                            <div className="row title-row">
                                <div className="col-12">
                                    { `${coupons.bonus.length - bonusB} ${coupons.bonus.length > 1 ? 'BONUSES' : 'BONUS'}` } FOR YOU TO USE NOW
                                </div>
                            </div>
                            <div className="row">
                                {this.handleBonus()}
                            </div>
                        </div>
                    }
                    {
                        coupons && coupons.offer &&
                        <div className="container-offer">
                            <div className="row title-row">
                                <div className="col-12">
                                    ALSO PICK 1 OF {`${coupons.offer.length - offerB}`} DEPOSIT OFFERS
                                </div>
                            </div>
                            <div className="row">
                                {this.handleOffers()}
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Coupons;