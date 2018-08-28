import $router from 'wee-routes';
import './bootstrap';
import nav from '../components/nav';

$router.map([
    {
        path: '/',
        handler: [nav],
    },
    {
        path: '/portfolio',
        handler: [nav],
    },
]).run();
