import ProjectList from '../components/project/List'
import ProjectCreate from '../components/project/Create'
import ProjectUpdate from '../components/project/Update'
import ProjectShow from '../components/project/Show'

export default [
  { name: 'ProjectList', path: '/projects/', component: ProjectList },
  { name: 'ProjectCreate', path: '/projects/create', component: ProjectCreate },
  { name: 'ProjectUpdate', path: '/projects/edit/:id', component: ProjectUpdate },
  { name: 'ProjectShow', path: '/projects/show/:id', component: ProjectShow }
]
