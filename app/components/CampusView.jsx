import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../store'
import {fetchCampuses} from '../store'

export default class CampusView extends Component {
  constructor() {
    super()
    this.state = store.getState()
  }

  componentDidMount() {
    const thunk = fetchCampuses()
    store.dispatch(thunk)
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
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
          return <li key={campus.id}> <Link to={`/campuses/${campus.id}`}> {campus.name} </Link> </li>
        })}
        </ul>
      </div>
    )
  }

}
