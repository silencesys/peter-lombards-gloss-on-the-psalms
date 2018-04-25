import PsalmIndex from './pages/PsalmIndex'
import PsalmSingle from './pages/PsalmSingle'

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
    }
]