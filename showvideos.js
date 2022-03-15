let moviedata = JSON.parse(localStorage.getItem("youtubeDATA")) || []
console.log(moviedata)

const showmovies = () => {

    document.getElementById("showMovie").innerHTML = null;

            moviedata.forEach((ele) =>{

            let div = document.createElement("div");
            div.setAttribute("id","video")


            let name = document.createElement("h2");
            name.innerText = ele.snippet.title;

 
            let thumb = document.createElement("iframe");
            thumb.src = `https://www.youtube.com/embed/${ele.id}`;
            

            div.append(thumb,name);

            document.querySelector("#showMovie").append(div)

            });

}
showmovies()

let moviedataa = JSON.parse(localStorage.getItem("youtubeDATAA")) || []
console.log(moviedataa)

const showmoviess = () => {

    document.getElementById("showMovie").innerHTML = null;

            moviedataa.forEach((ele) =>{

            let div = document.createElement("div");
            div.setAttribute("id","video")


            let name = document.createElement("h2");
            name.innerText = ele.snippet.title;

 
            let thumb = document.createElement("iframe");
            thumb.src = `https://www.youtube.com/embed/${ele.id.videoId}`;
            

            div.append(thumb,name);

            document.querySelector("#showMovie").append(div)

            });

}
showmoviess()