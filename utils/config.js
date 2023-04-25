const STANDINGS_URL = "https://sportscore1.p.rapidapi.com/seasons/18686/standings-tables";//18686 league id
const EVENTS_URL = "https://sportscore1.p.rapidapi.com/teams/4/events?page=1";//4 = teamId
const SERVER_API = "http://localhost:3004";
const NEWS_URL = "https://bing-news-search1.p.rapidapi.com/news/search?q=ливерпуль OR салах OR мане OR Клопп&freshness=week&count=100";
const TEAM_STATS_URL = 'https://sofasport.p.rapidapi.com/v1/teams/statistics/result?team_id=44&unique_tournament_id=7&season_id=13415';
const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/search?key=${process.env.GOOGLE_KEY}&channelId=UC9LQwHZoucFT94I2h6JOcjw&part=snippet&order=date&maxResults=20`;

module.exports = { STANDINGS_URL, SERVER_API, EVENTS_URL, NEWS_URL, TEAM_STATS_URL, YOUTUBE_URL };


