import UserList from '../components/user/List'
import UserCreate from '../components/user/Create'
import UserUpdate from '../components/user/Update'
import UserShow from '../components/user/Show'

export default [
  { name: 'UserList', path: '/users/', component: UserList },
  { name: 'UserCreate', path: '/users/create', component: UserCreate },
  { name: 'UserUpdate', path: '/users/edit/:id', component: UserUpdate },
  { name: 'UserShow', path: '/users/show/:id', component: UserShow }
]
