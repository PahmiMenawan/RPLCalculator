
class BangunDatar{
    constructor(namaBangun){
        this.namaBangun = namaBangun;
    }

    info(){
        console.log(`Ini adalah bangun datar ${this.namaBangun}`)
    }

    luas(){
        throw new error("Metode luas() harus diimplementasikan")
    }

    keliling(){
        throw new error("Metode keliling() harus diimplementasikan")
    }
}

class BangunRuang{
    constructor(namaBangun){
        this.namaBangun = namaBangun;
    }

    info(){
        console.log(`Ini adalah bangun ruang ${this.namaBangun}`)
    }

    volume(){
        throw new error("Metode volume() harus diimplementasikan")
    }

    luasPermukaan(){
        throw new error("Metode luasPermukaan() harus diimplementasikan")
    }
}

// BANGUN DATAR //
class Persegi extends BangunDatar{
    constructor(sisi){
        super('persegi')
        this.sisi = sisi;
    }

    luas(){
        return this.sisi * this.sisi;
    }

    keliling(){
        return this.sisi * 4;
    }
}

class PersegiPanjang extends BangunDatar{
    constructor(panjang, lebar){
        super('persegi panjang');
        this.panjang = panjang;
        this.lebar = lebar;
    }

    luas(){
        return this.panjang * this.lebar
    }

    keliling(){
        return 2 * (this.panjang + this.lebar)
    }
}

class Lingkaran extends BangunDatar{
    constructor(jari){
        super('lingkaran')
        this.jari = jari;
    }

    luas(){
        return Math.PI * this.jari * this.jari
    }

    keliling(){
        return Math.PI * (this.jari * 2)
    }
}

class JajarGenjang extends BangunDatar{
    constructor(alas, tinggi, sisiMiring){
        super('jajar genjang')
        this.alas = alas;
        this.tinggi = tinggi;
        this.sisiMiring = sisiMiring;
    }

    luas(){
        return this.alas * this.tinggi;
    }

    keliling(){
        return 2 * (this.alas + this.sisiMiring);
    }
}

// BANGUN RUANG //

class Kubus extends BangunRuang{
    constructor(sisi){
        super('kubus')
        this.sisi = sisi;
    }

    volume(){
        return this.sisi ** 3
    }

    luasPermukaan(){
        return 6 * (this.sisi ** 2) 
    }
}

class Balok extends BangunRuang{
    constructor(panjang, lebar, tinggi){
        super('balok');
        this.panjang = panjang
        this.lebar = lebar
        this.tinggi = tinggi
    }

    volume(){
        return this.panjang * this.lebar * this.tinggi
    }

    luasPermukaan(){
        return 2 * ((this.panjang * this.lebar) + (this.panjang * this.tinggi) + (this.lebar * this.tinggi))
    }
}

class Tabung extends BangunRuang{
    constructor(tinggi, jari){
        super('tabung')
        this.tinggi = tinggi
        this.jari = jari
    }

    volume(){
        return Math.PI * (this.jari * this.jari) * this.tinggi;
    }

    luasPermukaan(){
        return 2 * Math.PI * this.jari * (this.jari + this.tinggi);
    }
}

class Bola extends BangunRuang{
    constructor(jari){
        super('bola')
        this.jari = jari;
    }

    volume(){
        return (4/3) * Math.PI * (this.jari ** 3)
    }

    luasPermukaan(){
        return 4 * Math.PI * (this.jari ** 2)
    }
}

// TESTING //
// const persegi = new Persegi(5);
// console.log(persegi.info());
// console.log("Luas:", persegi.luas());
// console.log("Keliling:", persegi.keliling());

// const kubus = new Kubus(3);
// console.log(kubus.info());
// console.log("Volume:", kubus.volume());
// console.log("Luas Permukaan:", kubus.luasPermukaan());

// USER INPUTS - PROMPT
// function main() {
//   const jenis = prompt(
//     "Pilih bangun:\n" +
//     "1. Persegi\n2. Persegi Panjang\n3. Lingkaran\n4. Jajar Genjang\n" +
//     "5. Kubus\n6. Balok\n7. Tabung\n8. Bola"
//   );

//   let bangun;
//   let result = "";

//   switch (jenis) {
//     case "1":
//       const sisi = parseFloat(prompt("Masukkan panjang sisi:"));
//       bangun = new Persegi(sisi);
//       result = `Luas: ${bangun.luas().toFixed(2)} | Keliling: ${bangun.keliling().toFixed(2)}`;
//       break;

//     case "2":
//       const p = parseFloat(prompt("Masukkan panjang:"));
//       const l = parseFloat(prompt("Masukkan lebar:"));
//       bangun = new PersegiPanjang(p, l);
//       result = `Luas: ${bangun.luas().toFixed(2)} | Keliling: ${bangun.keliling().toFixed(2)}`;
//       break;

//     case "3":
//       const r = parseFloat(prompt("Masukkan jari-jari:"));
//       bangun = new Lingkaran(r);
//       result = `Luas: ${bangun.luas().toFixed(2)} | Keliling: ${bangun.keliling().toFixed(2)}`;
//       break;

//     case "4":
//       const alas = parseFloat(prompt("Masukkan alas:"));
//       const tinggi = parseFloat(prompt("Masukkan tinggi:"));
//       const sisiMiring = parseFloat(prompt("Masukkan sisi miring:"));
//       bangun = new JajarGenjang(alas, tinggi, sisiMiring);
//       result = `Luas: ${bangun.luas().toFixed(2)} | Keliling: ${bangun.keliling().toFixed(2)}`;
//       break;

//     case "5":
//       const sisiKubus = parseFloat(prompt("Masukkan sisi:"));
//       bangun = new Kubus(sisiKubus);
//       result = `Volume: ${bangun.volume().toFixed(2)} | Luas Permukaan: ${bangun.luasPermukaan().toFixed(2)}`;
//       break;

//     case "6":
//       const pb = parseFloat(prompt("Masukkan panjang:"));
//       const lb = parseFloat(prompt("Masukkan lebar:"));
//       const tb = parseFloat(prompt("Masukkan tinggi:"));
//       bangun = new Balok(pb, lb, tb);
//       result = `Volume: ${bangun.volume().toFixed(2)} | Luas Permukaan: ${bangun.luasPermukaan().toFixed(2)}`;
//       break;

//     case "7":
//       const rt = parseFloat(prompt("Masukkan jari-jari:"));
//       const tt = parseFloat(prompt("Masukkan tinggi:"));
//       bangun = new Tabung(tt, rt);
//       result = `Volume: ${bangun.volume().toFixed(2)} | Luas Permukaan: ${bangun.luasPermukaan().toFixed(2)}`;
//       break;

//     case "8":
//       const rb = parseFloat(prompt("Masukkan jari-jari:"));
//       bangun = new Bola(rb);
//       result = `Volume: ${bangun.volume().toFixed(2)} | Luas Permukaan: ${bangun.luasPermukaan().toFixed(2)}`;
//       break;

//     default:
//       alert("Pilihan tidak valid!");
//       return;
//   }
//   alert(result);
// }

// INDEX.HTML
const toggleBtn = document.getElementById('hamburger');
const nav = document.getElementById('sideNav');
toggleBtn.addEventListener('click', () => {
  nav.classList.add('active');
});

nav.addEventListener('click', () => {
    nav.classList.remove('active');
})

const br = document.getElementById('bangunRuang');
const bd = document.getElementById('bangunDatar');
br.addEventListener('click', ()=>{
    window.location.href = '../assets/html/bangun_ruang.html'
})
bd.addEventListener('click', ()=>{
    window.location.href = '../assets/html/bangun_datar.html'
})