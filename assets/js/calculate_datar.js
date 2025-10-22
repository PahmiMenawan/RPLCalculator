document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".shape-type__card");
  const result = document.getElementById("result");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const shapeId = card.id;
      output = "";

      switch (shapeId) {
        case "persegi":
          const sisi = parseFloat(
            prompt("Masukkan panjang sisi persegi (cm):")
          );
          if (isNaN(sisi) || sisi <= 0) return alert("Masukkan nilai valid!");
          bangun = new Persegi(sisi);
          output = `
            <b>Persegi</b><br>
            Luas: ${bangun.luas().toFixed(2)} cm²<br>
            Keliling: ${bangun.keliling().toFixed(2)} cm
          `;
          break;

        case "persegiPanjang":
          const p = parseFloat(
            prompt("Masukkan panjang persegi panjang (cm):")
          );
          const l = parseFloat(prompt("Masukkan lebar persegi panjang (cm):"));
          if ([p, l].some((v) => isNaN(v) || v <= 0))
            return alert("Masukkan nilai valid!");
          bangun = new PersegiPanjang(p, l);
          output = `
            <b>Persegi Panjang</b><br>
            Luas: ${bangun.luas().toFixed(2)} cm²<br>
            Keliling : ${bangun.keliling().toFixed(2)} cm
          `;
          break;

        case "lingkaran":
          const r = parseFloat(prompt("Masukkan jari-jari lingkaran (cm):"));
          if (isNaN(r) || r <= 0) return alert("Masukkan nilai valid!");
          bangun = new Lingkaran(r);
          output = `
            <b>lingkaran</b><br>
            Luas: ${bangun.luas().toFixed(2)} cm²<br>
            Keliling : ${bangun.keliling().toFixed(2)} cm
          `;
          break;

        case "jajarGenjang":
          const a = parseFloat(prompt("Masukkan alas jajar genjang (cm):"));
          const t = parseFloat(prompt("Masukkan tinggi jajar genjang (cm):"));
          const b = parseFloat(
            prompt("Masukkan sisi miring jajar genjang (cm):")
          );
          if ([a, b, t].some((v) => isNaN(v) || v <= 0))
            bangun = new JajarGenjang(a, t, b);
          output = `
            <b>Jajar Genjang</b><br>
            Luas: ${bangun.luas().toFixed(2)} cm³<br>
            Keliling : ${bangun.keliling().toFixed(2)} cm²
          `;
          break;

        default:
          alert("Bangun tidak dikenal!");
          return;
      }
      window.location.href = "#result"
      result.innerHTML = output;
    });
  });
});