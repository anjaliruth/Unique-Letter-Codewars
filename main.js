/* 
👉 Write your kata here!
*/
// Unique Letters: Write a function that takes in a string and returns True if all the letters in the string are unique and False otherwise. For example, "hello" should return False because it contains the letter "l" twice, while "world" should return True.

//👉 Write the function your CodeWarriors will start with below here:

export function uniqueLetters(string) {
    let seenLetters = new Set()

    for (let i = 0; i < string.length; i++)
    {
        let letter = string[i].toLowerCase()

        if (seenLetters.has(letter)) {
            return false
        }
        else {
            seenLetters.add(letter)
        }
    }
    return true
}
