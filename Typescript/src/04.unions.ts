let union: number | string

union = 27
union = 'Lockheart'

console.log(union)

// ------------------------

// Type Narrowing,

type Union = number | string

const f = (z: Union): void => {
    if (typeof z === 'string') {
        console.log(z.toUpperCase())
    } else {
        console.log(z)
    }
}
