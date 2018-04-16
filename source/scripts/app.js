import $router from 'wee-routes';
import './bootstrap';
import header from '../components/header';
import scroll from '../components/nav';

$router.map([
    {
        path: '/',
        handler: [header, scroll],
    },
]).run();
