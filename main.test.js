//👉 Write your tests below here:
import {test, expect} from "@jest/globals"

import{uniqueLetters} from "./main.js"


test("Does input hello return false", function () {
    let actual = uniqueLetters("hello")
expect(actual).toBe(false)
})

test("Does input grand return false", function () {
    let actual = uniqueLetters("grand")
expect(actual).toBe(true)
})

test("Does same letter in different cases return false", function () {
    let actual = uniqueLetters("WLKDwlkd")
expect(actual).toBe(false)
})

test("Does mix of number and letters return true", function () {
    let actual = uniqueLetters("Wo0d23456")
expect(actual).toBe(true)
})

test("Does repeated lettrs in different order return false", function () {
    let actual = uniqueLetters("loleh")
expect(actual).toBe(false)
})
