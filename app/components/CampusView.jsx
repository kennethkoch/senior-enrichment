import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import store from '../store'
import {gotCampuses} from '../store'

export default class CampusView extends Component {
  constructor() {
    super()
    this.state = store.getState()
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
    axios.get('/api/campuses')
    .then(res => res.data)
    .then((campuses) => {
      const action = gotCampuses(campuses)
      store.dispatch(action)
    })
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  render() {
    const campuses = this.state.campuses
    console.log(this.state);
    return (
      <div>
        <ul>
        {campuses.map(campus => {
          return <li key={campus.id}> <Link onClick={() => <singleCampus />}to={`/campuses/${campus.id}`}> {campus.name} </Link> </li>
        })}
        </ul>
      </div>
    )
  }

}
