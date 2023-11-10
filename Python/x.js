// (function run() {
//     const x = console.log

//     x('lol')
// })()
const c = console
const f = function(){}
const $ = { c: console, l: c.log, t: c.table}
$.x()

$.l('12')
$.t({1:'n',2:'n',3:'n',4:'n',5:'n',6:'n'})
