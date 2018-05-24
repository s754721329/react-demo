import React from 'react';
import { HashRouter, Router, Switch, Route, NavLink } from 'react-router-dom';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import styles from './App.css'

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

　　console.info("这是info");

　　console.debug("这是debug");

　　console.warn("这是warn");

　　console.error("这是error");
　　console.group("第一组信息");

　　　　console.log("第一组第一条");

　　　　console.log("第一组第二条");

　　console.groupEnd();

　　console.group("第二组信息");

　　　　console.log("第二组第一条");

　　　　console.log("第二组第二条");

　　console.groupEnd();