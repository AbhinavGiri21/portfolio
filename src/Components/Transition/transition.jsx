import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import './transition.css';

const TransitionWrapper = ({ children }) => {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="zoom"
                timeout={300}
            >
                {children}
            </CSSTransition>
        </TransitionGroup>
    );
};

export default TransitionWrapper;
