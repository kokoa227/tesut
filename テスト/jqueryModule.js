// jqueryModule.js
import $ from 'jquery';

export function initializeJQueryClickEvent() {
    $('#jqueryButton').on('click', function() {
        alert('jQueryでクリックイベントが発生しました！');
    });
}

export function initializeJQueryHoverEvent() {
    $('#jqueryHoverElement').hover(function() {
        console.log('jQueryでマウスオーバーイベントが発生しました！');
    });
}
