import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './RoomInfo.css';
import roomHero from '../../assets/images/room-hero.jpg';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

export class RoomInfo extends React.Component{
    static propTypes = {

    }
    
    render(){
        return(
            <div className="view--room-info">
                <div className="room-info__title-container row">
                    <h1>Your room is waiting for you!</h1>
                </div>
                <img src={ roomHero } />
                <div className="room-info__info-container row">
                    <h2>Room 123 is yours, jot it down!</h2>
                    <p>Write down your room number and we'll get going on making your key.</p>
                </div>
                <div className="room-info__button-container row">
                    <Link to="/create-key">
                        <Button className="button--dark">
                            <h3>Next</h3>
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
};

const mapStateToProps = store => ({

});

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RoomInfo);