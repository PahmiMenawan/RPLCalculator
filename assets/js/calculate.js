document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".shape-type__card");
  const result = document.getElementById("result");
  const var1 = document.getElementById("var1");
  const var2 = document.getElementById("var2");
  const var3 = document.getElementById("var3");
  const label1 = document.getElementById("label1");
  const label2 = document.getElementById("label2");
  const label3 = document.getElementById("label3");
  const submit = document.getElementById("submit");

  let currentShape = null;
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      var1.classList.remove("show");
      var2.classList.remove("show");
      var3.classList.remove("show");

      const shapeId = card.id;
      currentShape = card.id;
      output = "";

      switch (shapeId) {
        case "kubus":
          result.classList.add("calculator__card");
          label1.textContent = "Sisi (Cm)";
          label2.textContent = "";
          label3.textContent = "";
          var1.classList.add("show");
          var2.classList.remove("show");
          var3.classList.remove("show");
          submit.classList.add("show");
          break;

        case "balok":
          result.classList.add("calculator__card");
          label1.textContent = "Panjang (Cm)";
          label2.textContent = "Lebar (Cm)";
          label3.textContent = "Tinggi (Cm)";
          var1.classList.add("show");
          var2.classList.add("show");
          var3.classList.add("show");
          submit.classList.add("show");
          break;

        case "tabung":
          result.classList.add("calculator__card");
          label1.textContent = "Jari-jari (Cm)";
          label2.textContent = "Tinggi (Cm)";
          label3.textContent = "";
          var1.classList.add("show");
          var2.classList.add("show");
          var3.classList.remove("show");
          submit.classList.add("show");
          break;

        case "bola":
          result.classList.add("calculator__card");
          label1.textContent = "Jari-jari (Cm)";
          label2.textContent = "";
          label3.textContent = "";
          var1.classList.add("show");
          var2.classList.remove("show");
          var3.classList.remove("show");
          submit.classList.add("show");
          break;

        case "persegi":
          result.classList.add("calculator__card");
          label1.textContent = "Sisi (Cm)";
          label2.textContent = "";
          label3.textContent = "";
          var1.classList.add("show");
          var2.classList.remove("show");
          var3.classList.remove("show");
          submit.classList.add("show");
          break;

        case "persegiPanjang":
          result.classList.add("calculator__card");
          label1.textContent = "Panjang (Cm)";
          label2.textContent = "Lebar (Cm)";
          label3.textContent = "";
          var1.classList.add("show");
          var2.classList.add("show");
          var3.classList.remove("show");
          submit.classList.add("show");
          break;

        case "lingkaran":
          result.classList.add("calculator__card");
          label1.textContent = "Jari-jari (Cm)";
          label2.textContent = "";
          label3.textContent = "";
          var1.classList.add("show");
          var2.classList.remove("show");
          var3.classList.remove("show");
          submit.classList.add("show");
          break;

        case "jajarGenjang":
          result.classList.add("calculator__card");
          label1.textContent = "Alas (Cm)";
          label2.textContent = "Tinggi (Cm)";
          label3.textContent = "Sisi Miring (Cm)";
          var1.classList.add("show");
          var2.classList.add("show");
          var3.classList.add("show");
          submit.classList.add("show");
          break;

        default:
          alert("Bangun tidak dikenal!");
          return;
      }
      window.location.href = "#result";
      result.classList.add("calculator__card");
    });
  });

  submit.addEventListener("click", () => {
    switch (currentShape) {
      case "kubus":
        const sKubus = parseFloat(var1.value);
        if (isNaN(sKubus) || sKubus <= 0) return alert("Masukkan nilai valid!");
        bangun = new Kubus(sKubus);
        output = `
            <b>Kubus</b><br>
            Volume: ${bangun.volume().toFixed(2)} cm³<br>
            Luas Permukaan: ${bangun.luasPermukaan().toFixed(2)} cm²
          `;
        break;
      case "balok":
        const pBalok = parseFloat(var1.value);
        const lBalok = parseFloat(var2.value);
        const tBalok = parseFloat(var3.value);
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
        const rTab = parseFloat(var1.value);
        const tTab = parseFloat(var2.value);
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
        const rBola = parseFloat(var1.value);
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
        const pPanjang = parseFloat(var1.value);
        const lPanjang = parseFloat(var2.value);
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
        const rLingkar = parseFloat(var1.value);
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
        const aJajar = parseFloat(var1.value);
        const tJajar = parseFloat(var2.value);
        const bJajar = parseFloat(var3.value);
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

    result.innerHTML = output;
  });
});
