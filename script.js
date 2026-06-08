const weddingDate = new Date('2026-07-03T17:00:00+07:00').getTime();

function formatNumber(number) {
  return number < 10 ? `0${number}` : number;
}

function updateCountdown() {

  const now = new Date().getTime();

  const distance = weddingDate - now;

  if (distance < 0) {
    document.querySelector('.countdown').innerHTML =
      '<h3>The Wedding Has Started 💍</h3>';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) /
    1000
  );

  document.getElementById('days').innerText = formatNumber(days);

  document.getElementById('hours').innerText = formatNumber(hours);

  document.getElementById('minutes').innerText = formatNumber(minutes);

  document.getElementById('seconds').innerText = formatNumber(seconds);
}

updateCountdown();

setInterval(updateCountdown, 1000);