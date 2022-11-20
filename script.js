const API_KEY = "AIzaSyAOVgPrnmO_ChB08mx_C-Vpwr44wSbT7F4"

const base_URL = "https://www.googleapis.com/youtube/v3"
const client_id = "960691883726-nv2b08kakrn3ml48fvtltpueksp4utav.apps.googleusercontent.com"
const channel_id = "UC70qcuRJ0dFW54sjW-WQkBA"

function getChannelActivity(){
    fetch(`${base_URL}/channels?part=contentDetails&id=${channel_id}&key=${API_KEY}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data["items"][0].contentDetails);
        document.getElementById("channels-list").innerHTML = "uploads id: " + data["items"][0].contentDetails.relatedPlaylists.uploads;
    })
}

function getPlayList(){
    fetch(`${base_URL}/playlists?part=contentDetails&id=${channel_id}&key=${API_KEY}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        document.getElementById("subscribers-id").innerHTML = "subscriberCount : " + data["items"][0].contentDetails.id;
    })
}

function getChannelInfo()  {
    fetch(`${base_URL}/channels?part=statistics&id=${channel_id}&key=${API_KEY}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        console.log("subscriberCount " + data["items"][0].statistics.subscriberCount);
        console.log("viewCount "+data["items"][0].statistics.viewCount);
        document.getElementById("subscriberCount").innerHTML = "subscriberCount : " +data["items"][0].statistics.subscriberCount;
        document.getElementById("viewCount").innerHTML = "viewCount : " + data["items"][0].statistics.viewCount;
        document.getElementById("videoCount").innerHTML=  "videoCount : " + data["items"][0].statistics.videoCount;
        // console.log("subscriberCount.value : "+subscriberCount.value +" "+ "viewCount.value :"+viewCount.value )
    })
}
// getChannelInfo();
// getChannelActivity();




