import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import photoData from '../Photos.json'

export class PhotoList extends Component {
  render() {
    const category = this.props.match.params.category
    console.log(this.props.match.params.category)

    const photoListInfo = photoData[category]
    console.log(photoListInfo)

    return (
      <>
        {/* <h1 className="title">This is the ${photoListInfo.title}!</h1>
        <h2>{photoListInfo.description}</h2> */}
      </>
    )
  }
}
export default PhotoList
