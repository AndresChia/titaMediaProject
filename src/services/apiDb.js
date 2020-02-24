const url = 'http://localhost:3001';


export const getData = () => fetch(`${url}/images`).then(v => v.json());
