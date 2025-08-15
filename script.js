function spinBiscuit() {
  const BiscuitNameEl = document.getElementById('BiscuitName');
  const againBtn = document.getElementById('againBtn');
  let spinInterval;

  // Disable both buttons while spinning
  document.getElementById('generateBtn').disabled = true;
  againBtn.disabled = true;

  // Start fast random spin
  spinInterval = setInterval(() => {
    const random = Biscuit[Math.floor(Math.random() * Biscuit.length)];
    BiscuitNameEl.textContent = random;
  }, 100); // change every 100ms

  // Stop after 5 seconds
  setTimeout(() => {
    clearInterval(spinInterval);
    const finalBiscuit = Biscuit[Math.floor(Math.random() * Biscuit.length)];
    Biscuit.textContent = finalBiscuit;

    againBtn.style.display = 'inline-block';
    document.getElementById('generateBtn').disabled = false;
    againBtn.disabled = false;
  }, 5000); // 5 seconds
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('generateBtn').addEventListener('click', spinBiscuit);
  document.getElementById('againBtn').addEventListener('click', spinBiscuit);
});