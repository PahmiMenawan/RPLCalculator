document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".shape-type__card");
  const result = document.getElementById("result");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const shapeId = card.id;
      output = "";

      switch (shapeId) {
        case "kubus":
          const sKubus = parseFloat(
            prompt("Masukkan panjang sisi kubus (cm):")
          );
          if (isNaN(sKubus) || sKubus <= 0)
            return alert("Masukkan nilai valid!");
          bangun = new Kubus(sKubus);
          output = `
            <b>Kubus</b><br>
            Volume: ${bangun.volume().toFixed(2)} cm³<br>
            Luas Permukaan: ${bangun.luasPermukaan().toFixed(2)} cm²
          `;
          break;

        case "balok":
          const pBalok = parseFloat(prompt("Masukkan panjang balok (cm):"));
          const lBalok = parseFloat(prompt("Masukkan lebar balok (cm):"));
          const tBalok = parseFloat(prompt("Masukkan tinggi balok (cm):"));
          if ([pBalok, lBalok, tBalok].some((v) => isNaN(v) || v <= 0))
            return alert("Masukkan nilai valid!");
          bangun = new Balok(pBalok, lBalok, tBalok);
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

        case "persegi":
          const sPersegi = parseFloat(
            prompt("Masukkan panjang sisi persegi (cm):")
          );
          if (isNaN(sPersegi) || sPersegi <= 0)
            return alert("Masukkan nilai valid!");
          bangun = new Persegi(sPersegi);
          output = `
            <b>Persegi</b><br>
            Luas: ${bangun.luas().toFixed(2)} cm²<br>
            Keliling: ${bangun.keliling().toFixed(2)} cm
          `;
          break;

        case "persegiPanjang":
          const pPanjang = parseFloat(
            prompt("Masukkan panjang persegi panjang (cm):")
          );
          const lPanjang = parseFloat(
            prompt("Masukkan lebar persegi panjang (cm):")
          );
          if ([pPanjang, lPanjang].some((v) => isNaN(v) || v <= 0))
            return alert("Masukkan nilai valid!");
          bangun = new PersegiPanjang(pPanjang, lPanjang);
          output = `
            <b>Persegi Panjang</b><br>
            Luas: ${bangun.luas().toFixed(2)} cm²<br>
            Keliling : ${bangun.keliling().toFixed(2)} cm
          `;
          break;

        case "lingkaran":
          const rLingkar = parseFloat(
            prompt("Masukkan jari-jari lingkaran (cm):")
          );
          if (isNaN(rLingkar) || rLingkar <= 0)
            return alert("Masukkan nilai valid!");
          bangun = new Lingkaran(rLingkar);
          output = `
            <b>lingkaran</b><br>
            Luas: ${bangun.luas().toFixed(2)} cm²<br>
            Keliling : ${bangun.keliling().toFixed(2)} cm
          `;
          break;

        case "jajarGenjang":
          const aJajar = parseFloat(
            prompt("Masukkan alas jajar genjang (cm):")
          );
          const tJajar = parseFloat(
            prompt("Masukkan tinggi jajar genjang (cm):")
          );
          const bJajar = parseFloat(
            prompt("Masukkan sisi miring jajar genjang (cm):")
          );
          if ([aJajar, bJajar, tJajar].some((v) => isNaN(v) || v <= 0)) {
            return alert("Masukkan nilai valid!");
          }

          bangun = new JajarGenjang(aJajar, tJajar, bJajar);
          output = `
    <b>Jajar Genjang</b><br>
    Luas: ${bangun.luas().toFixed(2)} cm²<br>
    Keliling : ${bangun.keliling().toFixed(2)} cm
  `;
          break;

        default:
          alert("Bangun tidak dikenal!");
          return;
      }
      window.location.href = "#result";
      result.classList.add("calculator__card");
      result.innerHTML = output;
    });
  });
});
