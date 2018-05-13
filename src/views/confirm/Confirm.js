import React from 'react';
import PropTypes from 'prop-types';
import './Confirm.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import roomHero from '../../assets/images/room-hero.jpg';

export class Confirm extends React.Component{
    static propTypes = {

    }

    render(){
        return(
            <div className="view--confirm">
                <div className="confirm__title-container row">
                    <h1>Does everything look good?</h1>
                </div>
                <img src={ roomHero }/>
                <div className="confirm__options-container row">
                    <p>Your card on file (Visa ending in 1234) will be charged for your stay.</p>
                    <Button className="button--dark"><Link to="/create-key"><h3>I agree</h3></Link></Button>
                    <Button className="button--dark"><Link to="/swipe"><h3>Change card</h3></Link></Button>
                    <Button><Link to="/"><h3>Cancel</h3></Link></Button>
                </div>
            </div>
        )
    }
};

const mapStateToProps = store => ({

});

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);