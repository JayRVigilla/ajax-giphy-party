$('#searchbutton').on('click', getGif)
$('#destroy').on('click', clearDiv)

async function getGif() {
    let userSearch = $('input').val();
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
    // console.log(response.data);
    // console.log(response.data.data[0].url);
    appendToDom(response.data.data[0].images.fixed_height.url)

}

// appends gif to DOM
function appendToDom(gifLink) {
    let $gifToAdd = $('<img>')
        .attr('src', gifLink);
    $('.allTheGif').append($gifToAdd);
}

//clear div of gifs
function clearDiv(){
    $('.allTheGif').empty();
}

console.log("Let's get this party started!");