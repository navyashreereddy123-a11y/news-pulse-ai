const BASE_URL = "http://localhost:8000";

export async function fetchNews(query) {
  const res = await fetch(`${BASE_URL}/news?q=${encodeURIComponent(query)}&pageSize=12`);
  return res.json();
}

export async function fetchQuiz(title, description) {
  const url = `${BASE_URL}/quiz?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description || "")}`;
  const res = await fetch(url);
  return res.json();
}
