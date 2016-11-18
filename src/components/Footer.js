require('styles/Footer.css');

import React from 'react';

class AppComponent extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footerContainer">
                    <div className="footerItem">footer content footer content</div>
                    <div className="footerItem">System V1.0</div>
                </div>
            </footer>
        )
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
