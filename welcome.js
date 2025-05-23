const lines = [
  '> Initializing magic workspace...\n',
  '> Loading creativity modules...\n',
  '> spell.run("AryanPortfolio")\n',
  '>>> Executing...\n',
  '\n✨ Spawning Gateway ✨\n'
];

const initialScreen = document.getElementById('initial-screen');
const mainContent = document.getElementById('main-content');
const goButton = document.getElementById('goButton');
const terminal = document.getElementById('terminal');

let idx = 0;

goButton.addEventListener('click', () => {
  initialScreen.style.display = 'none';
  mainContent.style.display = 'flex';
  mainContent.style.flexDirection = 'column';
  mainContent.style.alignItems = 'center';
  typeLine();
});

function typeLine() {
  if (idx < lines.length) {
    terminal.textContent += lines[idx];
    idx++;
    setTimeout(typeLine, 1000);
  } else {
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  }
}
