let zIndexCounter = 100;
let windows = {};
let activeWindowId = null;

// State tracking for Drag & Resize
let isDragging = false, isResizing = false;
let currentWin = null;
let startX, startY, startWidth, startHeight, startLeft, startTop;

// Check if device is mobile (Width less than 768px)
const isMobile = window.innerWidth <= 768;

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('clock').innerText = timeString;
}
setInterval(updateClock, 1000);
updateClock();

function toggleStartMenu() {
    document.getElementById('start-menu').classList.toggle('open');
}

function openWindow(title, url) {
    const id = 'win-' + Date.now();
    zIndexCounter++;

    const win = document.createElement('div');
    win.className = 'window active';
    win.id = id;
    win.style.zIndex = zIndexCounter;

    // --- MOBILE VS DESKTOP LOGIC ---
    if (isMobile) {
        // Full screen by default on phone
        win.style.left = '0';
        win.style.top = '0';
        win.style.width = '100vw';
        win.style.height = 'calc(100vh - 30px)'; // 30px is your taskbar height
    } else {
        // Cascading windows on desktop
        win.style.left = (40 + (Object.keys(windows).length * 20)) + 'px';
        win.style.top = (40 + (Object.keys(windows).length * 20)) + 'px';
        win.style.width = '400px';
        win.style.height = '300px';
    }

    win.innerHTML = `
        <div class="title-bar" ${isMobile ? '' : `onmousedown="startDrag(event, '${id}')"`}>
            <div class="window-title">${title}</div>
            <div class="window-controls">
                <button class="control-btn" onclick="minimizeWindow('${id}')">_</button>
                ${isMobile ? '' : `<button class="control-btn" onclick="maximizeWindow('${id}')">□</button>`}
                <button class="control-btn" onclick="closeWindow('${id}')">×</button>
            </div>
        </div>
        <div class="window-content" onmousedown="focusWindow('${id}')">
            <iframe src="${url}" frameborder="0" style="width:100%; height:100%;"></iframe>
            ${isMobile ? '' : `<div class="resize-handle" onmousedown="initResize(event, '${id}')"></div>`}
        </div>
    `;

    document.body.appendChild(win);
    
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item active';
    taskItem.id = `task-${id}`;
    taskItem.innerHTML = title;
    taskItem.onclick = () => toggleWindow(id);
    document.getElementById('task-manager').appendChild(taskItem);

    windows[id] = { 
        element: win, 
        taskBtn: taskItem, 
        state: isMobile ? 'maximized' : 'normal',
        oldPos: { left: '40px', top: '40px', width: '400px', height: '300px' } 
    };
    
    focusWindow(id);
    document.getElementById('start-menu').classList.remove('open');
}

// --- Window State Functions ---

function closeWindow(id) {
    if(!windows[id]) return;
    windows[id].element.remove();
    windows[id].taskBtn.remove();
    delete windows[id];
}

function minimizeWindow(id) {
    const win = windows[id];
    win.element.style.display = 'none';
    win.state = 'minimized';
    win.element.classList.remove('active');
    win.taskBtn.classList.remove('active');
}

function maximizeWindow(id) {
    const win = windows[id];
    const el = win.element;

    if (win.state === 'maximized') {
        el.style.left = win.oldPos.left;
        el.style.top = win.oldPos.top;
        el.style.width = win.oldPos.width;
        el.style.height = win.oldPos.height;
        win.state = 'normal';
    } else {
        win.oldPos = { left: el.style.left, top: el.style.top, width: el.style.width, height: el.style.height };
        el.style.left = '0';
        el.style.top = '0';
        el.style.width = '100vw';
        el.style.height = 'calc(100vh - 30px)';
        win.state = 'maximized';
    }
}

function toggleWindow(id) {
    const win = windows[id];
    if (win.state === 'minimized') {
        win.element.style.display = 'flex';
        win.state = 'normal';
        focusWindow(id);
    } else if (activeWindowId === id) {
        minimizeWindow(id);
    } else {
        focusWindow(id);
    }
}

function focusWindow(id) {
    zIndexCounter++;
    activeWindowId = id;
    Object.keys(windows).forEach(key => {
        windows[key].element.classList.remove('active');
        windows[key].taskBtn.classList.remove('active');
    });
    windows[id].element.style.zIndex = zIndexCounter;
    windows[id].element.classList.add('active');
    windows[id].taskBtn.classList.add('active');
}

// --- Drag & Resize Core Logic ---

function startDrag(e, id) {
    if(e.target.closest('.window-controls')) return;
    if(windows[id].state === 'maximized') return; // Can't drag full-screen

    focusWindow(id);
    isDragging = true;
    currentWin = windows[id].element;
    
    startX = e.clientX;
    startY = e.clientY;
    startLeft = parseInt(currentWin.style.left);
    startTop = parseInt(currentWin.style.top);

    // Prevent iframe from stealing focus during drag
    currentWin.querySelector('iframe').style.pointerEvents = 'none';
}

function initResize(e, id) {
    e.stopPropagation(); 
    focusWindow(id);
    isResizing = true;
    currentWin = windows[id].element;

    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(currentWin.style.width);
    startHeight = parseInt(currentWin.style.height);

    currentWin.querySelector('iframe').style.pointerEvents = 'none';
}

document.addEventListener('mousemove', (e) => {
    if (!currentWin) return;

    if (isDragging) {
        currentWin.style.left = (startLeft + e.clientX - startX) + 'px';
        currentWin.style.top = (startTop + e.clientY - startY) + 'px';
    } 
    else if (isResizing) {
        const newWidth = startWidth + (e.clientX - startX);
        const newHeight = startHeight + (e.clientY - startY);
        
        if (newWidth > 200) currentWin.style.width = newWidth + 'px';
        if (newHeight > 150) currentWin.style.height = newHeight + 'px';
    }
});

document.addEventListener('mouseup', () => {
    if (currentWin) {
        currentWin.querySelector('iframe').style.pointerEvents = 'auto';
    }
    isDragging = false;
    isResizing = false;
    currentWin = null;
});