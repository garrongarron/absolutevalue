var fibonacci_series = function (n)
{
    var a = [0,1];
    while (a[a.length - 1] < n) {
       a.push(a[a.length - 1]+a[a.length - 2])
    }
    a.pop();
    a.shift();
    return a;
};

 console.log(fibonacci_series(2), 2);
 console.log(fibonacci_series(3), 3);
 console.log(fibonacci_series(4), 4);
 console.log(fibonacci_series(5), 5);
 console.log(fibonacci_series(6), 6);