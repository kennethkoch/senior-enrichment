import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../store'
import {fetchCampuses, deleteCampus} from '../store'

export default class CampusView extends Component {
  constructor() {
    super()
    this.state = store.getState()
    this.handleClick = this.handleClick.bind(this)
  }


  componentDidMount() {
    const thunk = fetchCampuses()
    store.dispatch(thunk)
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  handleClick(evt){
    evt.preventDefault()
    const campusId = evt.target.getAttribute('id')
    const thunk = deleteCampus(campusId)
    store.dispatch(thunk)
  }

  render() {
    const campuses = this.state.campuses
    return (
      <div>
      <div><Link to='/addCampus'>add campus</Link></div>
        <ul>
        {campuses.map(campus => {
          return <li key={campus.name}>
          <Link to={`/campuses/${campus.id}`}> {campus.name} </Link>
          <button id={campus.id} onClick={this.handleClick}>Delete Campus</button>
          </li>
        })}

        </ul>
      </div>
    )
  }

}
