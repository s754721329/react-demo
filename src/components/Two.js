import React from 'react';
import { HashRouter, Router, Switch, Route, NavLink } from 'react-router-dom';
import One from './One';
import Three from './Three';
import Four from './Four';
import styles from '../App.css'


class Two extends React.Component{
    componentDidMount(){
        console.info( this.props.match )
    }
    render(){
        console.log(this.props.children)
        return (
            <div>Two组件222
                <p>{this.props.match.params.num}</p>
                <HashRouter>
                    <Switch>
                    <div >
                        {/* <div className={styles.my_div}> */}
                        <ul >
                            <li>
                            <NavLink to="/two" ></NavLink>
                            <NavLink className={styles.lia} to="/two/one1" >one</NavLink>
                            </li>
                            <li>
                            <NavLink className={styles.lia} to="/two/three1" >three</NavLink>
                            </li>
                            <li>
                            <NavLink className={styles.lia} to="/two/four1" >four</NavLink>
                            </li>
                        </ul>
                        {/* </div> */}
                        <div>
                            <Route exact path="/two" component={One} />
                            <Route path="/two/one1" component={One} />
                            <Route path="/two/three1" component={Three} />
                            <Route path="/two/four1" component={Four} />
                        </div>
                    </div>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}

export default Two;