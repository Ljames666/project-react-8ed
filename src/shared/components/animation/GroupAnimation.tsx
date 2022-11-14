// @ts-nocheck
import PropTypes from 'prop-types';
import React from 'react';
import { VelocityTransitionGroup } from 'velocity-react';
import 'velocity-animate/velocity.ui';

const enterAnimationDefaults = {
    animation: 'transition.fadeIn',
    stagger: 50,
    duration: 200,
    display: null,
    visibility: 'visible',
    delay: 0,
};

const leaveAnimationDefaults = {
    stagger: 50,
    duration: 200,
    display: null,
    visibility: 'visible',
    delay: 0,
};

function GroupAnimation(props) {
    return (
        <VelocityTransitionGroup
            {...props}
            enter={{ ...enterAnimationDefaults, ...props.enter }}
            leave={{ ...leaveAnimationDefaults, ...props.leave }}
        />
    );
}

GroupAnimation.propTypes = {
    children: PropTypes.any,
};

GroupAnimation.defaultProps = {
    enter: enterAnimationDefaults,
    leave: leaveAnimationDefaults,
    easing: [0.4, 0.0, 0.2, 1],
    runOnMount: true,
    enterHideStyle: {
        opacity: 1,
    },
    enterShowStyle: {
        opacity: 0,
    },
};

export default React.memo(GroupAnimation);
