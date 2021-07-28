function changeColor() {
	const cc = document.createElement('link');
	cc.setAttribute("rel","stylesheet");
	cc.setAttribute("type","text/css");
	cc.setAttribute("href","styles.css");
	// cc.textContent = '变为红色！';
	document.body.appendChild(cc)
}
function restoreColor() {
	const rc = document.createElement('link');
	rc.setAttribute("rel","stylesheet");
	rc.setAttribute("type","text/css");
	rc.setAttribute("href","styles1.css");
	// rc.textContent = '变为黑色！';
	document.body.appendChild(rc)
}

const change = document.querySelector('.change');
const restore = document.querySelector('.restore');

change.addEventListener('click',changeColor);
restore.addEventListener('click',restoreColor);