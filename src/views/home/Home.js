import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

export class Home extends React.Component{
    static propTypes = {

    }
    
    render(){
        return(
            <div className="view--home">
                <div className="home__title-container">
                    <h1 className="home__title">Hi there. Want a little assistance with your stay?</h1>
                </div>
                <div className="home__button-container">
                    <Link to="/swipe">
                        <Button>
                            <h2>Check In</h2>
                        </Button>
                    </Link>
                </div>
                <div className="home__addendum-container">
                    <p>I accept the terms and conditions</p>
                </div>
            </div>
        )
    }
};

const mapStateToProps = store => ({

});

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);