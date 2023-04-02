import { Route, Switch } from 'react-router-dom'
import './App.css'
import MainPage from './pages/mainPage'
import EditUserPage from './pages/editUserPage'

const App = () => {
  return (
    <div className='container w-50 mt-4'>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/:type?' component={EditUserPage} />
      </Switch>
    </div>
  )
}

export default App
