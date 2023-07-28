//Begin1. Doiraning radiusi R berilgan. Uning uzunligi L va yuzasi S aniqlansin.
/*
let r = 5;
let L = Math.trunc(2 * 3.14 * r);
let S = Math.trunc(3.14 * r ** 2);
console.log(`Doiraning yuzi: ${S}, Doiraning uzunligi: ${L}`) */

// Begin2. Ikkita manfiy bo`lmagan son a va b berilgan. Ularning o`rta geometrigi G aniqlansin.
/* let a = 9
let b = 9
let ortaGeom = Math.sqrt(9 * 9)
console.log(ortaGeom) */

// Begin3. x ning qiymati berilganda y funksiyaning qiymati aniqlansin. y = 3 * x^6 - 6 * x^2 - 7
/* 
let x = 5;
let y = 3 * x ** 6 - 6 * x ** 2 - 7;
console.log(y) */

// Begin4. X kg konfet A so`m turadi. 1 kg va Y kg konfet qancha turishini aniqlovchi programma tuzilsin.
/* 
let X = 20
let A = 50
let a = A / X
let Y = 5
console.log(`1kg konfet ${a}som turadi, ${Y}kg konfet ${Y * a}som turadi`) */

// Begin5. Berilgan A va B sonlarining qiymatlarini almashtiring. A va B ning yangi qiymati ekranga chiqarilsin.
/*
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // => 2
console.log(b); // => 1 */

//Integer1. Ikki xonali son berilgan. Oldin uning o'nliklar xonasidagi raqamini, so`ng birlar xonasidagi raqamini hamda ularning yig’indisini chiqaruvchi programma tuzilsin.
/* 
let a = 23
let b = a % 10
a = Math.trunc(a / 10)
console.log(`${a} ${b} ${a + b}`) */

// Integer2. Ikki xonali son berilgan. Uning raqamlari o'rnini almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin.
/* 
let a = 25
let c = a % 10
c = c * 10 + Math.trunc(a /10)
console.log(c) */

// Integer3. Uch xonali son berilgan. Uning yuzlar xonasidagi raqamini aniqlovchi programma tuzilsin.
/* 
let a = 200
a = Math.trunc(a / 100)
console.log(a) */

//Integer4. 999 dan katta bo`lgan son berilgan. Bir marta bo`lib butunni va bo`lib qoldiqni olish operatsiyasidan foydalanib, berilgan sonni yuzliklar xonasidagi sonni aniqlovchi programma tuzilsin.
// Input: 1239
// Output: 2
/* 
let a = 1239
a = Math.trunc(Math.trunc(a / 100) % 10)
console.log(a) */

//Integer5. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha soat, minut va sekund o'tganini aniqlovchi programma tuzilsin.
/* 
let seconds = 1000
let minutes = Math.floor(seconds / 60);
let extraSeconds = seconds % 60;
minutes = minutes < 10 ? "0" + minutes : minutes;
extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
console.log(`kun boshidan boshlab ${minutes}min ${extraSeconds}sec otdi`) */

/*                    Uyga vazifa                                  */
// Begin1. To`g`ri to`rtburchakning tomonlari a va b berilgan. Uning yuzasi va perimetri aniqlansin.

/* let a = 10
let b = 12
let S = a * b
let P = 2 * (a + b)
console.log(`Yuzasi ${S}, Perimetr ${P}`) */

// Begin2. Aylananing diametri d berilgan. Uning uzunligi va yuzasi aniqlansin.
/*
let d = 15
let π = 3.14
let L = π * d
let r = d / 2;
let S = π * r**2

console.log(`Aylananing uzunligi ${L}, yuzasi${S} ga teng`) */

//Begin3. Kubning yon tomoni a berilgan. Uning hajmini V va to`la sirti S aniqlansin.
/* 
let a = 5;
let V = a ** 3;
let S = 6 * a ** 2;
console.log(`Kubning hajmi ${V} tola sirti ${S}`) */

// Begin4. Paralelepepidning tomonlari a, b, c berilgan. Uning hajmi Vni va to'la sirti Sni aniqlansin.
/* 
let a = 4, b = 5, c = 6
let V = a * b * c
let S = 2 * (a * b + b * c + a * c)
console.log(`Hajmi ${V}, to'la sirti ${S} ga teng`) */

//Begin5. Ikkita son a va b berilgan. Ularning o`rta arifmetigi M aniqlansin.
/* let a = 9, b = 15
let M = (a + b) / 2
console.log(`${M}`) */

//Begin6. To`gri uchburchakning katetlari a va b berilgan. Uning gipotenuzasi c va perimetri P aniqlansin.

/* let a = 4, b = 5
let c = Math.sqrt(a**2 + b**2)
let P = a + b + c
console.log(`Perimetri ${P} gipotenuzasi ${c} ga teng`) */

// Begin7. Umumiy markazga bo`lgan ikkita aylana radiusi berilgan. r1, r2. (r1 > r2). Ularning yuzalari S1 va S2, ularning ayirmasi S aniqlansin.
/*
let r1 = 10
let r2 = 5
let S1 = Math.PI * r1
let S2 = Math.PI * r2
let S = Math.PI * (r1**2 - r2**2)
console.log(`S1: ${S1}, S2: ${S2}, S: ${S}`) */

//Begin8. Aylananing uzunligi L berilgan. Uning radiusi R va yuzasi S aniqlansin.
/*
let L = 31.4
let R = Math.round(L/(Math.PI * 2))
let S = Math.round(Math.PI * R**2)
console.log(`Radiusi: ${R} Yuzasi: ${S}`) */

// Begin9. Tekislikdagi berilgan ikki nuqta (x1, y1) va (x2, y2) orasidagi L masofa topilsin.

/* let x1 = 4, x2 = 6, y1 = 8, y2 = 6  
let L = Math.sqrt((x1 - x2)**2 + (y1 - y2)**2)
console.log(`L: ${L}`) */

//Begin10. A, B va C sonlari berilgan. A ni qiymati B ga, B ni qiymati C ga va C ni qiymati A ga almashtirilsin. A, B va C ning yangi qiymatilari ekranga chiqarilsin.
/* let x = 4, y = 5, z = 6
function test(x, y, z)
{
    x = x + y + z;
    y = x - (y + z);
    z = x - (y + z);
    x = x - (y + z);
    return [x, y, z];  
}
result = test(x, y, z)
console.log("x = "+result[0]);
console.log("y = "+result[1]);
console.log("z = "+result[2]); */

// Begin11. x ning qiymati berilganda y funksiyaning qiymati aniqlansin.
/* let x = 5
let y = 4 * (x - 3)**6 - 7 * (x - 3)**3 + 2
console.log(y) */

//Begin12. A soni berilgan. A ning darajalarini aniqlovchi programma tuzilsin.
/* let a = 5
console.log(`${a**3} ${a**6} ${a**9} ${a**15}`) */

//Begin13. Temperatura Tf (farengeyt) da berilgan. Temperatura qiymatini Tc (gradus selsiy) ga o`tkazuvchi programma tuzilsin.
/* let Tf = 50
let Tc = (Tf - 32) * 5/9
console.log(Tc) */

//Begin14. X kg shokolad A so`m turadi va Y kg konfet B so`m turadi. 1 kg shokolad 1 kg konfetdan qancha qimmat turishini aniqlovchi programma tuzilsin.

/* let X= 10, Y = 5, A = 10000, B = 15000
let x = A / X
let y = B / Y
console.log(`shokolad konfetdan ${x-y}som qimmat turadi`) */

//Begin15. Abdulaziz X kg olmani A so’mdan, Y kg olmani B so’mdan sotib oldi. Abdulaziz jami qancha savdo qilgan?
/* 
let X = 5,
  A = 5000,
  Y = 9,
  B = 8000,
  a = X * A,
  b = Y * B,
  c = a + b;
console.log(`Abdulaziz ${c} som savdo qilgan`); */

//Integer1. Uch xonali son berilgan. Oldin uni birliklar xonasidagi raqamni so`ng o`nliklar xonasidagi raqamni chiqaruvchi programma tuzilsin.
/* 
let a = 345
let b = a % 10
let c = Math.floor(a / 10) % 10
console.log(`${b} ${c}`) */

//Integer2. Uch xonali son berilgan. Uning raqamlar yig`indisini aniqlovchi programma tuzilsin.
/* let a = 345,
  b = a % 10,
  c = Math.floor(a / 10) % 10;
a = Math.floor(a / 100)
console.log(`${a + b + c}`) */

//Integer3. Uch xonali son berilgan. Uning raqamlarini teskari tartibda yozishdan hosil bo`lgan sonni aniqlovchi program tuzilsin.
/* let a = 345,
  b = a % 10,
  c = Math.floor(a / 10) % 10;
a = Math.floor(a / 100);
let y = b * 100 + c * 10 + a;
console.log(y); */

//Integer6. 999 dan katta bo`lgan son berilgan. Bir marta bo`lib butunni va bo`lib qoldiqni olish operatsiyasidan foydalanib berilgan sonni mingliklar xonasidagi sonni aniqlovchi programma tuzilsin.
// Input: 98123
// Output: 8
/* 
let a = 98123
a = Math.floor(a/1000) % 10
console.log(a) */

//Integer7. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha minut to'la o`tganligini aniqlovchi programma tuzilsin.
/* let s = 14000, 
    minutes = Math.floor(s / 60);
minutes = minutes < 10 ? "0" + minutes : minutes
console.log(minutes) */

// Integer8. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha to'la soat o`tganligini aniqlovchi programma tuzilsin.
/* let s = 14000, 
    minutes = Math.floor(s / 60);
    hours = Math.floor(minutes / 60)
minutes = minutes < 10 ? "0" + minutes : minutes
hours = hours < 10 ? "0" + hours : hours
console.log(hours) */

//Integer9. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha minut va sekund o'tganini aniqlovchi programma tuzilsin.
/* let seconds = 15000
let minutes = Math.floor(seconds / 60);
let extraSeconds = seconds % 60;
minutes = minutes < 10 ? "0" + minutes : minutes;
extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
console.log(`kun boshidan boshlab ${minutes}min ${extraSeconds}sec otdi`) */

//Integer10. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha soat va sekund o'tganini aniqlovchi programma tuzilsin.
/* let seconds = 15000
let minutes = Math.floor(seconds / 60);
let hours = Math.floor(minutes / 60)
let extraMinutes = minutes % 60;
let extraSeconds = extraMinutes * 60
extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds
console.log(`Kun boshidan boshlab ${hours}soat va ${extraSeconds}second otdi`)*/

//
