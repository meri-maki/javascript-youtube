//first test js code
console.log('Hello git');

//converting Javascript into JSON
const post = {
    title: 'Movie',
    likesQty: 46
};

JSON.stringify(post) //results in '{"title":"Movie","likesQty":46}'

//converting JSON into Javascript
const postStringified = JSON.stringify(post);

JSON.parse(postStringified); 
/* results in 
{likesQty: 46,
title: "Movie"} */


