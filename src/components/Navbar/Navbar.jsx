import React from 'react'
import cl from './Navbar.module.css'
import FriendsSection from './FriendsSection/FriendsSection'
import { connect } from 'react-redux'

import { NavLink, withRouter } from 'react-router-dom'
import { selectNavbar } from '../../redux/reducers/navbarReducer'
import { compose } from 'redux'

const menuItems = [
  {linkTo: '/profile', id: 1, text: 'Profile', isDetached: false},
  {linkTo: '/chats', id: 2, text: 'Messages', isDetached: false},
  {linkTo: '/news', id: 3, text: 'News', isDetached: false},
  {linkTo: '/music', id: 4, text: 'Music', isDetached: false},
  {linkTo: '/', id: 7, text: 'Home', isDetached: false},
  {linkTo: '/settings', id: 5, text: 'Settings', isDetached: true},
  {linkTo: '/users', id: 6, text: 'Users', isDetached: true},
]

const NavbarItem = ({text, linkTo, isDetached}) => {
  
  return (
    <div className={isDetached ? `${cl.item} ${cl.settings}` : cl.item}>
      <NavLink exact activeClassName={cl.active} to={linkTo}>{text}</NavLink>
    </div>
  )
}

const Navbar = ({friends}) => {
  
  return (
    <nav>
      {
        menuItems.map(({linkTo, id, text, isDetached}) => <NavbarItem 
          linkTo={linkTo} 
          text={text} 
          isDetached={isDetached} 
          key={id} 
        />)
      }
      <FriendsSection friends={friends} />
    </nav>
  )
}

const mapStateToProps = (state) => ({
  friends: selectNavbar(state).friends,
});

export default compose(
  connect(mapStateToProps),
  withRouter,
)(Navbar);