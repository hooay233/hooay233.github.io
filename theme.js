const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
let darkModeSwitch = document.getElementById('dark-mode-switch');
const pageWrap = document.querySelector('.page-wrap');

function walkToggle(root, isDark) {
	const all = root.querySelectorAll('*');
	for (let i = 0; i < all.length; i++) {
		all[i].classList.toggle('dark_style', isDark);
	}
	if (root.classList) {
		root.classList.toggle('dark_style', isDark);
	}
}

function setThemeStyles(isDark) {
	document.body.classList.toggle('dark-mode', isDark);
	walkToggle(document.body, isDark);
}

function updateSwitchText(isDark) {
	darkModeSwitch.textContent = isDark ? '切换到亮色模式' : '切换到暗色模式';
}

function setThemeStylesOnNode(root, isDark) {
	walkToggle(root, isDark);
}

function createTransitionOverlay(newIsDark) {
	const overlay = document.createElement('div');
	overlay.className = 'theme-transition-overlay';

	const newPanel = document.createElement('div');
	newPanel.className = 'panel';
	newPanel.style.backgroundColor = newIsDark ? '#333' : '#f0f0f0';

	const scrollX = window.scrollX || window.pageXOffset;
	const scrollY = window.scrollY || window.pageYOffset;

	const cloneWrapper = document.createElement('div');
	cloneWrapper.className = 'page-clone';
	cloneWrapper.style.position = 'absolute';
	cloneWrapper.style.top = `${-scrollY}px`;
	cloneWrapper.style.left = `${-scrollX}px`;
	cloneWrapper.style.padding = getComputedStyle(document.body).padding;
	cloneWrapper.style.width = '100%';
	cloneWrapper.style.height = '100%';
	cloneWrapper.style.boxSizing = 'border-box';

	const clone = pageWrap.cloneNode(true);
	setThemeStylesOnNode(clone, newIsDark);
	cloneWrapper.appendChild(clone);
	newPanel.appendChild(cloneWrapper);

	const scanline = document.createElement('div');
	scanline.className = 'scanline';
	newPanel.appendChild(scanline);

	overlay.appendChild(newPanel);

	return { overlay, newPanel };
}

function finishTransition(newIsDark, overlay) {
	setThemeStyles(newIsDark);
	updateSwitchText(newIsDark);
	overlay.remove();
	darkModeSwitch.classList.remove('spcbtn_disabled');
	darkModeSwitch.onclick = startThemeTransition;
}

function startThemeTransition() {
	const isDark = document.body.classList.contains('dark-mode');
	const newIsDark = !isDark;

	darkModeSwitch.classList.add('spcbtn_disabled');
	darkModeSwitch.onclick = null;

	if (isFirefox) {
		// Firefox: 跳过动画直接切换
		setThemeStyles(newIsDark);
		updateSwitchText(newIsDark);
		darkModeSwitch.classList.remove('spcbtn_disabled');
		darkModeSwitch.onclick = startThemeTransition;
		return;
	}

	const { overlay, newPanel } = createTransitionOverlay(newIsDark);
	document.body.appendChild(overlay);

	requestAnimationFrame(() => {
		newPanel.classList.add('active');
	});

	let finished = false;
	newPanel.addEventListener('transitionend', () => {
		if (!finished) {
			finished = true;
			finishTransition(newIsDark, overlay);
		}
	}, { once: true });

	setTimeout(() => {
		if (!finished) {
			finished = true;
			newPanel.style.clipPath = 'inset(0 0 0 0)';
			finishTransition(newIsDark, overlay);
		}
	}, 1500);
}

document.querySelectorAll('.spcbtn_disabled').forEach(button => {
	button.addEventListener('click', event => {
		event.preventDefault();
		button.classList.remove('shake');
		void button.offsetWidth;
		button.classList.add('shake');
	});
});

// 默认初始化：亮色模式
setThemeStyles(false);
updateSwitchText(false);
