import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { CategoryList } from './pages/CategoryList'
import { PhotoList } from './pages/PhotoList'
import { PhotoDetail } from './pages/PhotoDetail'

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1 className="showsILike">
            <Link to="/">Shows that I Like</Link>
          </h1>
          <h2>A Photo Gallery of Shows</h2>
          <nav>
            <ul>
              <li>
                <Link to="/1">Page 1</Link>
              </li>
              <li>
                <Link to="/2">Page 2</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={CategoryList}>
            Home
          </Route>
          <Route exact path="/:category" component={PhotoList}></Route>
          <Route exact path="/GoldenGirls/0" component={PhotoDetail}></Route>
          <Route exact path="/BigBangTheory/0" component={PhotoDetail}></Route>
          <Route path="*">Not Found</Route>
        </Switch>
      </>
    )
  }
}
export default App
