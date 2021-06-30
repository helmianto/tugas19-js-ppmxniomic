let star = '*****';
let loop = 1;

for(let i=1; i<=9; i++){
    if(i == 1 || i == 9){
        temp = 1;
        console.log(star.repeat(temp));
    } else if(i > 1 && i < 5){
        temp = temp + 4;
        console.log(star.repeat(temp));
    } else if(i == 5){
        temp = temp + 6;
        console.log(star.repeat(temp));
        temp = temp - 6;
    } else if(i > 5 && i < 9){
        console.log(star.repeat(temp));
        temp = temp - 4;
    }
}