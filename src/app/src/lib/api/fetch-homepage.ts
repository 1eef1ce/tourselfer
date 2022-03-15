export async function loadHomepage(locale: string) {

    const resource = await fetch(process.env.API_HOST + '/api/v1/homepage?language=' + locale);
    return await resource.json();

  }