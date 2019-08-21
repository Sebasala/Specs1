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
      <div>
        <ul>
          <li>
            <ul>
              <li>
                <div>
                  <i>add</i>
                  Administración
                </div>
                <div>
                  <ul>
                    <li style={{ paddingLeft: 64 }}>
                      <Link to='/users'>
                        Usuario
                      </Link>
                    </li>
                    <li style={{ paddingLeft: 64 }}>
                      <Link to='/accounts2'>
                        Cuenta
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/accounts'>
              Cuentas
            </Link>
          </li>
        </ul>
        <Link to='#'>
          <i className='material-icons'>menu</i>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {  };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));