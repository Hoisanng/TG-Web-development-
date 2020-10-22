// Opdracht 7
let i = 1;
while (i < 4) {
    for (let j = 1; j < 11; j++) {
        console.log(i * j);
    }
    i++
}

// Opdracht 8
let f = 1;
let prev = 0;

for (let i = 0; i < 50; i++) {
    console.log(f);
    let tf = f;
    f = f + prev;
    prev = tf;
}

// Opdracht 9
function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

console.log(bubble_Sort([2, 7, 5, 10, 4, 9, 3, 1, 8, 6]));