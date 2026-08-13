// Projects page script (extracted from inline HTML)
const projects = [
    {
        id: 'vectras',
        name: 'Vectras VM',
        stack: 'Java/Kotlin, QEMU, Android',
        type: 'Android App',
        status: 'active',
        icon: { type: 'img', src: 'Textures/vectras.jpeg' },
        description: "Android virtual machine app that runs Windows, Linux, macOS, and Android via QEMU — not just an HTML shell, but a full guest OS with its own programs. Core contributor with 2,400+ GitHub stars, 215 forks, and a live Google Play Store release used by thousands worldwide.",
        bullets: [
            "Built and maintain <strong>Vectras VM Roms</strong>, the companion repo of tested OS images (40+ stars), cutting setup friction for new users.",
            "Shipped <strong>Vectras Tool Box</strong>, a utility for configuring and managing VM environments.",
            "Provide ongoing user support and troubleshooting in the project's community channels."
        ],
        links: [{ label: 'GitHub', url: 'https://github.com/ahmedbarakat207?tab=repositories', icon: 'fa-brands fa-github' }]
    },
    {
        id: 'fci',
        name: 'FCI Exam System + AI Reviewer',
        stack: 'Full-Stack, AI Integration',
        type: 'Web Platform',
        status: 'completed',
        icon: { type: 'img', src: 'Textures/program.ico' },
        description: "Full online exam platform built end to end for the Faculty of Computers and Information — exam creation, student submissions, and grading workflows.",
        bullets: [
            "Integrated an AI-powered code reviewer that auto-evaluates student submissions for correctness, style, and common errors before manual grading.",
            "Owned the system independently: data models, backend logic, and both student- and instructor-facing interfaces."
        ],
        links: []
    },
    {
        id: 'nespc',
        name: 'NESPC',
        stack: 'C++17, SDL2',
        type: 'Emulator',
        status: 'completed',
        icon: { type: 'img', src: 'Textures/program.ico' },
        description: "Cycle-accurate NES emulator for macOS built from scratch, including a full MOS 6502 CPU core, addressing-mode logic, and instruction set.",
        bullets: [
            "Implemented a PPU (sprite/background rendering) and a 4-channel APU (square, triangle, noise, DMC), reproducing original hardware timing.",
            "Supports four cartridge mappers (NROM, MMC1, CNROM, MMC3), covering most of the commercial NES library out of the box.",
            "Graphical ROM launcher with recent-ROM tracking, rebindable two-player controls, and persistent JSON config."
        ],
        links: [{ label: 'github.com/ahmedbarakat207/nespc', url: 'https://github.com/ahmedbarakat207/nespc', icon: 'fa-brands fa-github' }]
    },
    {
        id: 'espllm',
        name: 'espllm',
        stack: 'C++, PlatformIO, Python',
        type: 'Embedded / ML',
        status: 'completed',
        icon: { type: 'img', src: 'Textures/program.ico' },
        description: "Bare-metal C++ inference engine that runs a quantized Mixture-of-Experts transformer directly on ESP32/ESP8266 microcontrollers — zero heap allocation, under 90KB of active inference SRAM.",
        bullets: [
            "Implemented RoPE, Multi-Query Attention, SwiGLU, RMSNorm, and sparse top-1 MoE routing (16–20 experts/layer) from scratch in C++.",
            "Built a custom group-wise asymmetric INT4 quantization scheme and lookup-table matrix-multiply kernel, fitting the model in under 3MB of flash.",
            "Engineered watchdog-safe execution slicing for the ESP8266 NonOS SDK to avoid hardware resets during inference.",
            "Built the full Python-to-C++ toolchain: custom BPE tokenizer, quantization/export, and a one-command flashing workflow — 23 stars, 3 forks."
        ],
        links: [{ label: 'github.com/ahmedbarakat207/espllm', url: 'https://github.com/ahmedbarakat207/espllm', icon: 'fa-brands fa-github' }]
    },
    {
        id: 'nano-alpine',
        name: 'nano-alpine',
        stack: 'x86 Assembly (NASM), C, Python, Shell',
        type: 'OS / Bootloader',
        status: 'completed',
        icon: { type: 'img', src: 'Textures/program.ico' },
        description: "Minimalist Linux distro with a custom two-stage MBR/El-Torito bootloader written entirely in x86 assembly, replacing GRUB/ISOLINUX end to end.",
        bullets: [
            "16-bit real-mode Stage 1 MBR loader plus a Stage 2 loader that switches to Unreal Mode and patches the Linux kernel boot protocol directly.",
            "Ships both i386 and x86_64 targets — the 32-bit build fits a bootable kernel, initramfs, and BusyBox userspace on a 1.41MB floppy image.",
            "Zero-dependency POSIX-shell package manager (<code>apk</code>) compatible with Alpine's interface, plus Python tooling for bootloader patching and ISO generation.",
            "Automated build pipeline via shell scripts and GitHub Actions — 15 stars, 1 fork."
        ],
        links: [{ label: 'github.com/ahmedbarakat207/nano-alpine', url: 'https://github.com/ahmedbarakat207/nano-alpine', icon: 'fa-brands fa-github' }]
    },
    {
        id: 'badapple',
        name: 'Bad Apple SPI OLED',
        stack: 'C',
        type: 'Embedded / Firmware',
        status: 'completed',
        icon: { type: 'img', src: 'Textures/program.ico' },
        description: "ESP32 firmware that decodes and renders a full video, frame-by-frame, on a 0.96\" SPI OLED display in real time, with a custom low-level SPI driver and frame-buffering pipeline built to hit tight memory and bandwidth budgets.",
        bullets: [],
        links: [{ label: 'github.com/ahmedbarakat207/bad-apple-spi-oled-display', url: 'https://github.com/ahmedbarakat207/bad-apple-spi-oled-display', icon: 'fa-brands fa-github' }]
    },
    {
        id: 'savage',
        name: 'Savage',
        stack: 'Python, PyTorch, LoRA, MLX',
        type: 'ML / Fine-tuning',
        status: 'completed',
        icon: { type: 'img', src: 'Textures/program.ico' },
        description: "Text-to-SVG pipeline that fine-tunes Qwen2.5-Coder-3B to natively output detailed, multi-color vector illustrations from text prompts — treating SVG generation as a pure language-modeling task instead of diffusion or pixel-based methods.",
        bullets: [
            "Custom data engine vectorizes photo datasets (e.g. CIFAR-10) into posterized, multi-tone SVGs, optimized to fit a 64,000-character LLM context window.",
            "LoRA-based parameter-efficient fine-tuning with local (CUDA/MPS) and Kaggle (T4x2) training support.",
            "High-speed inference engine on Apple's MLX framework, with automatic fallback to HuggingFace Transformers."
        ],
        links: []
    },
    {
        id: 'andstation',
        name: 'Andstation 3',
        stack: 'Android, Emulation',
        type: 'Emulator',
        status: 'discontinued',
        icon: { type: 'img', src: 'Textures/as3.png' },
        description: "The first PlayStation 3 emulator for Android, based on RPCS3 and using the FEX emulation layer. Discontinued due to lack of free time to continue the project.",
        bullets: [],
        links: []
    },
    {
        id: 'miku',
        name: 'Miku OS',
        stack: 'Linux (Arch-based)',
        type: 'OS Distro',
        status: 'progress',
        icon: { type: 'img', src: 'Textures/miku.png' },
        description: "A Linux distro based on Arch Linux, inspired by the anime character Hatsune Miku.",
        bullets: [],
        links: []
    },
    {
        id: 'ahmedos',
        name: 'Ahmed OS',
        stack: 'C#',
        type: 'Operating System',
        status: 'completed',
        icon: { type: 'img', src: 'Textures/ahmedos.png' },
        description: "A full operating system built from scratch in C#. TUI-based, made for fun.",
        bullets: [],
        links: []
    },
    {
        id: 'kitsune',
        name: 'Kitsune Mask',
        stack: 'Android, Root',
        type: 'Root Tool',
        status: 'progress',
        icon: { type: 'img', src: 'Textures/kitsune.png' },
        description: "A Magisk Delta fork with the newest Magisk 30.6 release commits and other features.",
        bullets: ["Helped build the project website and implement ReZygisk support for Kitsune Mask."],
        links: []
    },
    {
        id: 'hash',
        name: 'Hash',
        stack: 'C++',
        type: 'Shell',
        status: 'completed',
        icon: { type: 'img', src: 'Textures/hash.png' },
        description: "A shell for Linux built in C++ with a cool design, made for educational purposes.",
        bullets: [],
        links: []
    }
];

const statusLabel = {
    active: 'ACTIVE',
    progress: 'IN-PROGRESS',
    completed: 'COMPLETED',
    discontinued: 'DISCONTINUED'
};
const tagClass = {
    active: 'tag-active',
    progress: 'tag-progress',
    completed: 'tag-completed',
    discontinued: 'tag-discontinued'
};

const iconGrid = document.getElementById('iconGrid');
const detailWindow = document.getElementById('detailWindow');
const detailsPane = document.getElementById('detailsPane');
const statCount = document.getElementById('statCount');
const statSelected = document.getElementById('statSelected');

statCount.textContent = projects.length + ' object(s)';

function iconMarkup(icon) {
    return icon.type === 'img'
        ? '<img src="' + icon.src + '" alt="">'
        : '<i class="' + icon.cls + '"></i>';
}

function renderGrid() {
    iconGrid.innerHTML = projects.map(function(p){
        return '<div class="icon-item" data-id="' + p.id + '" onclick="selectProject(\''+p.id+'\')">'
            + '<div class="icon-visual">' + iconMarkup(p.icon) + '</div>'
            + '<div class="icon-label">' + p.name + '</div>'
            + '</div>';
    }).join('');
}

function selectProject(id) {
    const p = projects.find(function(x){ return x.id === id; });
    if (!p) return;

    const bulletsHtml = p.bullets.length
        ? '<ul>' + p.bullets.map(function(b){ return '<li>' + b + '</li>'; }).join('') + '</ul>'
        : '';

    const linksHtml = p.links.length
        ? '<div class="detail-links">' + p.links.map(function(l){ return '<a href="'+l.url+'" target="_blank"><i class="'+l.icon+'"></i> '+l.label+'</a>'; }).join('') + '</div>'
        : '';

    detailsPane.innerHTML =
        '<div class="detail-header">'
        + '<div class="detail-icon">' + iconMarkup(p.icon) + '</div>'
        + '<div class="detail-title">'
        + '<h1>' + p.name + '</h1>'
        + '<div class="detail-stack">' + p.stack + '</div>'
        + '<div class="detail-tag ' + tagClass[p.status] + '">STATUS: ' + statusLabel[p.status] + '</div>'
        + '</div>'
        + '</div>'
        + '<div class="detail-body">'
        + '<p>' + p.description + '</p>'
        + bulletsHtml
        + linksHtml
        + '</div>';

    statSelected.textContent = p.name + ' — ' + p.type;

    const bullets = p.bullets && p.bullets.length ? '<ul>' + p.bullets.map(function(b){ return '<li>'+b+'</li>'; }).join('') + '</ul>' : '';
    const links = p.links && p.links.length ? '<div class="detail-links">' + p.links.map(function(l){ return '<a href="'+l.url+'" target="_blank"><i class="'+l.icon+'"></i> '+l.label+'</a>'; }).join('') + '</div>' : '';
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + p.name + '</title>'
        + '<style>html,body{height:100%;margin:0;background:#c0c0c0;color:#000;font-family:Tahoma, Arial, sans-serif} '
        + '.ie-window{box-sizing:border-box;height:100%;display:flex;flex-direction:column;border:3px solid #000;} '
        + '.ie-title{height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 6px;background:linear-gradient(#00008b,#2b51a6);color:#fff;font-weight:bold;border-bottom:2px solid #000;font-size:12px} '
        + '.ie-title .title-left{display:flex;align-items:center;gap:8px} .ie-logo{width:18px;height:16px;background:#fff;color:#000;display:flex;align-items:center;justify-content:center;font-weight:bold;border:1px solid #000} '
        + '.ie-controls button{width:16px;height:14px;margin-left:6px;border:1px solid #000;background:#cfcfcf;color:#000;font-weight:bold;line-height:12px;cursor:default} '
        + '.ie-toolbar{display:flex;align-items:center;gap:6px;padding:4px;background:#ddd;border-top:1px solid #fff;border-bottom:1px solid #808080} '
        + '.nav-btn{width:20px;height:20px;border:2px solid #fff;border-right:2px solid #808080;background:#eaeaea;display:flex;align-items:center;justify-content:center;font-size:12px;color:#000;cursor:pointer} '
        + '.ie-address{flex:1;border:2px inset #fff;padding:3px 6px;background:#fff;font-size:12px;height:20px} '
        + '.ie-content{flex:1;overflow:auto;background:#fff;padding:16px;color:#000;border-top:1px solid #808080} '
        + '.ie-content h1{margin:0 0 8px 0;color:#000080;font-size:28px;font-weight:bold} .detail-stack{font-style:italic;color:#444;margin-bottom:12px;font-size:12px} '
        + '.ie-content p{font-size:13px;line-height:1.6;margin:8px 0} ul{margin:8px 0 0 20px} li{margin-bottom:6px} '
        + '.detail-links{margin-top:14px} .detail-links a{color:#0000ee;text-decoration:underline;padding:4px 6px;background:transparent;border:none} '
        + '</style>'
        + '</head><body><div class="ie-window">'
        + '<div class="ie-toolbar"><div id="nav-back" class="nav-btn">◀</div><div id="nav-fwd" class="nav-btn">▶</div><div id="nav-refresh" class="nav-btn">⟳</div><input class="ie-address" value="about:projects/' + p.id + '"></div>'
        + '<div class="ie-content"><h1>' + p.name + '</h1><div class="detail-stack">' + p.stack + '</div><div>' + p.description + '</div>' + bullets + links + '</div>'
        + '<script> (function(){ try{ var __static = document.documentElement.outerHTML; function attach(){ var back=document.getElementById("nav-back"), fwd=document.getElementById("nav-fwd"), ref=document.getElementById("nav-refresh"), addr=document.querySelector(".ie-address"); if(ref) ref.addEventListener("click", function(){ try{ document.open(); document.write(__static); document.close(); }catch(e){} }); if(back) back.addEventListener("click", function(){ try{ history.back(); }catch(e){} }); if(fwd) fwd.addEventListener("click", function(){ try{ history.forward(); }catch(e){} }); if(addr) addr.addEventListener("keydown", function(e){ if(e.key===\'Enter\'){ try{ alert(\'Navigation not supported in this demo: \' + addr.value); }catch(ex){} } }); } attach(); }catch(e){} })(); </script>'
        + '</div></body></html>';

    // If embedded in the parent desktop, ask parent to open the window via postMessage
    try {
        if (window.parent && window.parent !== window) {
            window.parent.postMessage({ type: 'openProjectDetail', title: p.name, html: html }, '*');
            return;
        }
    } catch (err) {
        // fall through to popup fallback
    }

    try {
        const popup = window.open('', '_blank', 'width=820,height=620');
        if (popup && popup.document) {
            popup.document.open(); popup.document.write(html); popup.document.close();
            return;
        }
    } catch (e) {
    }

    detailWindow.style.display = 'flex';
    detailWindow.style.zIndex = (1000 + Date.now()%1000);
}

renderGrid();

// Floating window drag + close
(function(){
    const fw = document.getElementById('detailWindow');
    const title = document.getElementById('fwTitle');
    const closeBtn = document.getElementById('fwClose');
    var dragging = false, startX=0, startY=0, startL=0, startT=0;

    title.addEventListener('mousedown', function(e){
        dragging = true;
        startX = e.clientX; startY = e.clientY;
        const rect = fw.getBoundingClientRect();
        startL = rect.left; startT = rect.top;
        document.body.style.userSelect = 'none';
    });
    document.addEventListener('mousemove', function(e){
        if(!dragging) return;
        const dx = e.clientX - startX; const dy = e.clientY - startY;
        fw.style.left = (startL + dx) + 'px';
        fw.style.top = (startT + dy) + 'px';
    });
    document.addEventListener('mouseup', function(){ dragging=false; document.body.style.userSelect='auto'; });

    closeBtn.addEventListener('click', function(){ fw.style.display='none'; });
})();
