function person<T extends string | number>(name: T): T{
    return name;
}

/* 
    sem extends:
    const p = person<string>('Poul'); 
*/
const p = person('Poul');

console.log(p);

