// logical view

// line of input:
    // int T (number of test cases)
    // two positive integers: int n (1 <= n) (space) int m (0 < m <= 50)
    // line 1: String (where String.length = m)
    // line n (line is after n and m declaration)
    // V | H (V - reshuffle indexes of sub-arrays/ H - reshuffle indexes of array)


const input = [
    2,
    [3, 3],
    'abc',
    'def',
    'ijk',
    'V',
    [4, 4],
    'abcd',
    'efgh',
    'ijkl',
    'mnop',
    'H'
]

const numberOfStruc = input[0]
let output = {
    state: null,
    structures: []
}

for (let index = 0; index < numberOfStruc; index++) {
    output.structures.push(
        {
         n: 0,
         m: 0,
         values: [],
         shuffle: ''
        })
}

// const start = 1, lengthOfInput = (input.length - 1), inputSegment = lengthOfInput/ numberOfStruc
const updatedInput = input.slice(1, input.length)
updatedInput.map((value, index) => {
    // console.log(value)
    if(value.constructor === Array) {
        // console.log(value)
        // console.log(((index - start)/inputSegment))
        output.state = (output.state === null) ? 0: output.state + 1
        output.structures[output.state].n = value[0]
        output.structures[output.state].m = value[1]

        // console.log(output.structures)
    }
    if (value.constructor === String && output.structures[output.state].values.length < output.structures[output.state].n) {
        output.structures[output.state].values.push(value)
        // console.log(output.structures[output.state])
    }
    if (value.constructor === String && output.structures[output.state].values.length >= output.structures[output.state].n) {
        output.structures[output.state].shuffle = value
        // console.log(output.structures[output.state])
    }
})

// console.log(output.structures)

output.structures.map((structure, index) => {
    if (structure.shuffle === 'V') {
        structure.values.map((string, strIndex) => {
            structure.values[strIndex] = string.toString().split('').reverse().join('')
            // console.log(result)
        })
        // console.log(structure)
    }
    if (structure.shuffle === 'H') {
        structure.values.reverse()
        // console.log(structure)
    }
})

// console.log(output.structures)
const result = []
output.structures.map((structure) => {
    structure.values.push('')
    result.push(...structure.values)
})

console.log(result)

// line of output:
    // line 1: String (where String is mirror image if V)
    // line n (where line order is mirror image if H)
    // empty line


// entity: two dimension array

// condition: mirror is placed along one of the side of the array

// expected: print its mirror image


// const start = 1, lengthOfInput = (input.length - 1), inputSegment = lengthOfInput/ numberOfStruc
// for (let index = 0; index < numberOfStruc; index++) {
//     output.push(input.slice((start + (inputSegment * index)), ))
// }
// const slicedInput = input.slice()