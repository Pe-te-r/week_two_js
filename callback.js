const evenNumbers=(number)=>{
    return number % 2===0
}

const oddNumbers=(number)=>{
    return number %2 !== 0
}

const seperationOddEvenNumbers=(numbers,evenNumbersCallback,oddNumbersCallback)=>{
    const even_numbers=numbers.filter(evenNumbersCallback)
    const odd_numbers=numbers.filter(oddNumbersCallback)

    return {"even": even_numbers,"odd":odd_numbers}
}

numbers=[1,2,3,4,5,6,7,8,9,0]

const result=seperationOddEvenNumbers(numbers,evenNumbers,oddNumbers)


console.log(`even numbers:  ${result.even}`)
console.log(`odd numbers:   ${result.odd}`)
