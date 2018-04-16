import $ from 'wee-dom';
import $mediator from 'wee-mediator';
import { _win } from 'core/variables';
import { tween } from 'shifty';

export const scrollToAnchor = (hash) => {
    let currentHash = '';

    if (hash.indexOf('#') < 0) {
        currentHash = `#${hash}`;
    } else {
        currentHash = hash;
    }

    const $main = $('.js-main');
    const $hash = $(currentHash);

    if (currentHash && $hash.length) {
        const pos = $hash[0].offsetTop;

        tween({
            from: { position: $main[0].scrollTop - 370 },
            to: { position: pos },
            duration: 500,
            delay: 0,
            easing: 'easeOutQuad',
            step: state => _win.requestAnimationFrame(() => $main.scrollTop(state.position + 370)),
        }).then(() => {
            _win.location.hash = currentHash;
            $mediator.emit('close.search');
        });
    }
};
