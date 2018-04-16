import $ from 'wee-dom';
import $events from 'wee-events';
import { _win, _body } from 'core/variables';
import { $nav, $aboutMe } from './elements';
import { active } from '../../scripts/classes';
import { RouteHandler } from 'wee-routes';

const $win = $(_win);
const $body = $(_body);

function fixHeader() {
    let topOfNav = $nav.offset().top;

    $events.on($win, 'scroll.fixnav', () => {
        if ($win.scrollTop() >= topOfNav) {
            $aboutMe.css('padding-top', $nav.height() + 'px');
            $nav.addClass(active);
        } else {
            $aboutMe.css('padding-top', 0);
            $nav.removeClass(active);
        }
    });
}

export default new RouteHandler({
    init() {
        fixHeader();
        console.log('%c Oh, hey there!', 'color: #f2cccf');
        console.log('%c Interested in what I do?', 'color: #f2cccf');
        console.log('%c Email me at karaluton@gmail.com 👍🏻', 'color: #f2cccf');
    },
    unload: 'fixnav'
});