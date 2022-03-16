let moviedata = JSON.parse(localStorage.getItem("youtubeDATA")) || []
console.log(moviedata)

const showmovies = () => {

    document.getElementById("showMovie").innerHTML = null;

            moviedata.forEach((ele) =>{

            let div = document.createElement("div");
            div.setAttribute("id","video")


            let name = document.createElement("h2");
            name.innerText = ele.snippet.title;

            let channelTitle = document.createElement("p");
            channelTitle.innerText = ele.snippet.channelTitle;

 
            let thumb = document.createElement("iframe");
            thumb.src = `https://www.youtube.com/embed/${ele.id}`;
            

            div.append(thumb,name,channelTitle);

            document.querySelector("#showMovie").append(div)

            });

}
showmovies()

