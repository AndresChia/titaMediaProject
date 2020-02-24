const url = 'http://localhost:3000';

export const getData = () => fetch(`${url}/images`).then(v => v.json());
