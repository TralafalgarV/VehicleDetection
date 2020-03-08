import React, { Component } from 'react';
import {
    Text,
    Animated,
} from 'react-native';

export default class RefreshHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pullDistance: props.pullDistance,
            percent: props.percent,
        };
    }

    setProgress({ pullDistance, percent }) {
        this.setState({
            pullDistance,
            percent,
        });
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            pullDistance: nextProps.pullDistance,
            percent: nextProps.percent,
        });
    }

    render() {
        const { percentAnimatedValue, percent, refreshing } = this.props;
        const { percent: statePercent, pullDistance } = this.state;
        let text = '下拉可以刷新';
        if (statePercent >= 1) {
            if (refreshing) {
                text = '刷新中...';
            } else {
                text = '松开立即刷新';
            }
        }
        return (
            <Animated.View style={[headerStyle.con, { opacity: percentAnimatedValue }]}>
                <Text style={headerStyle.title}>{text}</Text>
            </Animated.View>
        );
    }
}

const headerStyle = {
    con: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        color: '#666',
    },
};