import React, {Component} from 'react';
import store from '../store';
import {
  addCampusName,
  addCampusImage,
  addCampusDescription,
  updateCampus,
  fetchCampuses,
  newCampusEntry,
  fetchSingleCampus
} from '../store';

export default class EditCampus extends Component {
  constructor() {
    super()
    this.state = store.getState()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
    const thunk = fetchSingleCampus(this.props.match.params.id)
    store.dispatch(thunk)
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleNameChange(evt) {
    store.dispatch(addCampusName(evt.target.value))
    const newCampus = this.state.newCampusEntry;
    store.dispatch(newCampusEntry(newCampus))
  }

  handleImageChange(evt) {
    store.dispatch(addCampusImage(evt.target.value))
    const newCampus = this.state.newCampusEntry;
    store.dispatch(newCampusEntry(newCampus))
  }

  handleDescriptionChange(evt) {
    store.dispatch(addCampusDescription(evt.target.value))
    const newCampus = this.state.newCampusEntry;
    store.dispatch(newCampusEntry(newCampus))
  }

  handleSubmit(evt) {
    evt.preventDefault()
    let update;
    const campus = this.state.newCampusEntry;
    for (var updatedField in campus) {
      if (campus[updatedField]) {
        update = {
          [updatedField]: campus[updatedField]
        }
      }
    }
    const campusId = this.props.match.params.id;
    const thunk = updateCampus(campusId, update)
    store.dispatch(thunk)
    store.dispatch(updateCampus())
    this.props.history.replace('/campuses')
  }

  render() {
    const currentCampus = this.state.currentCampus
    return (<div>

      <form onSubmit={this.handleSubmit}>
        <input type='text' name='name' onChange={this.handleNameChange} placeholder={currentCampus.name}></input>
        <input type='submit' value='Update'></input>
      </form>

      <form onSubmit={this.handleSubmit}>
        <input type='text' name='imageUrl' onChange={this.handleImageChange} placeholder='Insert New Image URL'></input>
        <input type='submit' value='Update'></input>
      </form>

      <form onSubmit={this.handleSubmit}>
        <input type='text' name='description' onChange={this.handleDescriptionChange} placeholder='Add New Campus Description'></input>
        <input type='submit' value='Update'></input>
      </form>

    </div>)
  }

}
