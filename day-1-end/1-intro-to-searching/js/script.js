// So in this section, we're talking
// about search and searching algorithms.
//
// Now, when I say search,
// some of you might think of something like
// Google right away.

//
// And it's probably more like
// ten different algorithms that are being tested at any given time and things
//
// that are being tweaked.
//
// Not to mention the fact that this
// algorithm changes so much depending on who you are, your browsing
//
// history,
// the things that you've done and the things you've clicked on.
//

// But for now, what we're focusing on are even simpler searching algorithms that are really commonly
//
// used, but we may not often call it search.


// EXAMPLE 1

const usernames = ["emil88", "emil121", "hesh1112", "1223hesh", "tomm", "tomfy", "tom12"];

// let's say you are going to create an account on a website

// and you are going to enter a username of : i_love_mango


// You could, for example,
// do index of it's a simple one and let's try that username,
// that index of

const result = usernames.indexOf("i_love_mango");

console.log("result: ", result);
// -1  >>  it means that we don't have it

// if we have it in the usernames array it will return the index
// of this username


// in this course we are going to learn is how these
// are working behind the scenes and how
// we can implement our own versions of some
// of these functions, these built in methods,
// and how we can search across arrays and strings.


// reference slides : https://cs.slides.com/colt_steele/tries-21

