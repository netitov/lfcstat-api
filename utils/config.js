const STANDINGS_URL = 'https://sportscore1.p.rapidapi.com/seasons/18686/standings-tables';// 18686 league id 22-23
const EVENTS_URL = 'https://sportscore1.p.rapidapi.com/teams/4/events?page=1';// 4 = teamId. Page1 = last events
const SERVER_API = 'http://localhost:3004';
const NEWS_URL = 'https://bing-news-search1.p.rapidapi.com/news/search?safeSearch=Off&freshness=Week&q=ливерпуль(site:sports.ru OR site:sport-express.ru OR site:championat.com OR site:uefa.com OR site:sport.rambler.ru OR site:soccer.ru)&count=100&&setLang=RU';
const TEAM_STATS_URL = 'https://sofasport.p.rapidapi.com/v1/teams/statistics/result?team_id=44&unique_tournament_id=17&season_id=41886';// premier leage 22-23
const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/search?key=${process.env.GOOGLE_KEY}&channelId=UC9LQwHZoucFT94I2h6JOcjw&part=snippet&order=date&maxResults=30`;
const PLAYER_STATS_URL = 'https://sofasport.p.rapidapi.com/v1/teams/player-statistics/result?team_id=44&unique_tournament_id=17&season_id=41886';// premier leage 22-23

module.exports = {
  STANDINGS_URL, SERVER_API, EVENTS_URL, NEWS_URL, TEAM_STATS_URL, YOUTUBE_URL, PLAYER_STATS_URL,
};

// sportscore and sofasroce = 500/m
// news = 1000/m
// youtube = 10000/d
