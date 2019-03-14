import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import LibraryCourse from './libraryCourse';
import { STATUS_CODES } from 'http';

class Library extends Component {

    componentDidMount() {
        this.props.fetchCourses()
    }

    renderCourses() {
        const data = this.props.courses

        return data.map((course, index) => {
            return <LibraryCourse key={index}/>
        })
    }

    render() {
        return (
            <div className="library">
                <h1 className="library_title">Course Library</h1>
                { this.renderCourses() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps, actions)(Library);