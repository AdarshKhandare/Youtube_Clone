let moviedataa = JSON.parse(localStorage.getItem("youtubeDATAA")) || []
console.log(moviedataa)

const showmoviess = () => {

    document.getElementById("showMovie").innerHTML = null;

            moviedataa.forEach((ele) =>{

            let div = document.createElement("div");
            div.setAttribute("id","video")


            let name = document.createElement("h2");
            name.innerText = ele.snippet.title;

            let channelTitle = document.createElement("p");
            channelTitle.innerText = ele.snippet.channelTitle;

 
            let thumb = document.createElement("iframe");
            thumb.src = `https://www.youtube.com/embed/${ele.id.videoId}`;
            

            div.append(thumb,name,channelTitle);

            document.querySelector("#showMovie").append(div)

            });

}
showmoviess()