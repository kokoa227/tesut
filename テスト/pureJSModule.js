// pureJSModule.js
export function initializeClickEvent() {
    document.getElementById('jsButton').addEventListener('click', function() {
        alert('素のJavaScriptでクリックイベントが発生しました！');
    });
}

export function initializeMouseOverEvent() {
    document.getElementById('jsHoverElement').addEventListener('mouseover', function() {
        console.log('素のJavaScriptでマウスオーバーイベントが発生しました！');
    });
}
