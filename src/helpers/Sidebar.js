import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  logoutUser,
  toggleMenuVisibility
} from '../actions/index';
import { getUser } from '../selectors/user';
import { getMenuVisibility } from '../selectors/ui';

class Sidebar extends Component {

  handleLogoutUser = () => {
    const { logoutUser, toggleMenuVisibility } = this.props;
    logoutUser();
    toggleMenuVisibility();
  }

  render() {
    const { user, menuVisibility, toggleMenuVisibility } = this.props;
    let navClass = 'nav--closed';

    if (menuVisibility) {
      navClass = 'nav--open';
    } else {
      navClass = 'nav--closed';
    }

    return (
      <nav className={navClass} >
        <button onClick={toggleMenuVisibility} >
          <i className='material-icons'>menu</i>
        </button>
        <section>
          <h2>Administrar</h2>
          <ul>
            <li>
              {
                (user && Object.values(user).length > 0)
                  ? (<Link onClick={this.handleLogoutUser} to='#'>
                      Logout
                    </Link>)
                  : (<Link onClick={toggleMenuVisibility} to='/login'>
                      Login
                    </Link>)
              }
            </li>
            <li>
              <Link onClick={toggleMenuVisibility} to='/gif'>
                Gif
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenuVisibility} to='/users'>
                Usuarios
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenuVisibility} to='/accounts2'>
                Cuentas
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenuVisibility} to='/new/spec/creative'>
                Crear Spec
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h2>Ver</h2>
          <ul>
            <li>
              <Link onClick={toggleMenuVisibility} to='/accounts'>
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
  user: getUser(state),
  menuVisibility: getMenuVisibility(state),
});

const mapDispatchToProps = { logoutUser, toggleMenuVisibility };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));