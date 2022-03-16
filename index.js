
//https://youtube.googleapis.com/youtube/v3/search?q=football&key=[YOUR_API_KEY]
// api key AIzaSyAAMhAgMFDlPicKh0IQKxk0KzRsnph20s4


const bydefault = async ()=>{

    try {
        // let input = document.getElementById("search").value

        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyCTOdKJBRt1Tn7NSkUDZBnp9InHxCpvTdg`)

        let data = await res.json()
        
        let videos = data.items;
        console.log(videos)
        bydefaultVideos(videos)
    }
    catch(e){
        console.log("Video NOt Found!")

    }
}
bydefault()
// embed URL :-- https://www.youtube.com/embed/8FAUEv_E_xQ

const bydefaultVideos = (data) =>{

    document.querySelector("#search_results").innerHTML = null;
        try{
            
            data.forEach((ele) =>{

            let div = document.createElement("div");
            div.setAttribute("id","Maindiv")

            div.addEventListener("click", () =>{

                movieshowww(ele)
                window.location.href = "showvideos.html"
            })

            let titlee = document.createElement("h4");
            titlee.innerText = ele.snippet.title;

            let channelTitle = document.createElement("p");
            channelTitle.innerText = ele.snippet.channelTitle;
 
            let thumb = document.createElement("img");
            thumb.src = ele.snippet.thumbnails.high.url;
            thumb.setAttribute("id","thumb")
            

            div.append(thumb,titlee,channelTitle);

            document.querySelector("#search_results").append(div)

            });

        }

        catch(e){
            console.log("Video Not FOUND")
        }

}
let moviearr = [];
function movieshowww(ele)
{
    
    moviearr.push(ele)
    localStorage.setItem("youtubeDATA",JSON.stringify(moviearr))
}





const searchVideos = async ()=>{

    try {
        let input = document.getElementById("search").value

        let res = await fetch(` https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&key=AIzaSyCTOdKJBRt1Tn7NSkUDZBnp9InHxCpvTdg&maxResults=50`)

        let data = await res.json()
        
        let videos = data.items;
        console.log(videos)
        appendVideo(videos)
    }
    catch(e){
        console.log("Video NOt Found!")

    }
}
// embed URL :-- https://www.youtube.com/embed/8FAUEv_E_xQ

const appendVideo = (data) =>{

    document.querySelector("#search_results").innerHTML = null;
        try{
            
            data.forEach((ele) =>{

            let div = document.createElement("div");
            div.setAttribute("id","Maindiv")

            div.addEventListener("click", () =>{

                movieshOO(ele)
                window.location.href = "SearchVedeos.html"
            })

            let titlee = document.createElement("h4");
            titlee.innerText = ele.snippet.title;
            
            let channelTitle = document.createElement("p");
            channelTitle.innerText = ele.snippet.channelTitle;
 
            let thumb = document.createElement("img");
            thumb.src = ele.snippet.thumbnails.high.url;
            thumb.setAttribute("id","thumb")
            

            div.append(thumb,titlee,channelTitle);

            document.querySelector("#search_results").append(div)

            });

        }

        catch(e){
            console.log("Video Not FOUND")
        }

}
let moviearrXX = [];
function movieshOO(ele)
{
    
    moviearrXX.push(ele)
    localStorage.setItem("youtubeDATAA",JSON.stringify(moviearrXX))
}

