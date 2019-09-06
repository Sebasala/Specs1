import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import M from 'materialize-css';

class Sidebar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    /*const sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav);
    const collapsible = document.querySelector('.collapsible');
    M.Collapsible.init(collapsible);*/
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    let navClass = "nav--closed";

    if (this.state.open === true) {
      navClass = "nav--open";
    } else {
      navClass = "nav--closed";
    }

    return (
      <nav className={navClass} >
        <button onClick={this.toggleMenu} >
          <i className='material-icons'>menu</i>
        </button>
        <section>
          <h2>Administrar</h2>
          <ul>
            <li>
              <Link onClick={this.toggleMenu} to='/login'>
                Login
              </Link>
            </li>
            <li>
              <Link onClick={this.toggleMenu} to='/users'>
                Usuarios
              </Link>
            </li>
            <li>
              <Link onClick={this.toggleMenu} to='/accounts2'>
                Cuentas
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h2>Ver</h2>
          <ul>
            <li>
              <Link onClick={this.toggleMenu} to='/accounts'>
                Cuentas
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {  };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));