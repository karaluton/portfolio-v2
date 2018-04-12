import $router from 'wee-routes';
import './bootstrap';
import nav from '../components/header';

$router.map([
    {
        path: '/',
        handler: [nav],
    },
]).run();
