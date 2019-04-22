import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Get from './Components/Get'
import Post from './Components/Post'
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:1000/app')
      .then(res => {
        const posts = res.data;
        this.setState({ products: posts });
      })
  }

  deleteProduct(_id) {
    axios.delete(`http://localhost:1000/app/delete/${_id}`)
      .then(res => {
        alert('Product Deleted!');
      })
      window.location.reload();
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">Welcome to Products App</h2>
              <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                  <ul className="nav navbar-nav">
                    <li><Link to={'/post'}>Add Product</Link></li>
                    <li><Link to={'/get'}>View Products</Link></li>
                  </ul>
                </div>
              </nav>
              <hr />
              <Switch>
                <Route path='/post' component={Post} />
                <Route path='/get' render={() => <Get allProducts={this.state.products} deleteProduct={(e) => this.deleteProduct(e)} />} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
