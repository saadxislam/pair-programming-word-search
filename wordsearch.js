const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))

    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    let verticalJoin = [];
    
    const colSize = letters.length;
    for (let i = 0; i < colSize; i++) {
        let wordArr = [];
        for (const array of letters) {
            wordArr.push(array[i]);
        }
        verticalJoin.push(wordArr);
    }
    const verticalJoint = verticalJoin.map(ls => ls.join(''))

    for (l of verticalJoint) {
        if (l.includes(word)) 
        return true
    }

    return false;
}

module.exports = wordSearch

