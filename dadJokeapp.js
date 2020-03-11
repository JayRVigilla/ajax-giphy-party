let jokes = [];
// axios.default.headers.common['Accept'] = 'text/plain';

let config = {
    headers: {
        header1: 'application/json'
    }
};


async function dadJokes() {
    for (let i = 0; i < 10; i++) {
        let joke = await axios.get('https://icanhazdadjoke.com/');
        jokes.push(joke);
    }
    console.log(jokes);
}
dadJokes();




// calculate net score()

// vote up button 
// vote down button 
// netscoreboard

