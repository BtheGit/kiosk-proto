import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './CreateKey.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import AnimatedDrip from '../../components/AnimatedDrip';

export class CreateKey extends React.Component{
    static propTypes = {

    }
    
    render(){
        return(
            <div className="view--create-key">
                <div className="create-key__title-container row">
                    <h1>Tap your key to create</h1>
                </div>
                <div className="create-key__anim-container">
                    <AnimatedDrip />
                </div>
                <div className="create-key__info-container row">
                    <p>To create a key, hold near the reader and wait for the green light</p>
                </div>
                <div className="create-key__button-container row">
                    <Link to="/key-ready">
                        <Button className="button--dark">
                            <h3>Create My Key</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateKey);