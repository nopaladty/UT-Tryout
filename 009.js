const array = [1,2,3,1,4,2,3];

array.reduce((unique, item) => {
    console.log(
                // value
                item, 
                // array hasil (akumulasi)
                unique, 
                // nilai yang dikembalikan (value hanya akan disertakan pada array jika nilai berupa false)
                unique.includes(item), 
                // array akhir
                unique.includes(item) ? unique : [...unique, item]
                );
    return unique.includes(item) ? unique : [...unique, item];
},[]);

// Output
1 [] false [ 1 ]
2 [ 1 ] false [ 1, 2 ]
3 [ 1, 2 ] false [ 1, 2, 3 ]
1 [ 1, 2, 3 ] true [ 1, 2, 3 ]
4 [ 1, 2, 3 ] false [ 1, 2, 3, 4 ]
2 [ 1, 2, 3, 4 ] true [ 1, 2, 3, 4 ]
3 [ 1, 2, 3, 4 ] true [ 1, 2, 3, 4 ]
