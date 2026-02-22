const B7891a = [
    "137×(8-9+1)", //0
    "1³⁷⁸⁹¹", //1
    "1³⁷⁸⁹+1", //2
    "13+7-8-9×1", //3
    "13+7-8-9+1", //4
    "1+3×7-8-9×1", //5
    "1+3×7-8-9+1", //6
    "1³×7-8+9+1", //7
    "1³+7-8+9-1", //8
    "1³+7-8+9×1", //9
    "1³-7+8+9-1"  //10
];
const B7891neg = "1³⁷+8-9-1";
const B7891o = 134891;

function B7891ize(nNormal){
    if ( isNaN(nNormal)){
        return "";
    }
    let dec = ""
    if ( Number(nNormal) % 1 != 0) {
        let decl = nNormal.split(".").slice(-1)[0].length;
        dec = `×${B7891a[10]}^((${B7891neg})×(${B7891ize(decl)}))`;
        nNormal = nNormal.replace(".","");
    }
    if ( nNormal == B7891o ){
        return B7891o+dec;
    } else if (nNormal.length == 1 || nNormal == 10){
        return B7891a[nNormal]+dec;
    } 
    else{
        let result = "";
        let rstr = String(nNormal).replace("-", "").split("").reverse().join("");
        for (let i in rstr){
            if (rstr[i]==0){
                continue;
            }
            result += i==0?B7891a[rstr[i]]+"+":`(${B7891a[rstr[i]]})×(${B7891a[10]})${i!=1?"^("+B7891ize(i)+")":""}×`;
        }
        if ((result+dec).includes("undefined")){
            return "";
        }
        if (nNormal < 0) {
            return `${result.slice(0, -1).replaceAll(`(${B7891a[1]})×`, "")}×(${B7891neg})`+dec;
        }
        return result.slice(0, -1).replaceAll(`(${B7891a[1]})×`, "")+dec;
    }
}

const input = document.getElementById('input');
const result = document.getElementById('result');

input.addEventListener('input', () => {
  try {
    result.textContent = B7891ize(input.value);
  } catch(e) {
    result.textContent = e;
  }
});
