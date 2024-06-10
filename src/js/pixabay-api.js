


export function processHttpRequest(searchQuery) {

   const searchParams = new URLSearchParams({
       key: '44309654-823a8ee5bf9a3cfe17e257280',
       q: searchQuery,
       image_type: 'photo',
       orientation: 'horizontal',
       safesearch: 'true',
    });

 return fetch(`https://pixabay.com/api/?${searchParams}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      throw error;
    });
}

