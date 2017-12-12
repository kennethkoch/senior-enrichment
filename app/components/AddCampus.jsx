import React, {Component} from 'react';
import store from '../store';
import {
  addCampusName,
  addCampusImage,
  addCampusDescription,
  postCampus,
  fetchCampuses,
  newCampusEntry
} from '../store';

export default class AddCampus extends Component {
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
    const newCampus = this.state.newCampusEntry
    const name = this.state.newCampusEntry.name;
    const imageUrl = this.state.newCampusEntry.imageUrl;
    const description = this.state.newCampusEntry.description
    const thunk = postCampus(name, imageUrl, description);
    store.dispatch(thunk)
    store.dispatch(newCampusEntry(this.state.newCampusEntry))
    this.props.history.replace('/campuses')
  }

  render() {
    return (<div>
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='name' onChange={this.handleNameChange} placeholder='name'></input>
        <input type='text' name='imageUrl' onChange={this.handleImageChange} placeholder='imageUrl'></input>
        <input type='text' name='description' onChange={this.handleDescriptionChange} placeholder='description'></input>
        <input type='submit'></input>
      </form>

    </div>)
  }

}
