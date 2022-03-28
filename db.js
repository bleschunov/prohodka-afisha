import { Component } from "react"
// const Chance = require('chance')

// const chance = new Chance()

module.exports = () => {
    let data = { users: [] }
    for (let i = 0; i < 1000; i++) {
        data.users.push({ id: i, name: chance.string })
    }
    return data
}
