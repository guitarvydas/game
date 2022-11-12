// var test = "7Vpbc5s4FP41fvQOIMDmMXZzmbbpdCab3eSpIxsBagSiQr71168wwlwk15tMwGnoiwcdXbC+7+joXBiBeby9ZjCNbqmPyMgy/O0IfBhZ1mQKxG8u2BUCz3AKQciwX4jMSnCHfyIpNKR0hX2UNQZySgnHaVO4pEmClrwhg4zRTXNYQEnzrSkMkSK4W0KiSv/FPo+k1DSMquMG4TCSr546siOG5WApyCLo001NBC5HYM4o5cVTvJ0jkmNX4nJ7YweLz/dP6/TvgATw07dPj1fjYrGr50w5bIGhhL94aRDN+c80Dm//Gd9FV/71x2/+Qk4x1pCsJF5LGqeYICb3zHclkIyuEh/li5kjMNtEmKO7FC7z3o3QHCGLeExk9xoxjgUJFwSHiZBxmg+QLxN9aNti58TWzAPeQk8RjRFnOzFPrmLbch9SR6eyuakRXrIY1bi2ynlQKll4WLoCUjxILJ+Bq6ngquB5AkGYpcVxCPA2R30WYELmlFC2nw6CILCWSyHPOKNPqNbjuwvXcTuE23GacB9OSA1vLdyvgPZjEN7w3WLm3I5/BOTxCY1Nc1zamhq6yBdWQDYp4xENaQLJZSWdVfpsiFY15jPNdXXPwXfE+U6aNLjitMkQ2mL+UHt+zJf6y5GtD1u58r6xKxuJ2O9DvVGblTeraftWOa/YX76pFxApgKErtkS/0FepnhyyEPFfIO3oFYMhAjleN//cqx8qa0iHynSd3g6VFm0wKLTN/kyYFm27c7R9B019W4f21FoAt0u0bdBC2zsz2o6KNrjI1uFYYIYSGCMFfIEIb+LdhDGhCWphLkVQukBLgaBwq1TfKMa+v7+RdAQ3b6muCAJu2/ioBE37JMjVEURwlg6MGKdFjObg2H3yMtHx8j2jycB5MW31tu6VmKmOGLE09CGHAyfHMtRT43ZEDvnyNMczI7kn11/u1+bX6OGGl65Uz+HJGw01vJESamhBO8JxP6GG17k79oacX12+pFd3rHS+m9YLMUbVNNSwTBfQmC7QKzXuH9tVQ6PMYNeM1/Fw7lzGy9RkH8EFTtIVPx7giHVxmh3T/ho3byestNpOmC7va2hOy2ukfbXpMdWO5XiPNwzz3yujPmlH7Ibq32pT6mZn2HafUj+jKk+sFt6gv+yfFm1LZ0IGmh1xJ+1koUpOr/GEfZY7+fcsd2i1G6jXeCcxyH7qBWNwVxuQUpzwrLby11xQqZsH2uGrU9eY0+M9o6VhxT+o9O2wlZfbh3ddHZi26smmd2ZrrKkODDM+mv6P0nNX8dHxguhgvJIea5JatLVlgb3GD+sYuF7bQPVXF9A756ra/3FJnuWS6FILx+Ogvn0St3Ujuq1vzU4ML8sjnbok+rQHXfH3nvew1cPfWdpD6yZr0h4QEwXqN5zv8Can/Yru8h3HY4/36ll47RJdjyUILdrafEeMsiz/vHhYzoVnNrnR1SBeKd0hmtX308U9UH2EDi7/Aw=="
;

var fs = require ('fs');

var test = fs.readFileSync ('test.txt', 'UTF-8');

// npm install atob
var atob = require ('atob');
var data = atob(test);
console.log (data.length);

// npm install pako
var pako = require ('pako');

var inf = pako.inflateRaw (
    Uint8Array.from (data, c=>c.charCodeAt (0)), {to: 'string'})
var str = decodeURIComponent (inf);
console.log (str);
