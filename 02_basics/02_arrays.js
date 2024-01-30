const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "flash", "batman"]

marvel_heros.push(dc_heros);

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const all_heros = marvel_heros.concat(dc_heros)  It returns the combined Arrays
// console.log(marvel_heros)

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const real_array = [1, 2, 3, [4,5,6], 7 , 8, [9,10,[11,12,13]], 14]
const real_another_array= real_array.flat(Infinity)

// console.log(real_another_array);

// console.log(Array.isArray("Kevin"));
// console.log((Array.from("Kevin")));
// console.log(Array.from({name : "Kevin"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
