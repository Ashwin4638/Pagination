import React from 'react';
import './Header.css'

class Header extends React.Component {

    state = {
        isOpen: false
    }

    onHandleMenuClick = () => {
        this.setState({ isOpen: true })
    }

    onHandleCloseIconClick = () => {
        this.setState({ isOpen: false })
    }

    renderHamburgerMenu() {
        const className = this.state.isOpen ? "open" : "close";
        if (!this.state.isOpen) {
        return (
            <div className={ className} onClick={ this.onHandleMenuClick }>
            <svg width="20" height="18" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="ListIcon"><line y1="1" x2="16" y2="1" stroke="#fff" stroke-width="2"></line><line y1="6" x2="16" y2="6" stroke="#fff" stroke-width="2"></line><line y1="11" x2="16" y2="11" stroke="#fff" stroke-width="2"></line></svg>
            </div>
        )
        }
        return (
            <div className={ className} onClick={ this.onHandleCloseIconClick }>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="CloseIcon"><path d="M5.4159 5.00008L9.91383 0.502153C9.96939 0.446595 10 0.372736 10 0.294202C10 0.215667 9.96939 0.141808 9.91383 0.0861687C9.85828 0.0306116 9.78442 0 9.70588 0C9.62735 0 9.55349 0.0306095 9.49793 0.0861687L5 4.5841L0.502071 0.0861687C0.446595 0.0306935 0.372654 8.19043e-05 0.29412 8.19043e-05C0.215586 8.19043e-05 0.141644 0.0306914 0.0861687 0.0862506C0.0306116 0.141808 0 0.215667 0 0.294202C0 0.372736 0.0306095 0.446595 0.0861687 0.502153L4.5841 5.00008L0.0861687 9.49801C0.0306116 9.55357 0 9.62743 0 9.70596C0 9.78458 0.0306095 9.85836 0.0861687 9.914C0.141726 9.96955 0.215586 10.0001 0.29412 10.0001C0.372654 10.0001 0.446514 9.96947 0.502071 9.91391L5 5.41598L9.49793 9.91391C9.55349 9.96947 9.62735 10 9.70588 10C9.78442 10 9.85828 9.96939 9.91383 9.91383C9.96939 9.85827 10 9.78442 10 9.70588C10 9.62735 9.96939 9.55349 9.91383 9.49793L5.4159 5.00008Z" fill="#5F5F5F"></path></svg>
                <li>ABC</li>
                <li>ABC</li>
                <li>ABC</li>
                <li>ABC</li>
                <li>ABC</li>
                <li>ABC</li>
                <li>ABC</li>
            </div>

        )
    }
    render() {
        return (
            <div className='HeaderContainer'>
                Header
                { this.renderHamburgerMenu() }
            </div>
        )
    }
}

export default Header;