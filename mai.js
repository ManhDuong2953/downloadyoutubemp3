const inputSMS = document.querySelector('.inputsms');
const btnDownload = document.querySelector('.download');
const des = document.querySelector('.des');






inputSMS.oninput = () => {
	var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	var match = inputSMS.value.match(regExp);
	if (match && match[7].length == 11) {
		console.log(match[7])
		IDLink = match[7];
		fetchAPI(IDLink);  
		btnDownload.onclick = () => {
			linkdown(response) 
		}
	}
}

function linkdown(response) {
	console.log(response)
	var dura = response.duration / 60;
	des.innerHTML = `${response.title}<br>
	<small  style="color: white;">Thời lượng: ${dura.toFixed(2)} phút</small>`;
	console.log(response)
	document.getElementsByTagName("h2").innerHTML = " ";
	btnDownload.href = response.link;
}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com',
		'X-RapidAPI-Key': 'da8f4fe7f1mshb03498d43e2124fp198e80jsn275fd40722e9'
	}
};
function fetchAPI(IDLink) {
	var url = `https://youtube-mp3-download1.p.rapidapi.com/dl?id=${IDLink}`;
	fetch(url, options)
		.then(response => response.json())
		.then(response => linkdown(response))
		.catch(err => console.log(err));
}


