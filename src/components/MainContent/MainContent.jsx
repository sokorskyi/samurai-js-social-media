import React, {Suspense} from 'react'
import { Redirect, Route, Switch } from "react-router-dom";

const Messages = React.lazy(() => import('./Messages/Messages'));
const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));
const News = React.lazy(() => import('./News/News'));
const Music = React.lazy(() => import('./Music/Music'));
const Settings = React.lazy(() => import('./Settings/Settings'));
const UsersContainer = React.lazy(() => import('./Users/UsersContainer'));
const Login = React.lazy(() => import('./Login/Login'));


const MainContent = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Redirect exact from='/' to="/profile" />
          <Route path="/chats" component={Messages} />
          <Route path="/profile/:id?" render={() => <ProfileContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/users" component={UsersContainer} />
          <Route path="/login" component={Login} />
        </Switch>
      </Suspense>
    </main>
  )
}

export default MainContent