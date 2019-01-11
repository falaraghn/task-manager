import ProjectList from '../components/project/List'
import ProjectCreate from '../components/project/Create'
import ProjectUpdate from '../components/project/Update'
import ProjectShow from '../components/project/Show'
import Scheduler from '../components/timeline/Scheduler'

export default [
    {name: 'ProjectList', path: '/projects/', component: ProjectList, meta: {role: 'user'}},
    {name: 'ProjectScheduler', path: '/projects-scheduler/', component: Scheduler, meta: {role: 'user'}},
    {name: 'ProjectCreate', path: '/projects/create', component: ProjectCreate, meta: {role: 'user'}},
    {name: 'ProjectUpdate', path: '/projects/edit/:id', component: ProjectUpdate, meta: {role: 'user'}},
    {name: 'ProjectShow', path: '/projects/show/:id', component: ProjectShow, meta: {role: 'user'}}
]
