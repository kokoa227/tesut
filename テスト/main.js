// main.js
import { initializeClickEvent, initializeMouseOverEvent } from './pureJSModule.js';
import { initializeJQueryClickEvent, initializeJQueryHoverEvent } from './jqueryModule.js';
import { initializeDraggableUI, initializeDroppableUI } from './jqueryUIModule.js';

// 素のJavaScriptでのイベント操作
initializeClickEvent();
initializeMouseOverEvent();

// jQueryイベント操作
initializeJQueryClickEvent();
initializeJQueryHoverEvent();

// jQueryUIによるユーザーインターフェイス
initializeDraggableUI();
initializeDroppableUI();
