import { HashRouter, Switch, Route } from 'react-router-dom'
import { REPO_NAME } from '@constants/repo'
import routesConfig from '@routes/routesConfig'
import Header from '@components/Header'
import styles from './App.module.css'

const App = () => {
  return (
    <>
      <HashRouter basename={`/${REPO_NAME}/`}>
        <div className = {styles.wrapper}>
          <Header />

          <Switch>
            {routesConfig.map((route, index) => (
              <Route 
                key = {index}
                path = {route.path} 
                exact = {route.exact}
                component = {route.component}
               />
            ))}
          </Switch>
        </div>
      </HashRouter>
    </>
  )
}
  

export default App


