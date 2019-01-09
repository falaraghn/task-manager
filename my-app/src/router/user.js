import UserList from '../components/user/List'
import UserCreate from '../components/user/Create'
import UserUpdate from '../components/user/Update'
import UserShow from '../components/user/Show'

export default [
    {name: 'UserList', path: '/users/', component: UserList, meta: {role: 'admin'}},
    {name: 'UserCreate', path: '/users/create', component: UserCreate, meta: {role: 'admin'}},
    {name: 'UserUpdate', path: '/users/edit/:id', component: UserUpdate, meta: {role: 'admin'}},
    {name: 'UserShow', path: '/users/show/:id', component: UserShow, meta: {role: 'admin'}}
]
