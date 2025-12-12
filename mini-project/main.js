/**
 * Crear un juego de piedra, papel o tijeras con interfaz gráfica usando
 * HTML, CSS (TailwindCSS, SASS, etc.) y JavaScript.
 * 
 * La partida debe permitir al usuario seleccionar una de las tres opciones
 * (piedra, papel o tijeras) mediante botones o imágenes.
 * 
 * La computadora debe seleccionar aleatoriamente una de las tres opciones.
 * 
 * La interfaz debe mostrar el resultado de cada ronda (ganador, perdedor o empate)
 * y llevar un registro de las siguientes estadísticas:
 * - Número total de rondas jugadas.
 * - Número de victorias del usuario.
 * - Número de victorias de la computadora.
 * - Número de empates.
 * - Registro de las últimas 5 rondas jugadas (opciones seleccionadas por el usuario y la computadora).
 * 
 * Las estadísticas deben actualizarse dinámicamente en la interfaz después de cada ronda y ser
 * accesibles para el usuario en todo momento, incluso cuaando este recarga la página
 * (o cierra y vuelve a abrir el navegador).
 * 
 * Incluir un botón para reiniciar las estadísticas y comenzar una nueva partida.
 * 
 * El código debe estar documentado utilizando JSDoc.
 * 
 * Opcional: Agregar modo claro/oscuro para la interfaz del juego con persistencia de la preferencia
 * del usuario utilizando almacenamiento local (localStorage).
 * 
 * 2025/12/12
 */

const STORAGE_KEY = 'rpsStats';
const THEME_KEY = 'themePreference';

/**
 * @typedef {Object} Round
 * @property {'rock'|'paper'|'scissors'} user
 * @property {'rock'|'paper'|'scissors'} cpu
 * @property {'user'|'cpu'|'draw'} winner
 */

/**
 * @typedef {Object} Stats
 * @property {number} userWins
 * @property {number} cpuWins
 * @property {number} draws
 * @property {Round[]} history
 */

function getStats() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const defaultStats = { userWins: 0, cpuWins: 0, draws: 0, history: [] };
        if (!raw) return defaultStats;
        
        const parsed = JSON.parse(raw);
        return {
            userWins: Number(parsed.userWins) || 0,
            cpuWins: Number(parsed.cpuWins) || 0,
            draws: Number(parsed.draws) || 0,
            history: Array.isArray(parsed.history) ? parsed.history : []
        };
    } catch (e) {
        console.error("Error retrieving stats:", e);
        return { userWins: 0, cpuWins: 0, draws: 0, history: [] };
    }
}

// Ensure the app initializes when the script is loaded.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function saveStats(stats) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

function resetStats() {
    const fresh = { userWins: 0, cpuWins: 0, draws: 0, history: [] };
    saveStats(fresh);
    updateUI(fresh, null);
    return fresh;
}

/**
 * Generates a random choice for the CPU.
 * @returns {'rock'|'paper'|'scissors'} The CPU's choice.
 */
function cpuChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

/**
 * Decides the winner of the round based on the rules (Rock > Scissors > Paper > Rock).
 * @param {'rock'|'paper'|'scissors'} user - The user's choice.
 * @param {'rock'|'paper'|'scissors'} cpu - The computer's choice.
 * @returns {'user'|'cpu'|'draw'} The winner of the round.
 */
function decideWinner(user, cpu) {
    
    if (user === cpu) return 'draw';
    const userWins = (user === 'rock' && cpu === 'scissors') || 
                     (user === 'paper' && cpu === 'rock') ||    
                     (user === 'scissors' && cpu === 'paper'); 

    return userWins ? 'user' : 'cpu';
}

function recordRound(stats, round) {
    const updated = { ...stats };
    if (round.winner === 'user') {
        updated.userWins++;
    } else if (round.winner === 'cpu') {
        updated.cpuWins++;
    } else {
        updated.draws++;
    }
    updated.history = [...updated.history, round];
    saveStats(updated);
    return updated;
}

function renderStats(stats) {
    const totalRounds = stats.userWins + stats.cpuWins + stats.draws;

    const ids = {
        total: 'statTotalRounds',
        user: 'statUserWins',
        cpu: 'statCpuWins',
        draws: 'statDraws'
    };

    const elTotal = document.getElementById(ids.total);
    const elUser = document.getElementById(ids.user);
    const elCpu = document.getElementById(ids.cpu);
    const elDraws = document.getElementById(ids.draws);

    if (elTotal) elTotal.textContent = totalRounds;
    if (elUser) elUser.textContent = stats.userWins;
    if (elCpu) elCpu.textContent = stats.cpuWins;
    if (elDraws) elDraws.textContent = stats.draws;
}

function iconFor(c) {
    if (c === 'rock') return '<i class="fa-solid fa-hand-fist"></i>';
    if (c === 'paper') return '<i class="fa-solid fa-hand"></i>';
    return '<i class="fa-solid fa-hand-scissors"></i>';
}

function renderHistory(history) {
    const list = document.getElementById('historyList');
    if (!list) return;
    list.innerHTML = '';

    if (history.length === 0) {
        list.innerHTML = '<li class="text-gray-500 italic p-1">No rounds recorded yet.</li>';
        return;
    }

    history.slice(-5).reverse().forEach(r => {
        const li = document.createElement('li');
        
        let resultIcon, resultClass;
        if (r.winner === 'user') { 
            resultIcon = 'Won'; 
            resultClass = 'text-green-500 dark:text-green-400 font-semibold'; 
        } else if (r.winner === 'cpu') { 
            resultIcon = 'Lost'; 
            resultClass = 'text-red-500 dark:text-red-400 font-semibold'; 
        } else { 
            resultIcon = 'Draw'; 
            resultClass = 'text-yellow-500 dark:text-yellow-400 font-semibold'; 
        }

        li.className = `p-1 border-b border-gray-200 dark:border-gray-700 text-sm`;
        li.innerHTML = `
            <span class="${resultClass}">${resultIcon}:</span> 
            You ${iconFor(r.user)} vs CPU ${iconFor(r.cpu)}
        `;
        list.appendChild(li);
    });
}

function renderLastResult(round) {
    const el = document.getElementById('lastResult');
    if (!el) return;

    el.className = 'text-2xl font-bold py-4 px-2 text-center transition-all duration-300 rounded-lg';

    if (!round) { 
        el.textContent = 'Make your choice to start!'; 
        el.classList.add('text-gray-600', 'dark:text-gray-400');
        return; 
    }

    let msg, resultClass;

    if (round.winner === 'user') {
        msg = 'YOU WON THE ROUND!';
        resultClass = 'text-green-800 bg-green-200 dark:text-green-100 dark:bg-green-700 shadow-lg shadow-green-500/50';
    } else if (round.winner === 'cpu') {
        msg = 'YOU LOST THE ROUND...';
        resultClass = 'text-red-800 bg-red-200 dark:text-red-100 dark:bg-red-700 shadow-lg shadow-red-500/50';
    } else {
        msg = 'DRAW!';
        resultClass = 'text-yellow-800 bg-yellow-200 dark:text-yellow-100 dark:bg-yellow-700 shadow-lg shadow-yellow-500/50';
    }

    el.className += ' ' + resultClass;
    el.innerHTML = `
        ${msg}
        <div class="text-base font-normal mt-1">
            You chose: ${iconFor(round.user)} ${round.user}
            | CPU chose: ${iconFor(round.cpu)} ${round.cpu}
        </div>
    `;
}

function setChoiceButtonsDisabled(disabled) {
    document.querySelectorAll('.choice-btn').forEach(btn => {
        btn.disabled = disabled;
        btn.classList.toggle('opacity-50', disabled);
        btn.classList.toggle('cursor-not-allowed', disabled);
    });
}

function updateUI(stats, lastRound) {
    renderStats(stats);
    renderHistory(stats.history);
    renderLastResult(lastRound);
}

function applyTheme(preferred = null) {
    const root = document.documentElement;
    const saved = localStorage.getItem(THEME_KEY);
    const theme = preferred || saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    root.classList.toggle('dark', theme === 'dark');
    
    const toggleBtn = document.getElementById('toggleThemeBtn');
    if (toggleBtn) {
        toggleBtn.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
    
    localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    applyTheme(isDark ? 'light' : 'dark');
}

function init() {
    applyTheme();
    let stats = getStats();
    updateUI(stats, null); 

    document.querySelectorAll('.choice-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setChoiceButtonsDisabled(true); 
            
            const user = (btn.getAttribute('data-choice') || '').trim().toLowerCase(); 
            const cpu = cpuChoice();
            const winner = decideWinner(user, cpu); 
            const round = { user, cpu, winner };
            
            stats = recordRound(stats, round);
            updateUI(stats, round); 

            setTimeout(() => {
                setChoiceButtonsDisabled(false); 
            }, 500);
        });
    });

    const resetBtn = document.getElementById('resetStatsBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            stats = resetStats();
        });
    }

    const themeBtn = document.getElementById('toggleThemeBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => toggleTheme());
    }
}