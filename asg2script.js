//fetch the data for popular movies
var requestOptions = {
	method: 'POST',
	redirect: 'follow'
	};
	
function fetchdata() {
	fetch("https://api.themoviedb.org/3/movie/popular?api_key=d1fc73b3deaa77b65cbfa09ade1f4de1&language=en-US&page=1", requestOptions)
	.then(response => response.json())
	.then(result =>  {
	  console.log(result)
		document.querySelector("#movie-title1").innerHTML = `<p>${result.results[0].original_title}</p>`
		document.querySelector("#release-year").innerHTML = `<p>${result.results[0].release_year}</p>`
	})
	.catch(error => {
	  console.log('error', error)
	});
  }

  function movie2() {
	fetch("https://api.themoviedb.org/3/movie/popular?api_key=d1fc73b3deaa77b65cbfa09ade1f4de1&language=en-US&page=1", requestOptions)
	.then(response => response.json())
	.then(result =>  {
	  console.log(result)
		document.querySelector("#movie-title2").innerHTML = `<p>${result.results[1].original_title}</p>`
	})
	.catch(error => {
	  console.log('error', error)
	});
  }

  function movie3() {
	fetch("https://api.themoviedb.org/3/movie/popular?api_key=d1fc73b3deaa77b65cbfa09ade1f4de1&language=en-US&page=1", requestOptions)
	.then(response => response.json())
	.then(result =>  {
	  console.log(result)
		document.querySelector("#movie-title3").innerHTML = `<p>${result.results[2].original_title}</p>`
	})
	.catch(error => {
	  console.log('error', error)
	});
  }

  function movie4() {
	fetch("https://api.themoviedb.org/3/movie/popular?api_key=d1fc73b3deaa77b65cbfa09ade1f4de1&language=en-US&page=1", requestOptions)
	.then(response => response.json())
	.then(result =>  {
	  console.log(result)
		document.querySelector("#movie-title4").innerHTML = `<p>${result.results[3].title}</p>`
	})
	.catch(error => {
	  console.log('error', error)
	});
  }

  function movie5() {
	fetch("https://api.themoviedb.org/3/movie/popular?api_key=d1fc73b3deaa77b65cbfa09ade1f4de1&language=en-US&page=1", requestOptions)
	.then(response => response.json())
	.then(result =>  {
	  console.log(result)
		document.querySelector("#movie-title5").innerHTML = `<p>${result.results[4].original_title}</p>`
	})
	.catch(error => {
	  console.log('error', error)
	});
  }

  function movie6() {
	fetch("https://api.themoviedb.org/3/movie/popular?api_key=d1fc73b3deaa77b65cbfa09ade1f4de1&language=en-US&page=1", requestOptions)
	.then(response => response.json())
	.then(result =>  {
	  console.log(result)
		document.querySelector("#movie-title6").innerHTML = `<p>${result.results[5].original_title}</p>`
	})
	.catch(error => {
	  console.log('error', error)
	});
  }

  function movie7() {
	fetch("https://api.themoviedb.org/3/movie/popular?api_key=d1fc73b3deaa77b65cbfa09ade1f4de1&language=en-US&page=1", requestOptions)
	.then(response => response.json())
	.then(result =>  {
	  console.log(result)
		document.querySelector("#movie-title7").innerHTML = `<p>${result.results[6].original_title}</p>`
	})
	.catch(error => {
	  console.log('error', error)
	});
  }


  function movie8() {
	fetch("https://api.themoviedb.org/3/movie/popular?api_key=d1fc73b3deaa77b65cbfa09ade1f4de1&language=en-US&page=1", requestOptions)
	.then(response => response.json())
	.then(result =>  {
	  console.log(result)
		document.querySelector("#movie-title8").innerHTML = `<p>${result.results[7].original_title}</p>`
	})
	.catch(error => {
	  console.log('error', error)
	});
  }

  function movie9() {
	fetch("https://api.themoviedb.org/3/movie/popular?api_key=d1fc73b3deaa77b65cbfa09ade1f4de1&language=en-US&page=1", requestOptions)
	.then(response => response.json())
	.then(result =>  {
	  console.log(result)
		document.querySelector("#movie-title9").innerHTML = `<p>${result.results[8].original_title}</p>`
	})
	.catch(error => {
	  console.log('error', error)
	});
  }


  
  fetchdata()
  movie2()
  movie3()
  movie4()
  movie5()
  movie6()
  movie7()
  movie8()
  movie9()