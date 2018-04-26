import PsalmIndex  from './pages/PsalmIndex'
import PsalmSingle from './pages/PsalmSingle'
import PsalmSearch from './pages/PsalmSearch'

export default [
    {
        path: '/',
        name: 'home',
        component: PsalmIndex
    },
    {
        path: '/psalm/:id',
        name: 'psalm.single',
        component: PsalmSingle
    },
    {
        path: '/search/:query',
        name: 'psalm.search',
        component: PsalmSearch
    }
]