// jqueryUIModule.js
import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/droppable';

export function initializeDraggableUI() {
    $('#draggableElement').draggable();
}

export function initializeDroppableUI() {
    $('#droppableArea').droppable({
        drop: function(event, ui) {
            alert('要素がドロップされました(jQueryUI)。');
        }
    });
}
