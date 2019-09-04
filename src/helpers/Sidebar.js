import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import M from 'materialize-css';

class Sidebar extends Component {

  componentDidMount(){
    /*const sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav);
    const collapsible = document.querySelector('.collapsible');
    M.Collapsible.init(collapsible);*/
  }

  render() {
    return (
      <nav>
        <button>
          <i className='material-icons'>menu</i>
        </button>
        <section>
          <h2>Administrar</h2>
          <ul>
            <li>
              <Link to='/users'>
                Usuarios
              </Link>
            </li>
            <li>
              <Link to='/accounts2'>
                Cuentas
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h2>Ver</h2>
          <ul>
            <li>
              <Link to='/accounts'>
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