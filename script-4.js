//FUNCTIONS

const  multByFactor = (value, multiplier = 1) => {
    //MULTIPLIER IS SET TO 1 BY DEFAULT
    return value * multiplier
}

multByFactor(10,2) //20
multByFactor(5) //5 BECAUSE WE SET DEFAULT VALUE

const multByFactor2 = (value, multiplier = 1) => value * multiplier; //ANOTHER SYNTAX

console.log(multByFactor2(6)) //priints 6
console.log(multByFactor2(6,5)) //priints 30

//ANOTHER MORE COMPLEX EXAMPLE

const newPost = (post, addedAt = Date()) => ({ //USES ({..}) (неявный возврат - RETURNS OBJECT) AS FUNCTION CREATES NEW OBJECT
    ...post,
    addedAt
})

const firstPost = {
    id: 1,
    author: 'Ana'
}

console.log(newPost(firstPost))
/* RETURNS {
  id: 1,
  author: 'Ana',
  addedAt: 'Tue Jul 19 2022 21:38:01 GMT+0300 (Moscow Standard Time)'
} */

