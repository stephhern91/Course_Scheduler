import React, { Component } from 'react';

class scheduleCourse extends Component {
    render() {
        return (
            <div className="schedule-course">
                <label>{this.props.title}</label>
            </div>
        );
    }
}

export default scheduleCourse;