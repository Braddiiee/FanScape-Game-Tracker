import type { Teams } from "../types";

// Mock Data
export const teams: Teams = {

    Football: [
        { name: "Manchester United", slug: "manchester-united" },
        { name: "Liverpool FC", slug: "liverpool" },
        { name: "FC Barcelona", slug: "fc-barcelona" },
        { name: "Real Madrid", slug: "real-madrid" },
        { name: "Bayern Munich", slug: "bayern-munich" },
        { name: "Juventus", slug: "juventus" },
        { name: "Paris Saint-Germain", slug: "psg" },
        { name: "Chelsea FC", slug: "chelsea" },
        { name: "Manchester City", slug: "manchester-city" },
        { name: "Arsenal FC", slug: "arsenal" },
    ],

    Basketball: [
        { name: "Los Angeles Lakers", slug: "los-angeles-lakers" },
        { name: "Boston Celtics", slug: "boston-celtics" },
        { name: "Chicago Bulls", slug: "chicago-bulls" },
        { name: "Golden State Warriors", slug: "golden-state-warriors" },
        { name: "Miami Heat", slug: "miami-heat" },
        { name: "Brooklyn Nets", slug: "brooklyn-nets" },
        { name: "Milwaukee Bucks", slug: "milwaukee-bucks" },
        { name: "Philadelphia 76ers", slug: "philadelphia-76ers" },
        { name: "Toronto Raptors", slug: "toronto-raptors" },
        { name: "Phoenix Suns", slug: "phoenix-suns" },
    ],

    Baseball: [
        { name: "New York Yankees", slug: "new-york-yankees" },
        { name: "Los Angeles Dodgers", slug: "los-angeles-dodgers" },
        { name: "Chicago Cubs", slug: "chicago-cubs" },
        { name: "Boston Red Sox", slug: "boston-red-sox" },
        { name: "San Francisco Giants", slug: "san-francisco-giants" },
        { name: "Houston Astros", slug: "houston-astros" },
        { name: "St. Louis Cardinals", slug: "st-louis-cardinals" },
        { name: "Philadelphia Phillies", slug: "philadelphia-phillies" },
        { name: "Atlanta Braves", slug: "atlanta-braves" },
        { name: "New York Mets", slug: "new-york-mets" },
    ],

    Hockey: [
        { name: "Toronto Maple Leafs", slug: "toronto-maple-leafs" },
        { name: "Montreal Canadiens", slug: "montreal-canadiens" },
        { name: "Boston Bruins", slug: "boston-bruins" },
        { name: "Chicago Blackhawks", slug: "chicago-blackhawks" },
        { name: "Detroit Red Wings", slug: "detroit-red-wings" },
        { name: "Edmonton Oilers", slug: "edmonton-oilers" },
        { name: "Pittsburgh Penguins", slug: "pittsburgh-penguins" },
        { name: "New York Rangers", slug: "new-york-rangers" },
        { name: "Philadelphia Flyers", slug: "philadelphia-flyers" },
        { name: "Washington Capitals", slug: "washington-capitals" },
    ],

}

// Competitions
export const competitions: Teams = {

    Football: [
        { name: "UEFA Champions League", slug: "champions-league" },
        { name: "Premier League", slug: "premier-league" },
        { name: "La Liga", slug: "la-liga" },
        { name: "Serie A", slug: "serie-a" },
        { name: "Bundesliga", slug: "bundesliga" },
        { name: "Ligue 1", slug: "ligue-1" },
        { name: "Carabao Cup", slug: "carabao-cup" },
        { name: "FA Cup", slug: "fa-cup" },
        { name: "Copa del Rey", slug: "copa-del-rey" },
        { name: "UEFA Europa League", slug: "europa-league" },
    ],

    Basketball: [
        { name: "National Basketball Association", slug: "nba" },
        { name: "EuroLeague", slug: "euroleague" },
    ],

    Baseball: [
        { name: "Major League Baseball", slug: "mlb" },
    ],

    Hockey: [
        { name: "National Hockey League", slug: "nhl" },
    ],

}
