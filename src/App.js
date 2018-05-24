import React from 'react';
import { HashRouter, Router, Switch, Route, NavLink } from 'react-router-dom';
import { createStore } from 'redux';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import styles from './App.css'

function counter( state = {}, action ){
  switch( action.type ){
    // case 'increment':
    //   return state + 1;
    // case 'decrement':
    //   return state - 1; 
    default:
      return state = action
  }
}

const store = createStore(counter);

store.dispatch( {type:'increment'} );
store.dispatch( {type:'increment'} );
store.dispatch( {type:'decrement'} );
store.dispatch( {type:'increment',name:"jack"} );

console.log( store.getState() )

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <div className={styles.mainDiv}>
            {/* <div className={styles.my_div}> */}
              <ul className={styles.mainDivUl}>
                <li>
                  <NavLink to="/" ></NavLink>
                  <NavLink className={styles.lia} to="/one" >one</NavLink>
                </li>
                <li>
                  <NavLink className={styles.lia} to="/two/3" >two</NavLink>
                </li>
                <li>
                  <NavLink className={styles.lia} to="/three" >three</NavLink>
                </li>
                <li>
                  <NavLink className={styles.lia} to="/four" >four</NavLink>
                </li>
              </ul>
            {/* </div> */}
            <div>
              <Route exact path="/" component={One} />
              <Route path="/one" component={One} />
              <Route path="/two/:num" component={Two} />
              <Route path="/three" component={Three} />
              <Route path="/four" component={Four} />
            </div>
          </div>
        </Switch>
      </HashRouter>
    )
  }
}