

const url = 'https://youtube-v3-alternative.p.rapidapi.com/related?id=dQw4w9WgXcQ&geo=US&lang=en';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a6bc9614c4mshc145c549c933bf7p1c6bcejsnd336c5a0fdc6',
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};

 
  export const fetchFromApi = async ()=> {

  const relatedVideos = fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));


    return relatedVideos;
  }
