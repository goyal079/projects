function toNum(pr) {
  return Number(pr.split("$")[0]);
}

let p = "2$/kg";
p = toNum(p);
console.log(p);
