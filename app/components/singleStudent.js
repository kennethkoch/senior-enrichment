import React, { Component } from 'react';
import axios from 'axios'

export default class singleStudent extends Component {
  constructor() {
    super()
    this.state = {
      student = {},
    }
  }

  // componentDidMount() {
  //   axios.get('/api/students/:id')
  //   .then(res => res.data)
  //   .then((campuses) => {
  //     this.setState({campuses})
  //   })
  // }

  render() {

    return (
      <div>
        react route workds
      </div>
    )
  }

}
