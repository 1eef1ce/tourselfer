export async function loadHomepage(locale: string) {

    //const resource = await fetch(process.env.API_HOST + '/api/v1/homepage?language=' + locale);
    //return await resource.json();

    return await fetch(process.env.API_HOST + '/api/v1/homepage?language=' + locale)
      .then(resource => resource.json())
      .then(resource => {
        return resource;
      })
      .catch (error => {
        return {};
      });
  }