// @ts-nocheck

import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';
import { VelocityComponent } from 'velocity-react';
import 'velocity-animate/velocity.ui';

type Props = {
    children: ReactElement;
    animation?:
        | 'transition.fadeIn'
        | 'transition.expandIn'
        | 'transition.slideUpIn'
        | string // TODO: adicionar novos types de animação
        | { translateX?: any }; // adicionar novos types de animação
    delay?: number;
};

const SingleAnimation = React.forwardRef((props: Props, ref) => {
    const children = React.cloneElement(props.children, {
        style: {
            ...props.children.style,
            visibility: 'hidden',
        },
    });
    return (
        <VelocityComponent ref={ref} {...props}>
            {children}
        </VelocityComponent>
    );
});

SingleAnimation.propTypes = {
    children: PropTypes.element.isRequired,
};

SingleAnimation.defaultProps = {
    animation: 'transition.fadeIn',
    runOnMount: true,
    targetQuerySelector: null,
    interruptBehavior: 'stop',
    visibility: 'visible',
    duration: 300,
    delay: 50,
    easing: [0.4, 0.0, 0.2, 1],
    display: null,
    setRef: undefined,
};

export default React.memo(SingleAnimation);
