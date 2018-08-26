import $ from 'wee-dom';
import $events from 'wee-events';
import $screen from 'wee-screen';
import { RouteHandler } from 'wee-routes';

function navToggle() {
    $events.on('.js-toggle', 'click.toggle', () => {
        $('.js-toggle').toggleClass('-active');
        $('.js-overlay').toggleClass('-open');
    });
}

export default new RouteHandler({
    init() {
        $screen.map([
            {
                max: 2,
                callback() {
                    navToggle();
                }
            },
            {
                min: 3,
                callback() {
                    if ($('.js-overlay').hasClass('-open')) {
                        $('.js-overlay').removeClass('-open');
                        $('.js-toggle').removeClass('-active');
                    }
                    $events.off(false, 'toggle');
                }
            }
        ]);
    }
});