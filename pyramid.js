let k = 1;
let string = '';
for (let i = 0; i < 10; i++) {
    for (let j = 0; j <=i; j++) {
       string = string + k;
       string = string + " ";
      
        
    }
    string = string +"\n";
    k=k+2;
    

}
console.log(string);