document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".shape-type__card");
  const result = document.getElementById("result");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const shapeId = card.id;
      output = "";

      switch (shapeId) {
        case "kubus":
          const sisi = parseFloat(prompt("Masukkan panjang sisi kubus (cm):"));
          if (isNaN(sisi) || sisi <= 0) return alert("Masukkan nilai valid!");
          bangun = new Kubus(sisi);
          output = `
            <b>Kubus</b><br>
            Volume: ${bangun.volume().toFixed(2)} cm³<br>
            Luas Permukaan: ${bangun.luasPermukaan().toFixed(2)} cm²
          `;
          break;

        case "balok":
          const p = parseFloat(prompt("Masukkan panjang balok (cm):"));
          const l = parseFloat(prompt("Masukkan lebar balok (cm):"));
          const t = parseFloat(prompt("Masukkan tinggi balok (cm):"));
          if ([p, l, t].some((v) => isNaN(v) || v <= 0))
            return alert("Masukkan nilai valid!");
          bangun = new Balok(p, l, t);
          output = `
            <b>Balok</b><br>
            Volume: ${bangun.volume().toFixed(2)} cm³<br>
            Luas Permukaan: ${bangun.luasPermukaan().toFixed(2)} cm²
          `;
          break;

        case "tabung":
          const rTab = parseFloat(prompt("Masukkan jari-jari tabung (cm):"));
          const tTab = parseFloat(prompt("Masukkan tinggi tabung (cm):"));
          if ([rTab, tTab].some((v) => isNaN(v) || v <= 0))
            return alert("Masukkan nilai valid!");
          bangun = new Tabung(tTab, rTab);
          output = `
            <b>Tabung</b><br>
            Volume: ${bangun.volume().toFixed(2)} cm³<br>
            Luas Permukaan: ${bangun.luasPermukaan().toFixed(2)} cm²
          `;
          break;

        case "bola":
          const rBola = parseFloat(prompt("Masukkan jari-jari bola (cm):"));
          if (isNaN(rBola) || rBola <= 0) return alert("Masukkan nilai valid!");
          bangun = new Bola(rBola);
          output = `
            <b>Bola</b><br>
            Volume: ${bangun.volume().toFixed(2)} cm³<br>
            Luas Permukaan: ${bangun.luasPermukaan().toFixed(2)} cm²
          `;
          break;

        default:
          alert("Bangun tidak dikenal!");
          return;
      }
      window.location.href = "#result";
      result.innerHTML = output;
    });
  });
});
