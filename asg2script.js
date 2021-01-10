// Code in the document.ready will run once the page DOM is ready for javascript to execute
//$(document).ready(function() {


//When user clicks on movie, the information in single.html will change accordingly
/*$("movie-title1").on("click", function (e) {
	e.preventDefault();
	localStorage.setItem("Wonder Woman 1984", "yes");
})
localStorage.getItem("Wonder Woman 1984")
if(localStorage.getItem("Wonder Woman 1984") === "yes") {
	document.querySelector("#movie-title-single").innerHTML = `<h4>${result.results[0].title}</h4>`
}*/



	//fetch the data 
	var requestOptions = {
		method: 'POST',
		redirect: 'follow'
	};

	//change the image according to the api sequence
	/*
function loadwonderwoman() {
	fetch("https://api.themoviedb.org/3/movie/popular?api_key=d1fc73b3deaa77b65cbfa09ade1f4de1&language=en-US&page=1", requestOptions)
	document.querySelector("#movie-title-single").innerHTML = `<p>${result.results[0].title}</p>`		
}*/
	/*function clickmovie() {
		let movietitle = document.getElementById("movietitle1").getAttribute("value");
		if(movietitle === "wonderwoman") {
			document.querySelector("movie-title-single").innerHTML = `<h4>${result.results[0].title}</h4>`
		} else {
			console.log("cant find movie");
		}
	}*/

	//fetch and display Popular movie titles	
	function fetchPopularMovies() {
		fetch("https://api.themoviedb.org/3/movie/popular?api_key=d1fc73b3deaa77b65cbfa09ade1f4de1&language=en-US&page=1", requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result)
				//displays the movie title
				document.querySelector("#movie-title1").innerHTML = `<p>${result.results[0].title}</p>`
				//displays the movie date
				document.querySelector("#movie1Date").innerHTML = `<p>${result.results[0].release_date}</p>`
				//displays the movie rating
				document.querySelector("#rating1").innerHTML = `<p>${result.results[0].vote_average}</p>`

				document.querySelector("#movie-title2").innerHTML = `<p>${result.results[1].title}</p>`
				document.querySelector("#movie2Date").innerHTML = `<p>${result.results[1].release_date}</p>`
				document.querySelector("#rating2").innerHTML = `<p>${result.results[1].vote_average}</p>`

				document.querySelector("#movie-title3").innerHTML = `<p>${result.results[2].title}</p>`
				document.querySelector("#movie3Date").innerHTML = `<p>${result.results[2].release_date}</p>`
				document.querySelector("#rating3").innerHTML = `<p>${result.results[2].vote_average}</p>`
				

				document.querySelector("#movie-title4").innerHTML = `<p>${result.results[3].title}</p>`
				document.querySelector("#movie4Date").innerHTML = `<p>${result.results[3].release_date}</p>`
				document.querySelector("#rating4").innerHTML = `<p>${result.results[3].vote_average}</p>`

				document.querySelector("#movie-title5").innerHTML = `<p>${result.results[4].title}</p>`
				document.querySelector("#movie5Date").innerHTML = `<p>${result.results[4].release_date}</p>`
				document.querySelector("#rating5").innerHTML = `<p>${result.results[4].vote_average}</p>`
				
				document.querySelector("#movie-title6").innerHTML = `<p>${result.results[5].title}</p>`
				document.querySelector("#movie6Date").innerHTML = `<p>${result.results[5].release_date}</p>`
				document.querySelector("#rating6").innerHTML = `<p>${result.results[5].vote_average}</p>`

				document.querySelector("#movie-title7").innerHTML = `<p>${result.results[6].title}</p>`
				document.querySelector("#movie7Date").innerHTML = `<p>${result.results[6].release_date}</p>`
				document.querySelector("#rating7").innerHTML = `<p>${result.results[6].vote_average}</p>`

				document.querySelector("#movie-title8").innerHTML = `<p>${result.results[7].title}</p>`
				document.querySelector("#movie8Date").innerHTML = `<p>${result.results[7].release_date}</p>`
				document.querySelector("#rating8").innerHTML = `<p>${result.results[7].vote_average}</p>`

				document.querySelector("#movie-title9").innerHTML = `<p>${result.results[8].title}</p>`
				document.querySelector("#movie9Date").innerHTML = `<p>${result.results[8].release_date}</p>`
				document.querySelector("#rating9").innerHTML = `<p>${result.results[8].vote_average}</p>`
			})
			.catch(error => {
				console.log('error', error)
			});
	}
	



	function fetchTopMovies() {
		fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d1fc73b3deaa77b65cbfa09ade1f4de1&language=en-US&page=1", requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result)
				//displays the movie title
				document.querySelector("#movietop1").innerHTML = `<p>${result.results[0].title}</p>`
				//displays the movie date
				document.querySelector("#movietop1date").innerHTML = `<p>${result.results[0].release_date}</p>`
				//displays the movie rating
				document.querySelector("#movietoprating1").innerHTML = `<p>${result.results[0].vote_average}</p>`

				document.querySelector("#movietop2").innerHTML = `<p>${result.results[1].title}</p>`
				document.querySelector("#movietop2date").innerHTML = `<p>${result.results[1].release_date}</p>`
				document.querySelector("#movietoprating2").innerHTML = `<p>${result.results[1].vote_average}</p>`

				document.querySelector("#movietop3").innerHTML = `<p>${result.results[2].title}</p>`
				document.querySelector("#movietop3date").innerHTML = `<p>${result.results[2].release_date}</p>`
				document.querySelector("#movietoprating3").innerHTML = `<p>${result.results[2].vote_average}</p>`
			
				document.querySelector("#movietop4").innerHTML = `<p>${result.results[3].title}</p>`
				document.querySelector("#movietop4date").innerHTML = `<p>${result.results[3].release_date}</p>`
				document.querySelector("#movietoprating4").innerHTML = `<p>${result.results[3].vote_average}</p>`

				document.querySelector("#movietop5").innerHTML = `<p>${result.results[4].title}</p>`
				document.querySelector("#movietop5date").innerHTML = `<p>${result.results[4].release_date}</p>`
				document.querySelector("#movietoprating5").innerHTML = `<p>${result.results[4].vote_average}</p>`
				
				document.querySelector("#movietop6").innerHTML = `<p>${result.results[5].title}</p>`
				document.querySelector("#movietop6date").innerHTML = `<p>${result.results[5].release_date}</p>`
				document.querySelector("#movietoprating6").innerHTML = `<p>${result.results[5].vote_average}</p>`

				document.querySelector("#movietop7").innerHTML = `<p>${result.results[6].title}</p>`
				document.querySelector("#movietop7date").innerHTML = `<p>${result.results[6].release_date}</p>`
				document.querySelector("#movietoprating7").innerHTML = `<p>${result.results[6].vote_average}</p>`

				document.querySelector("#movietop8").innerHTML = `<p>${result.results[7].title}</p>`
				document.querySelector("#movietop8date").innerHTML = `<p>${result.results[7].release_date}</p>`
				document.querySelector("#movietoprating8").innerHTML = `<p>${result.results[7].vote_average}</p>`

				document.querySelector("#movietop9").innerHTML = `<p>${result.results[8].title}</p>`
				document.querySelector("#movietop9date").innerHTML = `<p>${result.results[8].release_date}</p>`
				document.querySelector("#movietoprating9").innerHTML = `<p>${result.results[8].vote_average}</p>`

				document.querySelector("#movietop10").innerHTML = `<p>${result.results[9].title}</p>`
				document.querySelector("#movietop10date").innerHTML = `<p>${result.results[9].release_date}</p>`
				document.querySelector("#movietoprating10").innerHTML = `<p>${result.results[9].vote_average}</p>`
			})
			.catch(error => {
				console.log('error', error)
			});
	}

	

	
	
	

	//change the images according to the movie title
	



	/*local storage
	let PopularStorage = {
		movie: "Wonder Woman 84",
		date: "2020",
		description: "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah."
	};

	let PopularStorage_serialized  = JSON.stringify(PopularStorage);
	localStorage.setItem("PopularStorage", PopularStorage_serialized);
	let PopularStorage_deserialized = JSON.parse(localStorage.getItem("PopularStorage"));
	console.log(PopularStorage_deserialized);*/

	//update page when movie is clicked

	
	//function to update single page
	/*function changeDetails(){
		if($("a").attr("value") == "Storks") {
			document.querySelector("#movie-title-single").innerHTML = `<h4>this is testing</h4>`
		}
	}*/

	
	//execute functions that display popular movie titles, dates, and ratings
	fetchPopularMovies()
	//execute functions that display top rated movie titles, dates and ratings
	fetchTopMovies()
	movie3img()
	

//})