//Print a table containing multiplication tables

function printMultiplicationTable() {

}
for (let x = 1; x<=12; x++) {
    for (let y = 2; y<=12; y++) {
        table += (x*y) + '/t'; 
    }
    table += '\n';
}
        console.log(printMultiplicationTable)

    printMultiplicationTable()
