/get Robins Log Info

fetch('http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

  //Results
      response.json().then(function(data) {

          let title = data.results.title;
          console.log(`Title: ${title}`);
          let href = data.results.href ;
          console.log (`href: ${href}`)
          let ingredients = data.results.ingredients;
          console.log (`ingredients: ${ingredients}`)
          let thumbnail = data.results.thumbnail ;
          console.log (`thumbnail: ${thumbnail}`)

          let searchcontent= 



          let markup = `
                     <div class="title">
                       <p>Title: ${title}</p>
                     
                   `

                   document.body.innerHTML = markup;
