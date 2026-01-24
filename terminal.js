const input = document.getElementById('cmd-input');
const output = document.getElementById('output');
const apps = {
    'premium': { title: 'Premium', path: 'premium.html' }, 
    'about': { title: 'About', path: 'about.html' },
    'download': { title: 'Download', path: 'download.html' },
    'gallery': { title: 'Gallery', path: 'gallary.html' },
    'policies': { title: 'Policies', path: 'policies.html' },
    'credits': { title: 'Credits', path: 'credits.html' },
    'terminal': { title: 'Terminal', path: 'terminal.html' },
    'minecraft': { title: 'Minecraft', path: 'https://classic.minecraft.net/' },
    'doom': { title: 'Doom', path: 'doom/index.html' },
};

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const command = input.value.trim();
        printLine(`user@vectras:~$ ${command}`);
        processCommand(command);
        input.value = '';
        window.scrollTo(0, document.body.scrollHeight);
    }
});

function printLine(text) {
    output.innerHTML += text + '<br>';
}

function processCommand(cmd) {
    const parts = cmd.split(' ');
    const action = parts[0].toLowerCase();
    const arg = parts[1] ? parts[1].toLowerCase() : null;

    switch (action) {
        case 'help':
            printLine('Available commands:');
            printLine('  open [app]   - Open an application (calc, about, gallery, etc.)');
            printLine('  list         - List available apps');
            printLine('  clear        - Clear the terminal screen');
            printLine('  date         - Show current date and time');
            printLine('  whoami       - Display current user');
            printLine('  neofetch       - Display neofetch system info');
            break;

        case 'clear':
            output.innerHTML = '';
            break;
        case 'neofetch':
            printLine('<img src="Textures/me.jpeg" style="width:150px; float:left;">   idiot@ahmedbarakat2007');
            printLine('   ------------');
            printLine('   OS: Bimbow 96');
            printLine('   Model: ahmedbarakat2007');
            printLine('   Kernel: Brain-0.0.1'); 
            printLine('   CPU: Single Core Uninteligent Brain @1.00GHz');
            printLine('   Memory: 5000MiB / 4096MiB');
            printLine('   Shell: Tounge-4.1.0')
            printLine('   CPU usage: 101%');
            printLine('   Language: C, C++, C#, Python, JS, PHP, x86_ASM')
            break;

        case 'whoami':
            printLine('user');
            break;

        case 'date':
            printLine(new Date().toString());
            break;

        case 'ls':
            Object.keys(apps).forEach(key => printLine(`${key}`));
            break;

        case 'open':
            if (!arg) {
                printLine('Error: Usage "open [app_name]". Type "list" to see apps.');
            } else if (apps[arg]) {
                printLine(`Opening ${apps[arg].title}...`);
                if (window.parent && window.parent.openWindow) {
                    window.parent.openWindow(apps[arg].title, apps[arg].path);
                } else {
                    printLine('Error: Cannot communicate with OS.');
                }
            } else {
                printLine(`Error: App "${arg}" not found.`);
            }
            break;

        case '':
            break;

        default:
            printLine(`command not found: ${action}`);
    }
}

document.addEventListener('click', () => input.focus());