export class Ajax {
  serverUrl = 'http://localhost:3000/api'

  get = async (url) => {
    const response = await fetch(`${this.serverUrl}/${url}`);

    return response.json();
  }
}
