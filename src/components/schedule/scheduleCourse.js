import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Action from '../action';

class scheduleCourse extends Component {
    render() {
        return (
            <div className="schedule-course">
                <label className="schedule-course__lbel">{this.props.title}</label>
                <Action onClick={() => this.props.toggleEnrolled(this.props.id)} className="schedule-course__action" />
            </div>
        );
    }
}

export default connect(null, actions)(scheduleCourse);