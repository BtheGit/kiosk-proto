import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Home extends React.Component{
    static propTypes = {

    }
    
    render(){
        return(
            null
        )
    }
};

const mapStateToProps = store => ({

});

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);