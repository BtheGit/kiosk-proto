import React from 'react';
import PropTypes from 'prop-types';
import './Swipe.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

export class Swipe extends React.Component{
    static propTypes = {

    }
    
    render(){
        return(
            <div className="view--swipe">
                <div className="swipe__title-container row">
                    <h1>Swipe your credit card below to get started</h1>
                </div>
                <div className="swipe__instructions-container row">
                    <p>Remember the card you used to make the reservation? That's the one you'll need to swipe to get going</p>
                </div>
                <div className="swip__temp-button-container">
                    <Button className="button--dark"><Link to="/confirm"><h3>[swipe]</h3></Link></Button>
                </div>
            </div>
        )
    }
};

const mapStateToProps = store => ({

});

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Swipe);