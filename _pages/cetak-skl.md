---
title: "Cetak SKL"
date: "2023-01-01T00:00:00.000Z"
author:
  name: Admin
  picture: "/assets/blog/authors/joe.jpeg"
---

<div id="countdown" class="text-center" style="font-weight:bold">Loading countdown...</div>

<script>
  const targetTime = new Date("2025-05-05 16:00:00 GMT+0800");
  const countdownEl = document.getElementById('countdown');

  function updateCountdown() {
    const now = new Date();
    let diff = targetTime - now;

    if (diff <= 0) {
      countdownEl.innerHTML = `
        <h1>Pengumuman Kelulusan</h1>
        <p><a href="https://drive.google.com/file/d/1k_m7x_SDYkAtEf5QJ_AzszDNKOrF6DMu/view?usp=sharing">Download SK Kelulusan</a></p>
      `;
      clearInterval(timer);
      return;
    }

    const hours = Math.floor(diff / (3600000));
    diff -= hours * 3600000;
    const minutes = Math.floor(diff / (60000));
    diff -= minutes * 60000;
    const seconds = Math.floor(diff / 1000);

    countdownEl.innerHTML = `
    <p style="font-size:1em">PENGUMUMAN AKAN DIBUKA DALAM</p>
    <div class="text-success" style="font-size:3em">${hours}h ${minutes}m ${seconds}s</div>
`;
  }

  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
</script>
