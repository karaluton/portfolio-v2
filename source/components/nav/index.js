import $ from 'wee-dom';
import $events from 'wee-events';
import { scrollToAnchor } from '../../scripts/helpers';
import { RouteHandler } from 'wee-routes';

function scroll() {
    $events.on('.js-anchor', 'click.scroll', (e, el) => {
        scrollToAnchor($(el).attr('href'));

        e.preventDefault();
    });
}

export default new RouteHandler({
    init() {
        scroll();
    },
    unload: 'scroll'
});