import React, { Component } from 'react';
import axios from 'axios'
import store from '../store'
import {gotSingleStudent} from '../store'

export default class singleStudent extends Component {
  constructor() {
    super()
    this.state = store.getState()
  }

  componentDidMount() {
    const studentId = this.props.match.params.id;
    axios.get(`/api/students/${studentId}`)
    .then(res => res.data)
    .then((student) => {
      store.dispatch(gotSingleStudent(student))
    })
  }

  render() {

    return (
      <div>
        react route workds
      </div>
    )
  }

}
