// Return the number of vowels in a string

function countVowels(string) {
    const vowels = 'aeiouAEIOU'
    let count = 0;
    for(let i=0; i < string.length; i++) {
        if (vowels.includes(string[i])) {count++
        }
    }
    return count

}

console.log(countVowels('Whatsapp'))
console.log(countVowels('skipping'))
console.log(countVowels('JavaScript'))
console.log(countVowels('laptop'))
console.log(countVowels('Apple'))