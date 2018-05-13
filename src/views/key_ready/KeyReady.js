import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './KeyReady.css';
import Button from '../../components/Button';

export class KeyReady extends React.Component{
    static propTypes = {

    }
    
    render(){
        return(
            <div className="view--key-ready">
                <div className="key-ready__title-container row">
                    <h1>You're good to go!</h1>
                    <p>You can use your key to unlock your room</p>
                </div>
                <div className="key-ready__graphic-container row">
                    <div className="graphic-success">✓</div>
                </div>
                <div className="key-ready__options-container row">
                    <p>Remaining Keys: 5</p>
                    <Link to="/create-key">
                        <Button className="button--dark">
                            <h3>I Need Another Key</h3>
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button>
                            <h3>Done</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(KeyReady);