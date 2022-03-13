export async function loadHomepage() {
    console.log(process.env.API_HOST);
    const res = await fetch(process.env.API_HOST + '/api/v1/homepage');
    const data = await res.json();
  
    return data;
  }