class NewUser {
    // static _n: number = 0
    private static _n: number = 0

    enter() {
        NewUser._n++
    }
    leave() {
        NewUser._n--
    }

    static get userCount() {
        return NewUser._n
    }
}

let a = new NewUser()
a.enter()

let b = new NewUser()
b.enter()

console.log(NewUser.userCount)
