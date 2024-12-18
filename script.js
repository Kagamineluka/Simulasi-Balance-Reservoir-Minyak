// Ambil elemen HTML
const form = document.getElementById('balanceForm');
const resultInitial = document.getElementById('resultInitial');
const resultProduced = document.getElementById('resultProduced');
const resultInjected = document.getElementById('resultInjected');
const resultBalance = document.getElementById('resultBalance');
const balanceChartCanvas = document.getElementById('balanceChart');

// Inisialisasi chart
let balanceChart = new Chart(balanceChartCanvas, {
  type: 'bar',
  data: {
    labels: ['Initial Volume', 'Produced Volume', 'Injected Volume', 'Final Balance'],
    datasets: [{
      label: 'Volume (m³)',
      data: [0, 0, 0, 0],
      backgroundColor: ['#42a5f5', '#ef5350', '#66bb6a', '#ffa726'],
      borderColor: ['#0d47a1', '#b71c1c', '#2e7d32', '#f57c00'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Volume (m³)'
        }
      }
    }
  }
});

// Event listener untuk submit form
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Ambil nilai input
  const initialVolume = parseFloat(document.getElementById('initialVolume').value);
  const producedVolume = parseFloat(document.getElementById('producedVolume').value);
  const injectedVolume = parseFloat(document.getElementById('injectedVolume').value);

  // Hitung final balance
  const finalBalance = initialVolume - producedVolume + injectedVolume;

  // Perbarui tabel
  resultInitial.textContent = initialVolume.toFixed(2);
  resultProduced.textContent = producedVolume.toFixed(2);
  resultInjected.textContent = injectedVolume.toFixed(2);
  resultBalance.textContent = finalBalance.toFixed(2);

  // Perbarui data chart
  balanceChart.data.datasets[0].data = [initialVolume, producedVolume, injectedVolume, finalBalance];
  balanceChart.update();

  // Reset form
  form.reset();
});
