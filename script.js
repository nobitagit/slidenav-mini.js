
(function(document, window){

	var nav = document.getElementById('nav'),
	    bt = document.getElementById('clicker'),
	    menu = document.getElementById('list'),
	    isOpen = false,
	    st = window.getComputedStyle(menu, null);

	console.log( st.getPropertyValue('height') );

	//menu.style.maxHeight = st.getPropertyValue('height');
	//menu.classList.add = 'closed';

	function setup(){
		menu.style.maxHeight = getHeight();
		classSwitch(menu, 'add', 'closed');
	}

	function getHeight(){
		return st.getPropertyValue('height')
	}

	function classSwitch(el, act, cls){
		el.classList[act](cls);
	}

	function changeState(){
		isOpen = !isOpen;
	}

	function listen(){
		bt.addEventListener('click', function(){
		   classSwitch(menu, 'toggle', 'closed');
		   changeState();
		}, false);

		window.addEventListener('resize', function(){
			//menu.style.opacity = 0;
			//classSwitch(menu, 'remove', 'closed')
			if ( isOpen ){
				menu.style.maxHeight = '100%';
				// consider using a timeout to avoid continuous firing when resizing
				//menu.style.maxHeight = getHeight();
				//menu.offsetWidth
			}
		}, false);
	}


// http://stackoverflow.com/questions/5489946/jquery-how-to-wait-for-the-end-or-resize-event-and-only-then-perform-an-ac
// this is a way to debounce the event, look also for underscore _.debounce
/*
var rtime = new Date(1, 1, 2000, 12,00,00);
var timeout = false;
var delta = 200;
$(window).resize(function() {
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
    }
});

function resizeend() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
    } else {
        timeout = false;
        alert('Done resizing');
    }               
}

*/

	function init(){
		setup();
		listen();		
	}

	init();



})(document, window, undefined);