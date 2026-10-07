// Central API URL configuration
// Supports:
// - REACT_APP_API_URL (e.g. "https://api.example.com", "https://api.example.com/api", or "http://localhost:5000/api")
// - REACT_APP_API_BASE_URL (alias used in some environments)

const rawUrl = (
  process.env.REACT_APP_API_URL ||
  process.env.REACT_APP_API_BASE_URL ||
  ''
).trim();

// Strip any trailing slashes and trailing '/api' to get the clean origin root
// e.g. "https://backend.vercel.app/api/" -> "https://backend.vercel.app"
//      "http://localhost:5000/api"      -> "http://localhost:5000"
const cleanRoot = rawUrl
  .replace(/\/+$/, '')
  .replace(/\/api\/?$/, '');

// API_BASE is the root origin (without /api)
// When empty (local proxy / same origin), returns '' so `${API_BASE}/api/...` calls `/api/...`
export const API_BASE = cleanRoot;

// API_URL is the full base URL including '/api'
// Used by axios/apiClient: e.g. "https://backend.vercel.app/api" or "/api"
export const API_URL = cleanRoot ? `${cleanRoot}/api` : '/api';

export default API_BASE;
