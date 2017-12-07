import React, { Component } from 'react';
import axios from 'axios'

export default class singleCampus extends Component {
  constructor() {
    super()
    this.state = {
      campus = {},
    }
  }

  // componentDidMount() {
  //   axios.get('/api/campuses/:id')
  //   .then(res => res.data)
  //   .then((campuses) => {
  //     this.setState({campuses})
  //   })
  // }

  render() {

    return (
      <div>
        react route works
      </div>
    )
  }

}
