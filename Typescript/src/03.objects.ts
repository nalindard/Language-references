let user: {
    id: number
    name: string
    greet: (msg: string) => void
} = {
    id: 1,
    name: 'Falcon',
    greet: function (msg: string = 'Say hi'): void {
        console.log(`${msg} ${this.name}`)
    },
}

console.log(user.id)
console.log(user.name)
user.greet('Say hi')
// user.greet()

type User = {
    id: number
    name: string
    greet: (msg: string) => void
}

let user2: User = {
    id: 1,
    name: 'Falcon',
    greet: function (msg: string = 'Say hi'): void {
        console.log(`${msg} ${this.name}`)
    },
}

console.log(user2.id)
console.log(user2.name)
user2.greet('Say hi')
// user.greet()
