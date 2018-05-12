import React from 'react';
import './Background.css';
import marriottLogo from '../assets/images/marriott-logo-big.png';

class Background extends React.PureComponent{
    render(){
        return(
            <div className="background">
                <header className="background__header-container">
                </header>
                <main className="background__main-container">
                    { this.props.children }
                </main>
                <footer className="background__footer-container">
                    <img src={ marriottLogo } />
                </footer>
            </div>
        )
    }
}

export default Background;