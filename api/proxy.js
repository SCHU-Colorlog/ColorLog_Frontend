// api/proxy.js
export default async function handler(req, res) {
    const { method, query } = req;
  
    const apiUrl = `http://35.216.11.182:8080/api/${query.path}`;
  
    try {
      const response = await fetch(apiUrl, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: method !== 'GET' ? JSON.stringify(req.body) : null,
      });
  
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data' });
    }
  }