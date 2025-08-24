const matches = [
  {
    "match_id": 1001,
    "match_title": "Premier League Matchweek 3",
    "competition_id": "COMP-EPL-2025",
    "competition_title": "English Premier League",
    "sport_name": "Soccer",
    "league_abbreviation": "EPL",
    "home_team": {
      "team_id": "TEAM-MU",
      "team_name": "Manchester United"
    },
    "away_team": {
      "team_id": "TEAM-LIV",
      "team_name": "Liverpool FC"
    },
    "match_status": "Upcoming",
    "match_date": "2025-08-28",
    "match_time_utc": "19:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1002,
    "match_title": "NBA Eastern Conference Finals - Game 5",
    "competition_id": "COMP-NBA-PO-2025",
    "competition_title": "NBA Playoffs",
    "sport_name": "Basketball",
    "league_abbreviation": "NBA",
    "home_team": {
      "team_id": "TEAM-BOS",
      "team_name": "Boston Celtics"
    },
    "away_team": {
      "team_id": "TEAM-MIL",
      "team_name": "Milwaukee Bucks"
    },
    "match_status": "Final",
    "match_date": "2025-05-24",
    "match_time_utc": "00:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 108,
      "away_score": 115
    }
  },
  {
    "match_id": 1003,
    "match_title": "NFL Regular Season - Week 1",
    "competition_id": "COMP-NFL-REG-2025",
    "competition_title": "NFL Regular Season",
    "sport_name": "American Football",
    "league_abbreviation": "NFL",
    "home_team": {
      "team_id": "TEAM-KC",
      "team_name": "Kansas City Chiefs"
    },
    "away_team": {
      "team_id": "TEAM-DAL",
      "team_name": "Dallas Cowboys"
    },
    "match_status": "Live",
    "match_date": "2025-09-08",
    "match_time_utc": "18:00:00Z",
    "live_duration_minutes": 25,
    "match_score": {
      "home_score": 14,
      "away_score": 7
    }
  },
  {
    "match_id": 1004,
    "match_title": "NHL Stanley Cup Final - Game 7",
    "competition_id": "COMP-NHL-SC-2025",
    "competition_title": "NHL Playoffs",
    "sport_name": "Ice Hockey",
    "league_abbreviation": "NHL",
    "home_team": {
      "team_id": "TEAM-EDM",
      "team_name": "Edmonton Oilers"
    },
    "away_team": {
      "team_id": "TEAM-FLA",
      "team_name": "Florida Panthers"
    },
    "match_status": "Final",
    "match_date": "2025-06-18",
    "match_time_utc": "00:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 3,
      "away_score": 4
    }
  },
  {
    "match_id": 1005,
    "match_title": "MLB World Series - Game 1",
    "competition_id": "COMP-MLB-WS-2025",
    "competition_title": "MLB World Series",
    "sport_name": "Baseball",
    "league_abbreviation": "MLB",
    "home_team": {
      "team_id": "TEAM-HOU",
      "team_name": "Houston Astros"
    },
    "away_team": {
      "team_id": "TEAM-LAD",
      "team_name": "Los Angeles Dodgers"
    },
    "match_status": "Upcoming",
    "match_date": "2025-10-25",
    "match_time_utc": "01:05:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1006,
    "match_title": "FIBA World Cup - Semi-Final",
    "competition_id": "COMP-FIBA-WC-2025",
    "competition_title": "FIBA World Cup",
    "sport_name": "Basketball",
    "league_abbreviation": "FIBA",
    "home_team": {
      "team_id": "TEAM-USA",
      "team_name": "Team USA"
    },
    "away_team": {
      "team_id": "TEAM-SERBIA",
      "team_name": "Team Serbia"
    },
    "match_status": "Live",
    "match_date": "2025-09-12",
    "match_time_utc": "10:45:00Z",
    "live_duration_minutes": 35,
    "match_score": {
      "home_score": 68,
      "away_score": 71
    }
  },
  {
    "match_id": 1007,
    "match_title": "Rugby World Cup Final",
    "competition_id": "COMP-RWC-2023",
    "competition_title": "Rugby World Cup",
    "sport_name": "Rugby Union",
    "league_abbreviation": "RWC",
    "home_team": {
      "team_id": "TEAM-SA",
      "team_name": "South Africa"
    },
    "away_team": {
      "team_id": "TEAM-NZ",
      "team_name": "New Zealand"
    },
    "match_status": "Final",
    "match_date": "2023-10-28",
    "match_time_utc": "19:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 12,
      "away_score": 11
    }
  },
  {
    "match_id": 1008,
    "match_title": "Super Bowl LIX",
    "competition_id": "COMP-NFL-SB-2025",
    "competition_title": "NFL Super Bowl",
    "sport_name": "American Football",
    "league_abbreviation": "NFL",
    "home_team": {
      "team_id": "TEAM-SF",
      "team_name": "San Francisco 49ers"
    },
    "away_team": {
      "team_id": "TEAM-KC",
      "team_name": "Kansas City Chiefs"
    },
    "match_status": "Final",
    "match_date": "2025-02-09",
    "match_time_utc": "23:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 22,
      "away_score": 25
    }
  },
  {
    "match_id": 1009,
    "match_title": "UEFA Champions League Final",
    "competition_id": "COMP-UCL-2024",
    "competition_title": "UEFA Champions League",
    "sport_name": "Soccer",
    "league_abbreviation": "UCL",
    "home_team": {
      "team_id": "TEAM-RM",
      "team_name": "Real Madrid"
    },
    "away_team": {
      "team_id": "TEAM-BVB",
      "team_name": "Borussia Dortmund"
    },
    "match_status": "Final",
    "match_date": "2024-06-01",
    "match_time_utc": "19:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 2,
      "away_score": 0
    }
  },
  {
    "match_id": 1010,
    "match_title": "NCAA Men's Basketball Championship",
    "competition_id": "COMP-NCAA-MM-2024",
    "competition_title": "March Madness",
    "sport_name": "Basketball",
    "league_abbreviation": "NCAA",
    "home_team": {
      "team_id": "TEAM-UCONN",
      "team_name": "UConn Huskies"
    },
    "away_team": {
      "team_id": "TEAM-PURDUE",
      "team_name": "Purdue Boilermakers"
    },
    "match_status": "Final",
    "match_date": "2024-04-08",
    "match_time_utc": "01:20:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 75,
      "away_score": 60
    }
  },
  {
    "match_id": 1011,
    "match_title": "Premier League Matchday 10",
    "competition_id": "COMP-EPL-2025",
    "competition_title": "English Premier League",
    "sport_name": "Soccer",
    "league_abbreviation": "EPL",
    "home_team": {
      "team_id": "TEAM-ARS",
      "team_name": "Arsenal FC"
    },
    "away_team": {
      "team_id": "TEAM-CHE",
      "team_name": "Chelsea FC"
    },
    "match_status": "Upcoming",
    "match_date": "2025-10-18",
    "match_time_utc": "14:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1012,
    "match_title": "NBA Regular Season",
    "competition_id": "COMP-NBA-REG-2025",
    "competition_title": "NBA Regular Season",
    "sport_name": "Basketball",
    "league_abbreviation": "NBA",
    "home_team": {
      "team_id": "TEAM-LAL",
      "team_name": "Los Angeles Lakers"
    },
    "away_team": {
      "team_id": "TEAM-GSW",
      "team_name": "Golden State Warriors"
    },
    "match_status": "Live",
    "match_date": "2025-11-05",
    "match_time_utc": "03:00:00Z",
    "live_duration_minutes": 15,
    "match_score": {
      "home_score": 34,
      "away_score": 28
    }
  },
  {
    "match_id": 1013,
    "match_title": "NHL Regular Season",
    "competition_id": "COMP-NHL-REG-2025",
    "competition_title": "NHL Regular Season",
    "sport_name": "Ice Hockey",
    "league_abbreviation": "NHL",
    "home_team": {
      "team_id": "TEAM-NYR",
      "team_name": "New York Rangers"
    },
    "away_team": {
      "team_id": "TEAM-NJD",
      "team_name": "New Jersey Devils"
    },
    "match_status": "Upcoming",
    "match_date": "2025-12-10",
    "match_time_utc": "00:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1014,
    "match_title": "MLB Regular Season",
    "competition_id": "COMP-MLB-REG-2025",
    "competition_title": "MLB Regular Season",
    "sport_name": "Baseball",
    "league_abbreviation": "MLB",
    "home_team": {
      "team_id": "TEAM-NYY",
      "team_name": "New York Yankees"
    },
    "away_team": {
      "team_id": "TEAM-BOS",
      "team_name": "Boston Red Sox"
    },
    "match_status": "Live",
    "match_date": "2025-09-02",
    "match_time_utc": "23:00:00Z",
    "live_duration_minutes": 90,
    "match_score": {
      "home_score": 3,
      "away_score": 5
    }
  },
  {
    "match_id": 1015,
    "match_title": "NFL Week 5",
    "competition_id": "COMP-NFL-REG-2025",
    "competition_title": "NFL Regular Season",
    "sport_name": "American Football",
    "league_abbreviation": "NFL",
    "home_team": {
      "team_id": "TEAM-GB",
      "team_name": "Green Bay Packers"
    },
    "away_team": {
      "team_id": "TEAM-MIN",
      "team_name": "Minnesota Vikings"
    },
    "match_status": "Upcoming",
    "match_date": "2025-10-06",
    "match_time_utc": "21:25:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1016,
    "match_title": "Six Nations Championship",
    "competition_id": "COMP-6N-2025",
    "competition_title": "Six Nations Championship",
    "sport_name": "Rugby Union",
    "league_abbreviation": "6N",
    "home_team": {
      "team_id": "TEAM-ENG",
      "team_name": "England"
    },
    "away_team": {
      "team_id": "TEAM-IRE",
      "team_name": "Ireland"
    },
    "match_status": "Final",
    "match_date": "2025-02-02",
    "match_time_utc": "16:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 20,
      "away_score": 17
    }
  },
  {
    "match_id": 1017,
    "match_title": "La Liga Matchday 5",
    "competition_id": "COMP-LALIGA-2025",
    "competition_title": "La Liga",
    "sport_name": "Soccer",
    "league_abbreviation": "La Liga",
    "home_team": {
      "team_id": "TEAM-BAR",
      "team_name": "FC Barcelona"
    },
    "away_team": {
      "team_id": "TEAM-RM",
      "team_name": "Real Madrid"
    },
    "match_status": "Upcoming",
    "match_date": "2025-09-22",
    "match_time_utc": "19:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1018,
    "match_title": "EuroLeague Final Four",
    "competition_id": "COMP-EL-F4-2025",
    "competition_title": "EuroLeague",
    "sport_name": "Basketball",
    "league_abbreviation": "EuroLeague",
    "home_team": {
      "team_id": "TEAM-OLY",
      "team_name": "Olympiacos B.C."
    },
    "away_team": {
      "team_id": "TEAM-RMBC",
      "team_name": "Real Madrid B.C."
    },
    "match_status": "Final",
    "match_date": "2025-05-19",
    "match_time_utc": "20:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 78,
      "away_score": 82
    }
  },
  {
    "match_id": 1019,
    "match_title": "AFL Grand Final",
    "competition_id": "COMP-AFL-GF-2024",
    "competition_title": "Australian Football League",
    "sport_name": "Aussie Rules Football",
    "league_abbreviation": "AFL",
    "home_team": {
      "team_id": "TEAM-COL",
      "team_name": "Collingwood Magpies"
    },
    "away_team": {
      "team_id": "TEAM-BRI",
      "team_name": "Brisbane Lions"
    },
    "match_status": "Final",
    "match_date": "2024-09-28",
    "match_time_utc": "04:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 90,
      "away_score": 86
    }
  },
  {
    "match_id": 1020,
    "match_title": "Super Rugby Pacific Final",
    "competition_id": "COMP-SRP-F-2024",
    "competition_title": "Super Rugby Pacific",
    "sport_name": "Rugby Union",
    "league_abbreviation": "SRP",
    "home_team": {
      "team_id": "TEAM-BLU",
      "team_name": "Blues"
    },
    "away_team": {
      "team_id": "TEAM-CHIEFS",
      "team_name": "Chiefs"
    },
    "match_status": "Final",
    "match_date": "2024-06-22",
    "match_time_utc": "07:05:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 42,
      "away_score": 32
    }
  },
  {
    "match_id": 1021,
    "match_title": "Bundesliga Matchday 10",
    "competition_id": "COMP-BUN-2025",
    "competition_title": "Bundesliga",
    "sport_name": "Soccer",
    "league_abbreviation": "Bundesliga",
    "home_team": {
      "team_id": "TEAM-BAYM",
      "team_name": "Bayern Munich"
    },
    "away_team": {
      "team_id": "TEAM-BVB",
      "team_name": "Borussia Dortmund"
    },
    "match_status": "Live",
    "match_date": "2025-11-09",
    "match_time_utc": "17:30:00Z",
    "live_duration_minutes": 65,
    "match_score": {
      "home_score": 1,
      "away_score": 1
    }
  },
  {
    "match_id": 1022,
    "match_title": "Euro 2024 Final",
    "competition_id": "COMP-EURO-2024",
    "competition_title": "UEFA European Championship",
    "sport_name": "Soccer",
    "league_abbreviation": "UEFA Euro",
    "home_team": {
      "team_id": "TEAM-SPA",
      "team_name": "Spain"
    },
    "away_team": {
      "team_id": "TEAM-ENG",
      "team_name": "England"
    },
    "match_status": "Final",
    "match_date": "2024-07-14",
    "match_time_utc": "19:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 2,
      "away_score": 1
    }
  },
  {
    "match_id": 1023,
    "match_title": "Copa America Final",
    "competition_id": "COMP-CA-2024",
    "competition_title": "Copa America",
    "sport_name": "Soccer",
    "league_abbreviation": "Copa America",
    "home_team": {
      "team_id": "TEAM-ARG",
      "team_name": "Argentina"
    },
    "away_team": {
      "team_id": "TEAM-COL",
      "team_name": "Colombia"
    },
    "match_status": "Final",
    "match_date": "2024-07-14",
    "match_time_utc": "01:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 1,
      "away_score": 0
    }
  },
  {
    "match_id": 1024,
    "match_title": "WNBA Finals Game 3",
    "competition_id": "COMP-WNBA-F-2025",
    "competition_title": "WNBA Finals",
    "sport_name": "Basketball",
    "league_abbreviation": "WNBA",
    "home_team": {
      "team_id": "TEAM-LVA",
      "team_name": "Las Vegas Aces"
    },
    "away_team": {
      "team_id": "TEAM-NYL",
      "team_name": "New York Liberty"
    },
    "match_status": "Upcoming",
    "match_date": "2025-09-29",
    "match_time_utc": "20:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1025,
    "match_title": "MLS Cup Final",
    "competition_id": "COMP-MLS-F-2023",
    "competition_title": "Major League Soccer",
    "sport_name": "Soccer",
    "league_abbreviation": "MLS",
    "home_team": {
      "team_id": "TEAM-CC",
      "team_name": "Columbus Crew"
    },
    "away_team": {
      "team_id": "TEAM-LAFC",
      "team_name": "LAFC"
    },
    "match_status": "Final",
    "match_date": "2023-12-09",
    "match_time_utc": "21:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 2,
      "away_score": 1
    }
  },
  {
    "match_id": 1026,
    "match_title": "Cricket World Cup Final",
    "competition_id": "COMP-CWC-2023",
    "competition_title": "ICC Cricket World Cup",
    "sport_name": "Cricket",
    "league_abbreviation": "CWC",
    "home_team": {
      "team_id": "TEAM-IND",
      "team_name": "India"
    },
    "away_team": {
      "team_id": "TEAM-AUS",
      "team_name": "Australia"
    },
    "match_status": "Final",
    "match_date": "2023-11-19",
    "match_time_utc": "08:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 240,
      "away_score": 241
    }
  },
  {
    "match_id": 1027,
    "match_title": "PGA Tour Championship Final Round",
    "competition_id": "COMP-PGA-TC-2025",
    "competition_title": "PGA Tour",
    "sport_name": "Golf",
    "league_abbreviation": "PGA",
    "home_team": {
      "team_id": "PLAYER-SS",
      "team_name": "Scottie Scheffler"
    },
    "away_team": {
      "team_id": "PLAYER-RM",
      "team_name": "Rory McIlroy"
    },
    "match_status": "Upcoming",
    "match_date": "2025-09-01",
    "match_time_utc": "18:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1028,
    "match_title": "Ligue 1 Matchday 15",
    "competition_id": "COMP-L1-2025",
    "competition_title": "Ligue 1",
    "sport_name": "Soccer",
    "league_abbreviation": "Ligue 1",
    "home_team": {
      "team_id": "TEAM-PSG",
      "team_name": "Paris Saint-Germain"
    },
    "away_team": {
      "team_id": "TEAM-OM",
      "team_name": "Olympique de Marseille"
    },
    "match_status": "Final",
    "match_date": "2025-12-01",
    "match_time_utc": "20:45:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 3,
      "away_score": 1
    }
  },
  {
    "match_id": 1029,
    "match_title": "Serie A Matchday 12",
    "competition_id": "COMP-SA-2025",
    "competition_title": "Serie A",
    "sport_name": "Soccer",
    "league_abbreviation": "Serie A",
    "home_team": {
      "team_id": "TEAM-JUV",
      "team_name": "Juventus FC"
    },
    "away_team": {
      "team_id": "TEAM-ACM",
      "team_name": "AC Milan"
    },
    "match_status": "Upcoming",
    "match_date": "2025-11-23",
    "match_time_utc": "19:45:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1030,
    "match_title": "Bundesliga Matchday 15",
    "competition_id": "COMP-BUN-2025",
    "competition_title": "Bundesliga",
    "sport_name": "Soccer",
    "league_abbreviation": "Bundesliga",
    "home_team": {
      "team_id": "TEAM-B04",
      "team_name": "Bayer 04 Leverkusen"
    },
    "away_team": {
      "team_id": "TEAM-BAYM",
      "team_name": "FC Bayern Munich"
    },
    "match_status": "Final",
    "match_date": "2025-02-08",
    "match_time_utc": "17:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 3,
      "away_score": 0
    }
  },
  {
    "match_id": 1031,
    "match_title": "EPL Matchday 2",
    "competition_id": "COMP-EPL-2025",
    "competition_title": "English Premier League",
    "sport_name": "Soccer",
    "league_abbreviation": "EPL",
    "home_team": {
      "team_id": "TEAM-MC",
      "team_name": "Manchester City"
    },
    "away_team": {
      "team_id": "TEAM-TOT",
      "team_name": "Tottenham Hotspur"
    },
    "match_status": "Live",
    "match_date": "2025-08-20",
    "match_time_utc": "19:00:00Z",
    "live_duration_minutes": 75,
    "match_score": {
      "home_score": 2,
      "away_score": 1
    }
  },
  {
    "match_id": 1032,
    "match_title": "NBA Christmas Day Game",
    "competition_id": "COMP-NBA-REG-2025",
    "competition_title": "NBA Regular Season",
    "sport_name": "Basketball",
    "league_abbreviation": "NBA",
    "home_team": {
      "team_id": "TEAM-NYK",
      "team_name": "New York Knicks"
    },
    "away_team": {
      "team_id": "TEAM-PHI",
      "team_name": "Philadelphia 76ers"
    },
    "match_status": "Upcoming",
    "match_date": "2025-12-25",
    "match_time_utc": "17:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1033,
    "match_title": "College Football National Championship",
    "competition_id": "COMP-NCAAF-NC-2024",
    "competition_title": "CFP National Championship",
    "sport_name": "American Football",
    "league_abbreviation": "NCAAF",
    "home_team": {
      "team_id": "TEAM-MICH",
      "team_name": "Michigan Wolverines"
    },
    "away_team": {
      "team_id": "TEAM-WASH",
      "team_name": "Washington Huskies"
    },
    "match_status": "Final",
    "match_date": "2024-01-08",
    "match_time_utc": "00:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 34,
      "away_score": 13
    }
  },
  {
    "match_id": 1034,
    "match_title": "Copa Libertadores Final",
    "competition_id": "COMP-CONM-CL-2023",
    "competition_title": "Copa Libertadores",
    "sport_name": "Soccer",
    "league_abbreviation": "CONMEBOL",
    "home_team": {
      "team_id": "TEAM-BOC",
      "team_name": "Boca Juniors"
    },
    "away_team": {
      "team_id": "TEAM-FLU",
      "team_name": "Fluminense"
    },
    "match_status": "Final",
    "match_date": "2023-11-04",
    "match_time_utc": "20:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 1,
      "away_score": 2
    }
  },
  {
    "match_id": 1035,
    "match_title": "Asian Cup Final",
    "competition_id": "COMP-AFC-AC-2024",
    "competition_title": "AFC Asian Cup",
    "sport_name": "Soccer",
    "league_abbreviation": "AFC",
    "home_team": {
      "team_id": "TEAM-QAT",
      "team_name": "Qatar"
    },
    "away_team": {
      "team_id": "TEAM-JOR",
      "team_name": "Jordan"
    },
    "match_status": "Final",
    "match_date": "2024-02-10",
    "match_time_utc": "15:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 3,
      "away_score": 1
    }
  },
  {
    "match_id": 1036,
    "match_title": "EPL Matchday 15",
    "competition_id": "COMP-EPL-2025",
    "competition_title": "English Premier League",
    "sport_name": "Soccer",
    "league_abbreviation": "EPL",
    "home_team": {
      "team_id": "TEAM-ARS",
      "team_name": "Arsenal FC"
    },
    "away_team": {
      "team_id": "TEAM-MU",
      "team_name": "Manchester United"
    },
    "match_status": "Upcoming",
    "match_date": "2025-12-07",
    "match_time_utc": "16:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1037,
    "match_title": "NBA Regular Season",
    "competition_id": "COMP-NBA-REG-2025",
    "competition_title": "NBA Regular Season",
    "sport_name": "Basketball",
    "league_abbreviation": "NBA",
    "home_team": {
      "team_id": "TEAM-CHI",
      "team_name": "Chicago Bulls"
    },
    "away_team": {
      "team_id": "TEAM-MIA",
      "team_name": "Miami Heat"
    },
    "match_status": "Live",
    "match_date": "2025-10-30",
    "match_time_utc": "01:00:00Z",
    "live_duration_minutes": 20,
    "match_score": {
      "home_score": 45,
      "away_score": 42
    }
  },
  {
    "match_id": 1038,
    "match_title": "NHL Regular Season",
    "competition_id": "COMP-NHL-REG-2025",
    "competition_title": "NHL Regular Season",
    "sport_name": "Ice Hockey",
    "league_abbreviation": "NHL",
    "home_team": {
      "team_id": "TEAM-BOS",
      "team_name": "Boston Bruins"
    },
    "away_team": {
      "team_id": "TEAM-MON",
      "team_name": "Montreal Canadiens"
    },
    "match_status": "Upcoming",
    "match_date": "2025-12-20",
    "match_time_utc": "23:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1039,
    "match_title": "MLB Postseason",
    "competition_id": "COMP-MLB-PO-2025",
    "competition_title": "MLB Playoffs",
    "sport_name": "Baseball",
    "league_abbreviation": "MLB",
    "home_team": {
      "team_id": "TEAM-ATL",
      "team_name": "Atlanta Braves"
    },
    "away_team": {
      "team_id": "TEAM-PHI",
      "team_name": "Philadelphia Phillies"
    },
    "match_status": "Final",
    "match_date": "2025-10-15",
    "match_time_utc": "00:07:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 2,
      "away_score": 1
    }
  },
  {
    "match_id": 1040,
    "match_title": "NFL Week 10",
    "competition_id": "COMP-NFL-REG-2025",
    "competition_title": "NFL Regular Season",
    "sport_name": "American Football",
    "league_abbreviation": "NFL",
    "home_team": {
      "team_id": "TEAM-NO",
      "team_name": "New Orleans Saints"
    },
    "away_team": {
      "team_id": "TEAM-ATL",
      "team_name": "Atlanta Falcons"
    },
    "match_status": "Upcoming",
    "match_date": "2025-11-10",
    "match_time_utc": "18:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1041,
    "match_title": "Six Nations Championship",
    "competition_id": "COMP-6N-2025",
    "competition_title": "Six Nations Championship",
    "sport_name": "Rugby Union",
    "league_abbreviation": "6N",
    "home_team": {
      "team_id": "TEAM-WAL",
      "team_name": "Wales"
    },
    "away_team": {
      "team_id": "TEAM-FRA",
      "team_name": "France"
    },
    "match_status": "Live",
    "match_date": "2025-02-23",
    "match_time_utc": "15:00:00Z",
    "live_duration_minutes": 45,
    "match_score": {
      "home_score": 10,
      "away_score": 15
    }
  },
  {
    "match_id": 1042,
    "match_title": "La Liga Matchday 15",
    "competition_id": "COMP-LALIGA-2025",
    "competition_title": "La Liga",
    "sport_name": "Soccer",
    "league_abbreviation": "La Liga",
    "home_team": {
      "team_id": "TEAM-ATM",
      "team_name": "Atletico Madrid"
    },
    "away_team": {
      "team_id": "TEAM-VAL",
      "team_name": "Valencia CF"
    },
    "match_status": "Upcoming",
    "match_date": "2025-12-08",
    "match_time_utc": "18:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1043,
    "match_title": "EuroLeague",
    "competition_id": "COMP-EL-2025",
    "competition_title": "EuroLeague",
    "sport_name": "Basketball",
    "league_abbreviation": "EuroLeague",
    "home_team": {
      "team_id": "TEAM-PAN",
      "team_name": "Panathinaikos B.C."
    },
    "away_team": {
      "team_id": "TEAM-ASM",
      "team_name": "AS Monaco B.C."
    },
    "match_status": "Upcoming",
    "match_date": "2025-11-28",
    "match_time_utc": "19:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1044,
    "match_title": "AFL Round 23",
    "competition_id": "COMP-AFL-2025",
    "competition_title": "Australian Football League",
    "sport_name": "Aussie Rules Football",
    "league_abbreviation": "AFL",
    "home_team": {
      "team_id": "TEAM-RIC",
      "team_name": "Richmond Tigers"
    },
    "away_team": {
      "team_id": "TEAM-CARL",
      "team_name": "Carlton Blues"
    },
    "match_status": "Final",
    "match_date": "2025-08-23",
    "match_time_utc": "09:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 75,
      "away_score": 81
    }
  },
  {
    "match_id": 1045,
    "match_title": "Super Rugby Pacific",
    "competition_id": "COMP-SRP-2025",
    "competition_title": "Super Rugby Pacific",
    "sport_name": "Rugby Union",
    "league_abbreviation": "SRP",
    "home_team": {
      "team_id": "TEAM-CRU",
      "team_name": "Crusaders"
    },
    "away_team": {
      "team_id": "TEAM-HUR",
      "team_name": "Hurricanes"
    },
    "match_status": "Live",
    "match_date": "2025-03-15",
    "match_time_utc": "06:35:00Z",
    "live_duration_minutes": 60,
    "match_score": {
      "home_score": 14,
      "away_score": 21
    }
  },
  {
    "match_id": 1046,
    "match_title": "Bundesliga Matchday 18",
    "competition_id": "COMP-BUN-2026",
    "competition_title": "Bundesliga",
    "sport_name": "Soccer",
    "league_abbreviation": "Bundesliga",
    "home_team": {
      "team_id": "TEAM-RBL",
      "team_name": "RB Leipzig"
    },
    "away_team": {
      "team_id": "TEAM-WOL",
      "team_name": "VfL Wolfsburg"
    },
    "match_status": "Upcoming",
    "match_date": "2026-01-24",
    "match_time_utc": "14:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1047,
    "match_title": "WNBA Regular Season",
    "competition_id": "COMP-WNBA-REG-2025",
    "competition_title": "WNBA Regular Season",
    "sport_name": "Basketball",
    "league_abbreviation": "WNBA",
    "home_team": {
      "team_id": "TEAM-SEA",
      "team_name": "Seattle Storm"
    },
    "away_team": {
      "team_id": "TEAM-PHX",
      "team_name": "Phoenix Mercury"
    },
    "match_status": "Live",
    "match_date": "2025-08-25",
    "match_time_utc": "02:00:00Z",
    "live_duration_minutes": 30,
    "match_score": {
      "home_score": 70,
      "away_score": 65
    }
  },
  {
    "match_id": 1048,
    "match_title": "MLS Playoffs",
    "competition_id": "COMP-MLS-PO-2025",
    "competition_title": "Major League Soccer",
    "sport_name": "Soccer",
    "league_abbreviation": "MLS",
    "home_team": {
      "team_id": "TEAM-LAG",
      "team_name": "LA Galaxy"
    },
    "away_team": {
      "team_id": "TEAM-SSFC",
      "team_name": "Seattle Sounders FC"
    },
    "match_status": "Upcoming",
    "match_date": "2025-10-25",
    "match_time_utc": "22:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1049,
    "match_title": "Serie A Matchday 15",
    "competition_id": "COMP-SA-2025",
    "competition_title": "Serie A",
    "sport_name": "Soccer",
    "league_abbreviation": "Serie A",
    "home_team": {
      "team_id": "TEAM-ASR",
      "team_name": "AS Roma"
    },
    "away_team": {
      "team_id": "TEAM-SSCN",
      "team_name": "SSC Napoli"
    },
    "match_status": "Final",
    "match_date": "2025-12-10",
    "match_time_utc": "19:45:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 2,
      "away_score": 2
    }
  },
  {
    "match_id": 1050,
    "match_title": "NHL Regular Season",
    "competition_id": "COMP-NHL-REG-2025",
    "competition_title": "NHL Regular Season",
    "sport_name": "Ice Hockey",
    "league_abbreviation": "NHL",
    "home_team": {
      "team_id": "TEAM-WSH",
      "team_name": "Washington Capitals"
    },
    "away_team": {
      "team_id": "TEAM-PIT",
      "team_name": "Pittsburgh Penguins"
    },
    "match_status": "Final",
    "match_date": "2025-11-15",
    "match_time_utc": "00:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 5,
      "away_score": 3
    }
  },
  {
    "match_id": 1051,
    "match_title": "La Liga Matchday 18",
    "competition_id": "COMP-LALIGA-2026",
    "competition_title": "La Liga",
    "sport_name": "Soccer",
    "league_abbreviation": "La Liga",
    "home_team": {
      "team_id": "TEAM-RM",
      "team_name": "Real Madrid"
    },
    "away_team": {
      "team_id": "TEAM-SEV",
      "team_name": "Sevilla FC"
    },
    "match_status": "Live",
    "match_date": "2026-01-25",
    "match_time_utc": "19:00:00Z",
    "live_duration_minutes": 80,
    "match_score": {
      "home_score": 2,
      "away_score": 0
    }
  },
  {
    "match_id": 1052,
    "match_title": "NBA In-Season Tournament",
    "competition_id": "COMP-NBA-IST-2025",
    "competition_title": "NBA In-Season Tournament",
    "sport_name": "Basketball",
    "league_abbreviation": "NBA",
    "home_team": {
      "team_id": "TEAM-MIL",
      "team_name": "Milwaukee Bucks"
    },
    "away_team": {
      "team_id": "TEAM-IND",
      "team_name": "Indiana Pacers"
    },
    "match_status": "Final",
    "match_date": "2025-12-09",
    "match_time_utc": "00:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 128,
      "away_score": 119
    }
  },
  {
    "match_id": 1053,
    "match_title": "NFL Week 15",
    "competition_id": "COMP-NFL-REG-2025",
    "competition_title": "NFL Regular Season",
    "sport_name": "American Football",
    "league_abbreviation": "NFL",
    "home_team": {
      "team_id": "TEAM-BUF",
      "team_name": "Buffalo Bills"
    },
    "away_team": {
      "team_id": "TEAM-NE",
      "team_name": "New England Patriots"
    },
    "match_status": "Upcoming",
    "match_date": "2025-12-21",
    "match_time_utc": "18:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1054,
    "match_title": "EPL Matchday 20",
    "competition_id": "COMP-EPL-2026",
    "competition_title": "English Premier League",
    "sport_name": "Soccer",
    "league_abbreviation": "EPL",
    "home_team": {
      "team_id": "TEAM-LIV",
      "team_name": "Liverpool FC"
    },
    "away_team": {
      "team_id": "TEAM-CHE",
      "team_name": "Chelsea FC"
    },
    "match_status": "Live",
    "match_date": "2026-01-01",
    "match_time_utc": "17:30:00Z",
    "live_duration_minutes": 45,
    "match_score": {
      "home_score": 1,
      "away_score": 0
    }
  },
  {
    "match_id": 1055,
    "match_title": "NCAA Men's Basketball Regular Season",
    "competition_id": "COMP-NCAA-REG-2025",
    "competition_title": "NCAA Regular Season",
    "sport_name": "Basketball",
    "league_abbreviation": "NCAA",
    "home_team": {
      "team_id": "TEAM-DUKE",
      "team_name": "Duke Blue Devils"
    },
    "away_team": {
      "team_id": "TEAM-UNC",
      "team_name": "North Carolina Tar Heels"
    },
    "match_status": "Final",
    "match_date": "2025-03-09",
    "match_time_utc": "01:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 84,
      "away_score": 81
    }
  },
  {
    "match_id": 1056,
    "match_title": "Rugby Union Six Nations",
    "competition_id": "COMP-6N-2026",
    "competition_title": "Six Nations Championship",
    "sport_name": "Rugby Union",
    "league_abbreviation": "6N",
    "home_team": {
      "team_id": "TEAM-SCOT",
      "team_name": "Scotland"
    },
    "away_team": {
      "team_id": "TEAM-ITA",
      "team_name": "Italy"
    },
    "match_status": "Upcoming",
    "match_date": "2026-03-08",
    "match_time_utc": "14:15:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1057,
    "match_title": "MLB Wild Card Series",
    "competition_id": "COMP-MLB-PO-2025",
    "competition_title": "MLB Playoffs",
    "sport_name": "Baseball",
    "league_abbreviation": "MLB",
    "home_team": {
      "team_id": "TEAM-TOR",
      "team_name": "Toronto Blue Jays"
    },
    "away_team": {
      "team_id": "TEAM-BAL",
      "team_name": "Baltimore Orioles"
    },
    "match_status": "Final",
    "match_date": "2025-10-05",
    "match_time_utc": "22:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 4,
      "away_score": 6
    }
  },
  {
    "match_id": 1058,
    "match_title": "Copa del Rey Final",
    "competition_id": "COMP-CDR-2024",
    "competition_title": "Copa del Rey",
    "sport_name": "Soccer",
    "league_abbreviation": "Copa del Rey",
    "home_team": {
      "team_id": "TEAM-ATHB",
      "team_name": "Athletic Bilbao"
    },
    "away_team": {
      "team_id": "TEAM-RCDM",
      "team_name": "RCD Mallorca"
    },
    "match_status": "Final",
    "match_date": "2024-04-06",
    "match_time_utc": "20:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 1,
      "away_score": 1,
      "penalties": {
        "home_team": 4,
        "away_team": 2
      }
    }
  },
  {
    "match_id": 1059,
    "match_title": "WNBA All-Star Game",
    "competition_id": "COMP-WNBA-AS-2025",
    "competition_title": "WNBA All-Star",
    "sport_name": "Basketball",
    "league_abbreviation": "WNBA",
    "home_team": {
      "team_id": "TEAM-AJA",
      "team_name": "Team A'ja Wilson"
    },
    "away_team": {
      "team_id": "TEAM-BREANNA",
      "team_name": "Team Breanna Stewart"
    },
    "match_status": "Final",
    "match_date": "2025-07-20",
    "match_time_utc": "20:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 120,
      "away_score": 105
    }
  },
  {
    "match_id": 1060,
    "match_title": "NHL Winter Classic",
    "competition_id": "COMP-NHL-WC-2025",
    "competition_title": "NHL Winter Classic",
    "sport_name": "Ice Hockey",
    "league_abbreviation": "NHL",
    "home_team": {
      "team_id": "TEAM-SEA",
      "team_name": "Seattle Kraken"
    },
    "away_team": {
      "team_id": "TEAM-VGK",
      "team_name": "Vegas Golden Knights"
    },
    "match_status": "Final",
    "match_date": "2025-01-01",
    "match_time_utc": "20:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 3,
      "away_score": 0
    }
  },
  {
    "match_id": 1061,
    "match_title": "NFL Week 18",
    "competition_id": "COMP-NFL-REG-2026",
    "competition_title": "NFL Regular Season",
    "sport_name": "American Football",
    "league_abbreviation": "NFL",
    "home_team": {
      "team_id": "TEAM-MIA",
      "team_name": "Miami Dolphins"
    },
    "away_team": {
      "team_id": "TEAM-NYJ",
      "team_name": "New York Jets"
    },
    "match_status": "Final",
    "match_date": "2026-01-04",
    "match_time_utc": "18:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 27,
      "away_score": 10
    }
  },
  {
    "match_id": 1062,
    "match_title": "La Liga Matchday 25",
    "competition_id": "COMP-LALIGA-2026",
    "competition_title": "La Liga",
    "sport_name": "Soccer",
    "league_abbreviation": "La Liga",
    "home_team": {
      "team_id": "TEAM-RS",
      "team_name": "Real Sociedad"
    },
    "away_team": {
      "team_id": "TEAM-ATHB",
      "team_name": "Athletic Bilbao"
    },
    "match_status": "Live",
    "match_date": "2026-02-15",
    "match_time_utc": "18:30:00Z",
    "live_duration_minutes": 50,
    "match_score": {
      "home_score": 1,
      "away_score": 1
    }
  },
  {
    "match_id": 1063,
    "match_title": "NBA Playoffs First Round",
    "competition_id": "COMP-NBA-PO-2026",
    "competition_title": "NBA Playoffs",
    "sport_name": "Basketball",
    "league_abbreviation": "NBA",
    "home_team": {
      "team_id": "TEAM-PHX",
      "team_name": "Phoenix Suns"
    },
    "away_team": {
      "team_id": "TEAM-LAC",
      "team_name": "Los Angeles Clippers"
    },
    "match_status": "Upcoming",
    "match_date": "2026-04-20",
    "match_time_utc": "02:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1064,
    "match_title": "MLB Regular Season",
    "competition_id": "COMP-MLB-REG-2025",
    "competition_title": "MLB Regular Season",
    "sport_name": "Baseball",
    "league_abbreviation": "MLB",
    "home_team": {
      "team_id": "TEAM-STL",
      "team_name": "St. Louis Cardinals"
    },
    "away_team": {
      "team_id": "TEAM-CHC",
      "team_name": "Chicago Cubs"
    },
    "match_status": "Live",
    "match_date": "2025-09-05",
    "match_time_utc": "23:00:00Z",
    "live_duration_minutes": 120,
    "match_score": {
      "home_score": 6,
      "away_score": 4
    }
  },
  {
    "match_id": 1065,
    "match_title": "Serie A Matchday 20",
    "competition_id": "COMP-SA-2026",
    "competition_title": "Serie A",
    "sport_name": "Soccer",
    "league_abbreviation": "Serie A",
    "home_team": {
      "team_id": "TEAM-IM",
      "team_name": "Inter Milan"
    },
    "away_team": {
      "team_id": "TEAM-ACM",
      "team_name": "AC Milan"
    },
    "match_status": "Upcoming",
    "match_date": "2026-01-19",
    "match_time_utc": "19:45:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1066,
    "match_title": "NFL Divisional Playoff",
    "competition_id": "COMP-NFL-PO-2025",
    "competition_title": "NFL Playoffs",
    "sport_name": "American Football",
    "league_abbreviation": "NFL",
    "home_team": {
      "team_id": "TEAM-BAL",
      "team_name": "Baltimore Ravens"
    },
    "away_team": {
      "team_id": "TEAM-HOU",
      "team_name": "Houston Texans"
    },
    "match_status": "Final",
    "match_date": "2025-01-19",
    "match_time_utc": "21:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 34,
      "away_score": 10
    }
  },
  {
    "match_id": 1067,
    "match_title": "Six Nations Championship",
    "competition_id": "COMP-6N-2025",
    "competition_title": "Six Nations Championship",
    "sport_name": "Rugby Union",
    "league_abbreviation": "6N",
    "home_team": {
      "team_id": "TEAM-FRA",
      "team_name": "France"
    },
    "away_team": {
      "team_id": "TEAM-ITA",
      "team_name": "Italy"
    },
    "match_status": "Final",
    "match_date": "2025-02-25",
    "match_time_utc": "15:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 13,
      "away_score": 13
    }
  },
  {
    "match_id": 1068,
    "match_title": "Bundesliga Matchday 25",
    "competition_id": "COMP-BUN-2026",
    "competition_title": "Bundesliga",
    "sport_name": "Soccer",
    "league_abbreviation": "Bundesliga",
    "home_team": {
      "team_id": "TEAM-BAYM",
      "team_name": "FC Bayern Munich"
    },
    "away_team": {
      "team_id": "TEAM-VFB",
      "team_name": "VfB Stuttgart"
    },
    "match_status": "Upcoming",
    "match_date": "2026-03-08",
    "match_time_utc": "17:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1069,
    "match_title": "NBA Finals Game 6",
    "competition_id": "COMP-NBA-F-2024",
    "competition_title": "NBA Finals",
    "sport_name": "Basketball",
    "league_abbreviation": "NBA",
    "home_team": {
      "team_id": "TEAM-DEN",
      "team_name": "Denver Nuggets"
    },
    "away_team": {
      "team_id": "TEAM-MIA",
      "team_name": "Miami Heat"
    },
    "match_status": "Final",
    "match_date": "2024-06-12",
    "match_time_utc": "00:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 94,
      "away_score": 89
    }
  },
  {
    "match_id": 1070,
    "match_title": "MLB Regular Season",
    "competition_id": "COMP-MLB-REG-2025",
    "competition_title": "MLB Regular Season",
    "sport_name": "Baseball",
    "league_abbreviation": "MLB",
    "home_team": {
      "team_id": "TEAM-SFG",
      "team_name": "San Francisco Giants"
    },
    "away_team": {
      "team_id": "TEAM-LAD",
      "team_name": "Los Angeles Dodgers"
    },
    "match_status": "Live",
    "match_date": "2025-09-10",
    "match_time_utc": "02:00:00Z",
    "live_duration_minutes": 60,
    "match_score": {
      "home_score": 1,
      "away_score": 0
    }
  },
  {
    "match_id": 1071,
    "match_title": "EPL Matchday 21",
    "competition_id": "COMP-EPL-2026",
    "competition_title": "English Premier League",
    "sport_name": "Soccer",
    "league_abbreviation": "EPL",
    "home_team": {
      "team_id": "TEAM-MC",
      "team_name": "Manchester City"
    },
    "away_team": {
      "team_id": "TEAM-ARS",
      "team_name": "Arsenal FC"
    },
    "match_status": "Upcoming",
    "match_date": "2026-01-11",
    "match_time_utc": "16:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1072,
    "match_title": "NBA Regular Season",
    "competition_id": "COMP-NBA-REG-2025",
    "competition_title": "NBA Regular Season",
    "sport_name": "Basketball",
    "league_abbreviation": "NBA",
    "home_team": {
      "team_id": "TEAM-LAC",
      "team_name": "Los Angeles Clippers"
    },
    "away_team": {
      "team_id": "TEAM-PHX",
      "team_name": "Phoenix Suns"
    },
    "match_status": "Live",
    "match_date": "2025-11-20",
    "match_time_utc": "03:00:00Z",
    "live_duration_minutes": 25,
    "match_score": {
      "home_score": 55,
      "away_score": 50
    }
  },
  {
    "match_id": 1073,
    "match_title": "NHL Regular Season",
    "competition_id": "COMP-NHL-REG-2025",
    "competition_title": "NHL Regular Season",
    "sport_name": "Ice Hockey",
    "league_abbreviation": "NHL",
    "home_team": {
      "team_id": "TEAM-TOR",
      "team_name": "Toronto Maple Leafs"
    },
    "away_team": {
      "team_id": "TEAM-DET",
      "team_name": "Detroit Red Wings"
    },
    "match_status": "Upcoming",
    "match_date": "2025-12-28",
    "match_time_utc": "00:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1074,
    "match_title": "MLB Regular Season",
    "competition_id": "COMP-MLB-REG-2025",
    "competition_title": "MLB Regular Season",
    "sport_name": "Baseball",
    "league_abbreviation": "MLB",
    "home_team": {
      "team_id": "TEAM-NYM",
      "team_name": "New York Mets"
    },
    "away_team": {
      "team_id": "TEAM-ATL",
      "team_name": "Atlanta Braves"
    },
    "match_status": "Live",
    "match_date": "2025-09-15",
    "match_time_utc": "23:00:00Z",
    "live_duration_minutes": 105,
    "match_score": {
      "home_score": 3,
      "away_score": 2
    }
  },
  {
    "match_id": 1075,
    "match_title": "NFL Week 17",
    "competition_id": "COMP-NFL-REG-2025",
    "competition_title": "NFL Regular Season",
    "sport_name": "American Football",
    "league_abbreviation": "NFL",
    "home_team": {
      "team_id": "TEAM-PHI",
      "team_name": "Philadelphia Eagles"
    },
    "away_team": {
      "team_id": "TEAM-NYG",
      "team_name": "New York Giants"
    },
    "match_status": "Upcoming",
    "match_date": "2025-12-28",
    "match_time_utc": "21:25:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1076,
    "match_title": "Six Nations Championship",
    "competition_id": "COMP-6N-2026",
    "competition_title": "Six Nations Championship",
    "sport_name": "Rugby Union",
    "league_abbreviation": "6N",
    "home_team": {
      "team_id": "TEAM-IRE",
      "team_name": "Ireland"
    },
    "away_team": {
      "team_id": "TEAM-SCOT",
      "team_name": "Scotland"
    },
    "match_status": "Final",
    "match_date": "2026-03-15",
    "match_time_utc": "16:45:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 24,
      "away_score": 20
    }
  },
  {
    "match_id": 1077,
    "match_title": "La Liga Matchday 28",
    "competition_id": "COMP-LALIGA-2026",
    "competition_title": "La Liga",
    "sport_name": "Soccer",
    "league_abbreviation": "La Liga",
    "home_team": {
      "team_id": "TEAM-BAR",
      "team_name": "FC Barcelona"
    },
    "away_team": {
      "team_id": "TEAM-ATM",
      "team_name": "Atletico Madrid"
    },
    "match_status": "Upcoming",
    "match_date": "2026-03-22",
    "match_time_utc": "19:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1078,
    "match_title": "EuroLeague",
    "competition_id": "COMP-EL-2025",
    "competition_title": "EuroLeague",
    "sport_name": "Basketball",
    "league_abbreviation": "EuroLeague",
    "home_team": {
      "team_id": "TEAM-FEN",
      "team_name": "Fenerbahçe Beko"
    },
    "away_team": {
      "team_id": "TEAM-ANA",
      "team_name": "Anadolu Efes S.K."
    },
    "match_status": "Final",
    "match_date": "2025-12-18",
    "match_time_utc": "19:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 91,
      "away_score": 88
    }
  },
  {
    "match_id": 1079,
    "match_title": "AFL Round 1",
    "competition_id": "COMP-AFL-2026",
    "competition_title": "Australian Football League",
    "sport_name": "Aussie Rules Football",
    "league_abbreviation": "AFL",
    "home_team": {
      "team_id": "TEAM-RIC",
      "team_name": "Richmond Tigers"
    },
    "away_team": {
      "team_id": "TEAM-COL",
      "team_name": "Collingwood Magpies"
    },
    "match_status": "Upcoming",
    "match_date": "2026-03-12",
    "match_time_utc": "09:20:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1080,
    "match_title": "Super Rugby Pacific",
    "competition_id": "COMP-SRP-2025",
    "competition_title": "Super Rugby Pacific",
    "sport_name": "Rugby Union",
    "league_abbreviation": "SRP",
    "home_team": {
      "team_id": "TEAM-BRU",
      "team_name": "Brumbies"
    },
    "away_team": {
      "team_id": "TEAM-RED",
      "team_name": "Reds"
    },
    "match_status": "Final",
    "match_date": "2025-05-03",
    "match_time_utc": "09:35:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 28,
      "away_score": 19
    }
  },
  {
    "match_id": 1081,
    "match_title": "Bundesliga Matchday 28",
    "competition_id": "COMP-BUN-2026",
    "competition_title": "Bundesliga",
    "sport_name": "Soccer",
    "league_abbreviation": "Bundesliga",
    "home_team": {
      "team_id": "TEAM-BVB",
      "team_name": "Borussia Dortmund"
    },
    "away_team": {
      "team_id": "TEAM-VFB",
      "team_name": "VfB Stuttgart"
    },
    "match_status": "Live",
    "match_date": "2026-04-05",
    "match_time_utc": "17:30:00Z",
    "live_duration_minutes": 60,
    "match_score": {
      "home_score": 2,
      "away_score": 2
    }
  },
  {
    "match_id": 1082,
    "match_title": "WNBA Regular Season",
    "competition_id": "COMP-WNBA-REG-2025",
    "competition_title": "WNBA Regular Season",
    "sport_name": "Basketball",
    "league_abbreviation": "WNBA",
    "home_team": {
      "team_id": "TEAM-LVA",
      "team_name": "Las Vegas Aces"
    },
    "away_team": {
      "team_id": "TEAM-CON",
      "team_name": "Connecticut Sun"
    },
    "match_status": "Final",
    "match_date": "2025-08-10",
    "match_time_utc": "20:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 95,
      "away_score": 80
    }
  },
  {
    "match_id": 1083,
    "match_title": "MLS Regular Season",
    "competition_id": "COMP-MLS-REG-2025",
    "competition_title": "Major League Soccer",
    "sport_name": "Soccer",
    "league_abbreviation": "MLS",
    "home_team": {
      "team_id": "TEAM-ATLFC",
      "team_name": "Atlanta United FC"
    },
    "away_team": {
      "team_id": "TEAM-OSC",
      "team_name": "Orlando City SC"
    },
    "match_status": "Upcoming",
    "match_date": "2025-09-20",
    "match_time_utc": "23:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1084,
    "match_title": "Serie A Matchday 25",
    "competition_id": "COMP-SA-2026",
    "competition_title": "Serie A",
    "sport_name": "Soccer",
    "league_abbreviation": "Serie A",
    "home_team": {
      "team_id": "TEAM-SSCN",
      "team_name": "SSC Napoli"
    },
    "away_team": {
      "team_id": "TEAM-JUV",
      "team_name": "Juventus FC"
    },
    "match_status": "Live",
    "match_date": "2026-02-22",
    "match_time_utc": "19:45:00Z",
    "live_duration_minutes": 70,
    "match_score": {
      "home_score": 1,
      "away_score": 1
    }
  },
  {
    "match_id": 1085,
    "match_title": "NHL Playoffs",
    "competition_id": "COMP-NHL-PO-2026",
    "competition_title": "NHL Playoffs",
    "sport_name": "Ice Hockey",
    "league_abbreviation": "NHL",
    "home_team": {
      "team_id": "TEAM-COL",
      "team_name": "Colorado Avalanche"
    },
    "away_team": {
      "team_id": "TEAM-NSH",
      "team_name": "Nashville Predators"
    },
    "match_status": "Final",
    "match_date": "2026-04-25",
    "match_time_utc": "02:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 6,
      "away_score": 2
    }
  },
  {
    "match_id": 1086,
    "match_title": "NCAA Women's Basketball Championship",
    "competition_id": "COMP-NCAA-WBB-2025",
    "competition_title": "March Madness",
    "sport_name": "Basketball",
    "league_abbreviation": "NCAA",
    "home_team": {
      "team_id": "TEAM-IOWA",
      "team_name": "Iowa Hawkeyes"
    },
    "away_team": {
      "team_id": "TEAM-SC",
      "team_name": "South Carolina Gamecocks"
    },
    "match_status": "Final",
    "match_date": "2025-04-06",
    "match_time_utc": "19:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 85,
      "away_score": 87
    }
  },
  {
    "match_id": 1087,
    "match_title": "MLB Opening Day",
    "competition_id": "COMP-MLB-REG-2026",
    "competition_title": "MLB Regular Season",
    "sport_name": "Baseball",
    "league_abbreviation": "MLB",
    "home_team": {
      "team_id": "TEAM-LAD",
      "team_name": "Los Angeles Dodgers"
    },
    "away_team": {
      "team_id": "TEAM-SDP",
      "team_name": "San Diego Padres"
    },
    "match_status": "Upcoming",
    "match_date": "2026-03-27",
    "match_time_utc": "02:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1088,
    "match_title": "NFL Pro Bowl",
    "competition_id": "COMP-NFL-PB-2026",
    "competition_title": "NFL Pro Bowl",
    "sport_name": "American Football",
    "league_abbreviation": "NFL",
    "home_team": {
      "team_id": "TEAM-AFC",
      "team_name": "AFC"
    },
    "away_team": {
      "team_id": "TEAM-NFC",
      "team_name": "NFC"
    },
    "match_status": "Final",
    "match_date": "2026-02-01",
    "match_time_utc": "20:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 35,
      "away_score": 32
    }
  },
  {
    "match_id": 1089,
    "match_title": "Ligue 1 Matchday 25",
    "competition_id": "COMP-L1-2026",
    "competition_title": "Ligue 1",
    "sport_name": "Soccer",
    "league_abbreviation": "Ligue 1",
    "home_team": {
      "team_id": "TEAM-ASM",
      "team_name": "AS Monaco"
    },
    "away_team": {
      "team_id": "TEAM-PSG",
      "team_name": "Paris Saint-Germain"
    },
    "match_status": "Upcoming",
    "match_date": "2026-03-01",
    "match_time_utc": "19:45:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1090,
    "match_title": "NBA All-Star Game",
    "competition_id": "COMP-NBA-AS-2026",
    "competition_title": "NBA All-Star",
    "sport_name": "Basketball",
    "league_abbreviation": "NBA",
    "home_team": {
      "team_id": "TEAM-LEBRON",
      "team_name": "Team LeBron"
    },
    "away_team": {
      "team_id": "TEAM-GIANNIS",
      "team_name": "Team Giannis"
    },
    "match_status": "Final",
    "match_date": "2026-02-15",
    "match_time_utc": "01:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 184,
      "away_score": 175
    }
  },
  {
    "match_id": 1091,
    "match_title": "Six Nations Championship",
    "competition_id": "COMP-6N-2026",
    "competition_title": "Six Nations Championship",
    "sport_name": "Rugby Union",
    "league_abbreviation": "6N",
    "home_team": {
      "team_id": "TEAM-WAL",
      "team_name": "Wales"
    },
    "away_team": {
      "team_id": "TEAM-ENG",
      "team_name": "England"
    },
    "match_status": "Final",
    "match_date": "2026-02-08",
    "match_time_utc": "16:45:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 15,
      "away_score": 18
    }
  },
  {
    "match_id": 1092,
    "match_title": "La Liga Matchday 32",
    "competition_id": "COMP-LALIGA-2026",
    "competition_title": "La Liga",
    "sport_name": "Soccer",
    "league_abbreviation": "La Liga",
    "home_team": {
      "team_id": "TEAM-RM",
      "team_name": "Real Madrid"
    },
    "away_team": {
      "team_id": "TEAM-GET",
      "team_name": "Getafe CF"
    },
    "match_status": "Live",
    "match_date": "2026-04-20",
    "match_time_utc": "19:00:00Z",
    "live_duration_minutes": 85,
    "match_score": {
      "home_score": 3,
      "away_score": 1
    }
  },
  {
    "match_id": 1093,
    "match_title": "Bundesliga DFB Pokal Final",
    "competition_id": "COMP-DFB-PK-2026",
    "competition_title": "DFB-Pokal",
    "sport_name": "Soccer",
    "league_abbreviation": "DFB",
    "home_team": {
      "team_id": "TEAM-BAYM",
      "team_name": "Bayern Munich"
    },
    "away_team": {
      "team_id": "TEAM-RBL",
      "team_name": "RB Leipzig"
    },
    "match_status": "Upcoming",
    "match_date": "2026-05-21",
    "match_time_utc": "19:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1094,
    "match_title": "NBA Eastern Conference Finals - Game 7",
    "competition_id": "COMP-NBA-PO-2026",
    "competition_title": "NBA Playoffs",
    "sport_name": "Basketball",
    "league_abbreviation": "NBA",
    "home_team": {
      "team_id": "TEAM-BOS",
      "team_name": "Boston Celtics"
    },
    "away_team": {
      "team_id": "TEAM-NYK",
      "team_name": "New York Knicks"
    },
    "match_status": "Upcoming",
    "match_date": "2026-05-30",
    "match_time_utc": "00:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1095,
    "match_title": "MLB All-Star Game",
    "competition_id": "COMP-MLB-AS-2026",
    "competition_title": "MLB All-Star",
    "sport_name": "Baseball",
    "league_abbreviation": "MLB",
    "home_team": {
      "team_id": "TEAM-AL",
      "team_name": "American League"
    },
    "away_team": {
      "team_id": "TEAM-NL",
      "team_name": "National League"
    },
    "match_status": "Upcoming",
    "match_date": "2026-07-14",
    "match_time_utc": "23:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1096,
    "match_title": "NFL Thanksgiving Day Game",
    "competition_id": "COMP-NFL-REG-2025",
    "competition_title": "NFL Regular Season",
    "sport_name": "American Football",
    "league_abbreviation": "NFL",
    "home_team": {
      "team_id": "TEAM-DAL",
      "team_name": "Dallas Cowboys"
    },
    "away_team": {
      "team_id": "TEAM-WAS",
      "team_name": "Washington Commanders"
    },
    "match_status": "Upcoming",
    "match_date": "2025-11-27",
    "match_time_utc": "21:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1097,
    "match_title": "EPL Matchday 30",
    "competition_id": "COMP-EPL-2026",
    "competition_title": "English Premier League",
    "sport_name": "Soccer",
    "league_abbreviation": "EPL",
    "home_team": {
      "team_id": "TEAM-MU",
      "team_name": "Manchester United"
    },
    "away_team": {
      "team_id": "TEAM-MC",
      "team_name": "Manchester City"
    },
    "match_status": "Upcoming",
    "match_date": "2026-04-05",
    "match_time_utc": "15:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1098,
    "match_title": "WNBA Playoffs Finals Game 5",
    "competition_id": "COMP-WNBA-F-2025",
    "competition_title": "WNBA Finals",
    "sport_name": "Basketball",
    "league_abbreviation": "WNBA",
    "home_team": {
      "team_id": "TEAM-LVA",
      "team_name": "Las Vegas Aces"
    },
    "away_team": {
      "team_id": "TEAM-NYL",
      "team_name": "New York Liberty"
    },
    "match_status": "Upcoming",
    "match_date": "2025-10-05",
    "match_time_utc": "20:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1099,
    "match_title": "NHL Playoffs",
    "competition_id": "COMP-NHL-PO-2026",
    "competition_title": "NHL Playoffs",
    "sport_name": "Ice Hockey",
    "league_abbreviation": "NHL",
    "home_team": {
      "team_id": "TEAM-BOS",
      "team_name": "Boston Bruins"
    },
    "away_team": {
      "team_id": "TEAM-TBL",
      "team_name": "Tampa Bay Lightning"
    },
    "match_status": "Live",
    "match_date": "2026-05-02",
    "match_time_utc": "00:00:00Z",
    "live_duration_minutes": 45,
    "match_score": {
      "home_score": 2,
      "away_score": 1
    }
  },
  {
    "match_id": 1100,
    "match_title": "Ligue 1 Matchday 35",
    "competition_id": "COMP-L1-2026",
    "competition_title": "Ligue 1",
    "sport_name": "Soccer",
    "league_abbreviation": "Ligue 1",
    "home_team": {
      "team_id": "TEAM-PSG",
      "team_name": "Paris Saint-Germain"
    },
    "away_team": {
      "team_id": "TEAM-FCL",
      "team_name": "FC Lorient"
    },
    "match_status": "Final",
    "match_date": "2026-05-11",
    "match_time_utc": "19:45:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 4,
      "away_score": 0
    }
  },
  {
    "match_id": 1101,
    "match_title": "Brazilian Serie A - Round 20",
    "competition_id": "COMP-BSA-2025",
    "competition_title": "Brasileirão Série A",
    "sport_name": "Soccer",
    "league_abbreviation": "BSA",
    "home_team": {
      "team_id": "TEAM-FLA",
      "team_name": "Flamengo"
    },
    "away_team": {
      "team_id": "TEAM-COR",
      "team_name": "Corinthians"
    },
    "match_status": "Upcoming",
    "match_date": "2025-09-01",
    "match_time_utc": "22:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1102,
    "match_title": "NBA Preseason",
    "competition_id": "COMP-NBA-PS-2025",
    "competition_title": "NBA Preseason",
    "sport_name": "Basketball",
    "league_abbreviation": "NBA",
    "home_team": {
      "team_id": "TEAM-CHI",
      "team_name": "Chicago Bulls"
    },
    "away_team": {
      "team_id": "TEAM-IND",
      "team_name": "Indiana Pacers"
    },
    "match_status": "Live",
    "match_date": "2025-10-08",
    "match_time_utc": "00:00:00Z",
    "live_duration_minutes": 10,
    "match_score": {
      "home_score": 25,
      "away_score": 18
    }
  },
  {
    "match_id": 1103,
    "match_title": "CFL Grey Cup Final",
    "competition_id": "COMP-CFL-GC-2025",
    "competition_title": "CFL Grey Cup",
    "sport_name": "Canadian Football",
    "league_abbreviation": "CFL",
    "home_team": {
      "team_id": "TEAM-TOR-ARG",
      "team_name": "Toronto Argonauts"
    },
    "away_team": {
      "team_id": "TEAM-WPG-BOM",
      "team_name": "Winnipeg Blue Bombers"
    },
    "match_status": "Final",
    "match_date": "2025-11-16",
    "match_time_utc": "23:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 24,
      "away_score": 17
    }
  },
  {
    "match_id": 1104,
    "match_title": "KHL Regular Season",
    "competition_id": "COMP-KHL-REG-2025",
    "competition_title": "Kontinental Hockey League",
    "sport_name": "Ice Hockey",
    "league_abbreviation": "KHL",
    "home_team": {
      "team_id": "TEAM-CSKA",
      "team_name": "CSKA Moscow"
    },
    "away_team": {
      "team_id": "TEAM-SKA",
      "team_name": "SKA Saint Petersburg"
    },
    "match_status": "Upcoming",
    "match_date": "2025-10-20",
    "match_time_utc": "16:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1105,
    "match_title": "Indian Premier League - Final",
    "competition_id": "COMP-IPL-2026",
    "competition_title": "Indian Premier League",
    "sport_name": "Cricket",
    "league_abbreviation": "IPL",
    "home_team": {
      "team_id": "TEAM-CSK",
      "team_name": "Chennai Super Kings"
    },
    "away_team": {
      "team_id": "TEAM-MI",
      "team_name": "Mumbai Indians"
    },
    "match_status": "Upcoming",
    "match_date": "2026-05-25",
    "match_time_utc": "14:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1106,
    "match_title": "NRL Grand Final",
    "competition_id": "COMP-NRL-GF-2025",
    "competition_title": "National Rugby League",
    "sport_name": "Rugby League",
    "league_abbreviation": "NRL",
    "home_team": {
      "team_id": "TEAM-PEN",
      "team_name": "Penrith Panthers"
    },
    "away_team": {
      "team_id": "TEAM-BRIS",
      "team_name": "Brisbane Broncos"
    },
    "match_status": "Final",
    "match_date": "2025-10-05",
    "match_time_utc": "09:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 26,
      "away_score": 12
    }
  },
  {
    "match_id": 1107,
    "match_title": "Argentine Primera División",
    "competition_id": "COMP-APD-2025",
    "competition_title": "Argentine Primera División",
    "sport_name": "Soccer",
    "league_abbreviation": "APD",
    "home_team": {
      "team_id": "TEAM-RIV",
      "team_name": "River Plate"
    },
    "away_team": {
      "team_id": "TEAM-BOC",
      "team_name": "Boca Juniors"
    },
    "match_status": "Live",
    "match_date": "2025-09-22",
    "match_time_utc": "00:00:00Z",
    "live_duration_minutes": 55,
    "match_score": {
      "home_score": 0,
      "away_score": 1
    }
  },
  {
    "match_id": 1108,
    "match_title": "Basketball EuroBasket Final",
    "competition_id": "COMP-EB-2025",
    "competition_title": "FIBA EuroBasket",
    "sport_name": "Basketball",
    "league_abbreviation": "EuroBasket",
    "home_team": {
      "team_id": "TEAM-SPAIN",
      "team_name": "Spain"
    },
    "away_team": {
      "team_id": "TEAM-FRANCE",
      "team_name": "France"
    },
    "match_status": "Final",
    "match_date": "2025-09-17",
    "match_time_utc": "18:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 87,
      "away_score": 79
    }
  },
  {
    "match_id": 1109,
    "match_title": "NHL Global Series",
    "competition_id": "COMP-NHL-GS-2025",
    "competition_title": "NHL Global Series",
    "sport_name": "Ice Hockey",
    "league_abbreviation": "NHL",
    "home_team": {
      "team_id": "TEAM-COL",
      "team_name": "Colorado Avalanche"
    },
    "away_team": {
      "team_id": "TEAM-CBJ",
      "team_name": "Columbus Blue Jackets"
    },
    "match_status": "Upcoming",
    "match_date": "2025-11-10",
    "match_time_utc": "20:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1110,
    "match_title": "Rugby Championship - Round 3",
    "competition_id": "COMP-RC-2025",
    "competition_title": "The Rugby Championship",
    "sport_name": "Rugby Union",
    "league_abbreviation": "TRC",
    "home_team": {
      "team_id": "TEAM-AUS",
      "team_name": "Australia"
    },
    "away_team": {
      "team_id": "TEAM-ARG",
      "team_name": "Argentina"
    },
    "match_status": "Upcoming",
    "match_date": "2025-08-30",
    "match_time_utc": "07:45:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1111,
    "match_title": "UEFA Europa League - Group Stage",
    "competition_id": "COMP-UEL-2025",
    "competition_title": "UEFA Europa League",
    "sport_name": "Soccer",
    "league_abbreviation": "UEL",
    "home_team": {
      "team_id": "TEAM-WOLV",
      "team_name": "Wolverhampton Wanderers"
    },
    "away_team": {
      "team_id": "TEAM-AJAX",
      "team_name": "Ajax"
    },
    "match_status": "Live",
    "match_date": "2025-09-18",
    "match_time_utc": "17:45:00Z",
    "live_duration_minutes": 30,
    "match_score": {
      "home_score": 0,
      "away_score": 0
    }
  },
  {
    "match_id": 1112,
    "match_title": "Basketball Champions League - Group Phase",
    "competition_id": "COMP-BCL-2025",
    "competition_title": "Basketball Champions League",
    "sport_name": "Basketball",
    "league_abbreviation": "BCL",
    "home_team": {
      "team_id": "TEAM-AEK",
      "team_name": "AEK B.C."
    },
    "away_team": {
      "team_id": "TEAM-HAPOEL",
      "team_name": "Hapoel Jerusalem"
    },
    "match_status": "Upcoming",
    "match_date": "2025-10-15",
    "match_time_utc": "18:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1113,
    "match_title": "NFL Thursday Night Football",
    "competition_id": "COMP-NFL-TNF-2025",
    "competition_title": "NFL Regular Season",
    "sport_name": "American Football",
    "league_abbreviation": "NFL",
    "home_team": {
      "team_id": "TEAM-SEA",
      "team_name": "Seattle Seahawks"
    },
    "away_team": {
      "team_id": "TEAM-SF",
      "team_name": "San Francisco 49ers"
    },
    "match_status": "Upcoming",
    "match_date": "2025-10-09",
    "match_time_utc": "00:20:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1114,
    "match_title": "A-League Men - Round 1",
    "competition_id": "COMP-ALM-2025",
    "competition_title": "A-League Men",
    "sport_name": "Soccer",
    "league_abbreviation": "ALM",
    "home_team": {
      "team_id": "TEAM-SYD",
      "team_name": "Sydney FC"
    },
    "away_team": {
      "team_id": "TEAM-MELB-VIC",
      "team_name": "Melbourne Victory"
    },
    "match_status": "Upcoming",
    "match_date": "2025-10-25",
    "match_time_utc": "06:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1115,
    "match_title": "Gaelic Football All-Ireland Final",
    "competition_id": "COMP-GAA-AIF-2025",
    "competition_title": "GAA Football All-Ireland Senior Championship",
    "sport_name": "Gaelic Football",
    "league_abbreviation": "GAA",
    "home_team": {
      "team_id": "TEAM-DUB",
      "team_name": "Dublin"
    },
    "away_team": {
      "team_id": "TEAM-KERRY",
      "team_name": "Kerry"
    },
    "match_status": "Final",
    "match_date": "2025-07-28",
    "match_time_utc": "14:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 19,
      "away_score": 16
    }
  },
  {
    "match_id": 1116,
    "match_title": "Super Rugby Americas Final",
    "competition_id": "COMP-SRA-F-2025",
    "competition_title": "Super Rugby Americas",
    "sport_name": "Rugby Union",
    "league_abbreviation": "SRA",
    "home_team": {
      "team_id": "TEAM-PAMPAS",
      "team_name": "Pampas"
    },
    "away_team": {
      "team_id": "TEAM-DOGOS",
      "team_name": "Dogos XV"
    },
    "match_status": "Final",
    "match_date": "2025-05-18",
    "match_time_utc": "21:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 27,
      "away_score": 30
    }
  },
  {
    "match_id": 1117,
    "match_title": "Major League Baseball - ALDS Game 2",
    "competition_id": "COMP-MLB-PO-2025",
    "competition_title": "MLB Playoffs",
    "sport_name": "Baseball",
    "league_abbreviation": "MLB",
    "home_team": {
      "team_id": "TEAM-NYY",
      "team_name": "New York Yankees"
    },
    "away_team": {
      "team_id": "TEAM-HOU",
      "team_name": "Houston Astros"
    },
    "match_status": "Live",
    "match_date": "2025-10-09",
    "match_time_utc": "23:00:00Z",
    "live_duration_minutes": 150,
    "match_score": {
      "home_score": 2,
      "away_score": 1
    }
  },
  {
    "match_id": 1118,
    "match_title": "Eredivisie Matchday 8",
    "competition_id": "COMP-ERED-2025",
    "competition_title": "Eredivisie",
    "sport_name": "Soccer",
    "league_abbreviation": "Eredivisie",
    "home_team": {
      "team_id": "TEAM-AJAX",
      "team_name": "Ajax"
    },
    "away_team": {
      "team_id": "TEAM-PSV",
      "team_name": "PSV Eindhoven"
    },
    "match_status": "Upcoming",
    "match_date": "2025-10-05",
    "match_time_utc": "15:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1119,
    "match_title": "NBA G League Showcase",
    "competition_id": "COMP-NBAGL-2025",
    "competition_title": "NBA G League",
    "sport_name": "Basketball",
    "league_abbreviation": "G League",
    "home_team": {
      "team_id": "TEAM-DEL",
      "team_name": "Delaware Blue Coats"
    },
    "away_team": {
      "team_id": "TEAM-WCH",
      "team_name": "Wisconsin Herd"
    },
    "match_status": "Upcoming",
    "match_date": "2025-12-19",
    "match_time_utc": "00:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1120,
    "match_title": "Rugby League Four Nations Final",
    "competition_id": "COMP-RL4N-2025",
    "competition_title": "Rugby League Four Nations",
    "sport_name": "Rugby League",
    "league_abbreviation": "RL4N",
    "home_team": {
      "team_id": "TEAM-AUS",
      "team_name": "Australia"
    },
    "away_team": {
      "team_id": "TEAM-NZ",
      "team_name": "New Zealand"
    },
    "match_status": "Final",
    "match_date": "2025-11-23",
    "match_time_utc": "06:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 30,
      "away_score": 10
    }
  },
  {
    "match_id": 1121,
    "match_title": "Handball Champions League - Group Phase",
    "competition_id": "COMP-HCL-2025",
    "competition_title": "EHF Champions League",
    "sport_name": "Handball",
    "league_abbreviation": "EHFCL",
    "home_team": {
      "team_id": "TEAM-BAR-HAND",
      "team_name": "FC Barcelona Handball"
    },
    "away_team": {
      "team_id": "TEAM-PSG-HAND",
      "team_name": "Paris Saint-Germain Handball"
    },
    "match_status": "Live",
    "match_date": "2025-10-01",
    "match_time_utc": "17:45:00Z",
    "live_duration_minutes": 40,
    "match_score": {
      "home_score": 20,
      "away_score": 18
    }
  },
  {
    "match_id": 1122,
    "match_title": "Volleyball Nations League - Men's Final",
    "competition_id": "COMP-VNL-M-2025",
    "competition_title": "Volleyball Nations League Men",
    "sport_name": "Volleyball",
    "league_abbreviation": "VNL",
    "home_team": {
      "team_id": "TEAM-POL",
      "team_name": "Poland"
    },
    "away_team": {
      "team_id": "TEAM-USA",
      "team_name": "USA"
    },
    "match_status": "Final",
    "match_date": "2025-07-27",
    "match_time_utc": "15:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": "3-1",
      "away_score": "1-3"
    }
  },
  {
    "match_id": 1123,
    "match_title": "Water Polo World Championship - Men's Final",
    "competition_id": "COMP-WPWC-M-2025",
    "competition_title": "World Aquatics Championships",
    "sport_name": "Water Polo",
    "league_abbreviation": "WA-WPC",
    "home_team": {
      "team_id": "TEAM-HUN",
      "team_name": "Hungary"
    },
    "away_team": {
      "team_id": "TEAM-GRE",
      "team_name": "Greece"
    },
    "match_status": "Final",
    "match_date": "2025-07-20",
    "match_time_utc": "14:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 11,
      "away_score": 10
    }
  },
  {
    "match_id": 1124,
    "match_title": "Super Rugby Pacific - Round 10",
    "competition_id": "COMP-SRP-2026",
    "competition_title": "Super Rugby Pacific",
    "sport_name": "Rugby Union",
    "league_abbreviation": "SRP",
    "home_team": {
      "team_id": "TEAM-WAR",
      "team_name": "Waratahs"
    },
    "away_team": {
      "team_id": "TEAM-FOR",
      "team_name": "Force"
    },
    "match_status": "Upcoming",
    "match_date": "2026-04-12",
    "match_time_utc": "08:35:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1125,
    "match_title": "Serie A Matchday 30",
    "competition_id": "COMP-SA-2026",
    "competition_title": "Serie A",
    "sport_name": "Soccer",
    "league_abbreviation": "Serie A",
    "home_team": {
      "team_id": "TEAM-LAZ",
      "team_name": "Lazio"
    },
    "away_team": {
      "team_id": "TEAM-IM",
      "team_name": "Inter Milan"
    },
    "match_status": "Upcoming",
    "match_date": "2026-04-06",
    "match_time_utc": "19:45:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1126,
    "match_title": "NFL Sunday Night Football",
    "competition_id": "COMP-NFL-SNF-2025",
    "competition_title": "NFL Regular Season",
    "sport_name": "American Football",
    "league_abbreviation": "NFL",
    "home_team": {
      "team_id": "TEAM-GB",
      "team_name": "Green Bay Packers"
    },
    "away_team": {
      "team_id": "TEAM-MIN",
      "team_name": "Minnesota Vikings"
    },
    "match_status": "Live",
    "match_date": "2025-11-02",
    "match_time_utc": "01:20:00Z",
    "live_duration_minutes": 60,
    "match_score": {
      "home_score": 17,
      "away_score": 14
    }
  },
  {
    "match_id": 1127,
    "match_title": "NBA Western Conference Finals - Game 3",
    "competition_id": "COMP-NBA-PO-2026",
    "competition_title": "NBA Playoffs",
    "sport_name": "Basketball",
    "league_abbreviation": "NBA",
    "home_team": {
      "team_id": "TEAM-DEN",
      "team_name": "Denver Nuggets"
    },
    "away_team": {
      "team_id": "TEAM-GSW",
      "team_name": "Golden State Warriors"
    },
    "match_status": "Final",
    "match_date": "2026-05-23",
    "match_time_utc": "02:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 105,
      "away_score": 110
    }
  },
  {
    "match_id": 1128,
    "match_title": "MLB Regular Season",
    "competition_id": "COMP-MLB-REG-2026",
    "competition_title": "MLB Regular Season",
    "sport_name": "Baseball",
    "league_abbreviation": "MLB",
    "home_team": {
      "team_id": "TEAM-BOS",
      "team_name": "Boston Red Sox"
    },
    "away_team": {
      "team_id": "TEAM-NYY",
      "team_name": "New York Yankees"
    },
    "match_status": "Upcoming",
    "match_date": "2026-04-15",
    "match_time_utc": "23:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1129,
    "match_title": "EPL Matchday 35",
    "competition_id": "COMP-EPL-2026",
    "competition_title": "English Premier League",
    "sport_name": "Soccer",
    "league_abbreviation": "EPL",
    "home_team": {
      "team_id": "TEAM-LIV",
      "team_name": "Liverpool FC"
    },
    "away_team": {
      "team_id": "TEAM-TOT",
      "team_name": "Tottenham Hotspur"
    },
    "match_status": "Live",
    "match_date": "2026-05-03",
    "match_time_utc": "16:30:00Z",
    "live_duration_minutes": 20,
    "match_score": {
      "home_score": 1,
      "away_score": 0
    }
  },
  {
    "match_id": 1130,
    "match_title": "Six Nations Championship",
    "competition_id": "COMP-6N-2026",
    "competition_title": "Six Nations Championship",
    "sport_name": "Rugby Union",
    "league_abbreviation": "6N",
    "home_team": {
      "team_id": "TEAM-FRA",
      "team_name": "France"
    },
    "away_team": {
      "team_id": "TEAM-ENG",
      "team_name": "England"
    },
    "match_status": "Final",
    "match_date": "2026-03-22",
    "match_time_utc": "20:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 25,
      "away_score": 19
    }
  },
  {
    "match_id": 1131,
    "match_title": "Bundesliga Matchday 30",
    "competition_id": "COMP-BUN-2026",
    "competition_title": "Bundesliga",
    "sport_name": "Soccer",
    "league_abbreviation": "Bundesliga",
    "home_team": {
      "team_id": "TEAM-B04",
      "team_name": "Bayer 04 Leverkusen"
    },
    "away_team": {
      "team_id": "TEAM-DORT",
      "team_name": "Borussia Dortmund"
    },
    "match_status": "Upcoming",
    "match_date": "2026-04-26",
    "match_time_utc": "15:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1132,
    "match_title": "WNBA Commissioner's Cup Final",
    "competition_id": "COMP-WNBA-CC-2025",
    "competition_title": "WNBA Commissioner's Cup",
    "sport_name": "Basketball",
    "league_abbreviation": "WNBA",
    "home_team": {
      "team_id": "TEAM-NYL",
      "team_name": "New York Liberty"
    },
    "away_team": {
      "team_id": "TEAM-LVA",
      "team_name": "Las Vegas Aces"
    },
    "match_status": "Final",
    "match_date": "2025-08-15",
    "match_time_utc": "00:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 82,
      "away_score": 75
    }
  },
  {
    "match_id": 1133,
    "match_title": "MLS Rivalry Week",
    "competition_id": "COMP-MLS-REG-2025",
    "competition_title": "Major League Soccer",
    "sport_name": "Soccer",
    "league_abbreviation": "MLS",
    "home_team": {
      "team_id": "TEAM-LAG",
      "team_name": "LA Galaxy"
    },
    "away_team": {
      "team_id": "TEAM-LAFC",
      "team_name": "LAFC"
    },
    "match_status": "Live",
    "match_date": "2025-09-07",
    "match_time_utc": "03:00:00Z",
    "live_duration_minutes": 30,
    "match_score": {
      "home_score": 1,
      "away_score": 0
    }
  },
  {
    "match_id": 1134,
    "match_title": "NHL Conference Finals - Game 5",
    "competition_id": "COMP-NHL-PO-2026",
    "competition_title": "NHL Playoffs",
    "sport_name": "Ice Hockey",
    "league_abbreviation": "NHL",
    "home_team": {
      "team_id": "TEAM-BOS",
      "team_name": "Boston Bruins"
    },
    "away_team": {
      "team_id": "TEAM-CHI",
      "team_name": "Chicago Blackhawks"
    },
    "match_status": "Upcoming",
    "match_date": "2026-05-25",
    "match_time_utc": "00:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1135,
    "match_title": "Copa do Brasil Final",
    "competition_id": "COMP-CDB-2025",
    "competition_title": "Copa do Brasil",
    "sport_name": "Soccer",
    "league_abbreviation": "CDB",
    "home_team": {
      "team_id": "TEAM-GRE",
      "team_name": "Grêmio"
    },
    "away_team": {
      "team_id": "TEAM-INT",
      "team_name": "Internacional"
    },
    "match_status": "Final",
    "match_date": "2025-11-26",
    "match_time_utc": "00:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 1,
      "away_score": 1,
      "penalties": {
        "home_team": 5,
        "away_team": 4
      }
    }
  },
  {
    "match_id": 1136,
    "match_title": "NFL International Series",
    "competition_id": "COMP-NFL-IS-2025",
    "competition_title": "NFL International Series",
    "sport_name": "American Football",
    "league_abbreviation": "NFL",
    "home_team": {
      "team_id": "TEAM-JAX",
      "team_name": "Jacksonville Jaguars"
    },
    "away_team": {
      "team_id": "TEAM-TEN",
      "team_name": "Tennessee Titans"
    },
    "match_status": "Upcoming",
    "match_date": "2025-10-12",
    "match_time_utc": "13:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1137,
    "match_title": "Rugby Premiership Final",
    "competition_id": "COMP-RPREM-F-2026",
    "competition_title": "Gallagher Premiership Rugby",
    "sport_name": "Rugby Union",
    "league_abbreviation": "Prem Rugby",
    "home_team": {
      "team_id": "TEAM-EXET",
      "team_name": "Exeter Chiefs"
    },
    "away_team": {
      "team_id": "TEAM-SAR",
      "team_name": "Saracens"
    },
    "match_status": "Upcoming",
    "match_date": "2026-06-20",
    "match_time_utc": "14:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1138,
    "match_title": "MLB Futures Game",
    "competition_id": "COMP-MLB-AS-2026",
    "competition_title": "MLB All-Star Futures Game",
    "sport_name": "Baseball",
    "league_abbreviation": "MLB",
    "home_team": {
      "team_id": "TEAM-ALF",
      "team_name": "American League Futures"
    },
    "away_team": {
      "team_id": "TEAM-NLF",
      "team_name": "National League Futures"
    },
    "match_status": "Upcoming",
    "match_date": "2026-07-12",
    "match_time_utc": "19:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1139,
    "match_title": "Ligue 1 Matchday 30",
    "competition_id": "COMP-L1-2026",
    "competition_title": "Ligue 1",
    "sport_name": "Soccer",
    "league_abbreviation": "Ligue 1",
    "home_team": {
      "team_id": "TEAM-LYO",
      "team_name": "Olympique Lyonnais"
    },
    "away_team": {
      "team_id": "TEAM-MARS",
      "team_name": "Olympique de Marseille"
    },
    "match_status": "Live",
    "match_date": "2026-03-29",
    "match_time_utc": "20:45:00Z",
    "live_duration_minutes": 70,
    "match_score": {
      "home_score": 1,
      "away_score": 2
    }
  },
  {
    "match_id": 1140,
    "match_title": "NBA Play-In Tournament",
    "competition_id": "COMP-NBA-PIT-2026",
    "competition_title": "NBA Play-In Tournament",
    "sport_name": "Basketball",
    "league_abbreviation": "NBA",
    "home_team": {
      "team_id": "TEAM-NOP",
      "team_name": "New Orleans Pelicans"
    },
    "away_team": {
      "team_id": "TEAM-SAC",
      "team_name": "Sacramento Kings"
    },
    "match_status": "Final",
    "match_date": "2026-04-16",
    "match_time_utc": "01:30:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 102,
      "away_score": 97
    }
  },
  {
    "match_id": 1141,
    "match_title": "AFC Champions League Final - 1st Leg",
    "competition_id": "COMP-AFCCL-F-2025",
    "competition_title": "AFC Champions League",
    "sport_name": "Soccer",
    "league_abbreviation": "ACL",
    "home_team": {
      "team_id": "TEAM-ALH",
      "team_name": "Al-Hilal SFC"
    },
    "away_team": {
      "team_id": "TEAM-URAWA",
      "team_name": "Urawa Red Diamonds"
    },
    "match_status": "Upcoming",
    "match_date": "2025-11-09",
    "match_time_utc": "17:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1142,
    "match_title": "World Series of Fighting - Team Championship",
    "competition_id": "COMP-WSOF-TC-2025",
    "competition_title": "World Series of Fighting",
    "sport_name": "MMA Team",
    "league_abbreviation": "WSOF",
    "home_team": {
      "team_id": "TEAM-REDC",
      "team_name": "Red Corner Fighters"
    },
    "away_team": {
      "team_id": "TEAM-BLUEC",
      "team_name": "Blue Corner Fighters"
    },
    "match_status": "Upcoming",
    "match_date": "2025-10-25",
    "match_time_utc": "02:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1143,
    "match_title": "Canadian Premier League Final",
    "competition_id": "COMP-CPL-F-2025",
    "competition_title": "Canadian Premier League",
    "sport_name": "Soccer",
    "league_abbreviation": "CPL",
    "home_team": {
      "team_id": "TEAM-FORGE",
      "team_name": "Forge FC"
    },
    "away_team": {
      "team_id": "TEAM-CAV",
      "team_name": "Cavalry FC"
    },
    "match_status": "Final",
    "match_date": "2025-10-26",
    "match_time_utc": "18:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 2,
      "away_score": 0
    }
  },
  {
    "match_id": 1144,
    "match_title": "National Lacrosse League - Regular Season",
    "competition_id": "COMP-NLL-REG-2026",
    "competition_title": "National Lacrosse League",
    "sport_name": "Lacrosse",
    "league_abbreviation": "NLL",
    "home_team": {
      "team_id": "TEAM-BUF",
      "team_name": "Buffalo Bandits"
    },
    "away_team": {
      "team_id": "TEAM-ROC",
      "team_name": "Rochester Knighthawks"
    },
    "match_status": "Live",
    "match_date": "2026-02-07",
    "match_time_utc": "00:30:00Z",
    "live_duration_minutes": 40,
    "match_score": {
      "home_score": 8,
      "away_score": 7
    }
  },
  {
    "match_id": 1145,
    "match_title": "Roller Derby World Cup Final",
    "competition_id": "COMP-RDWC-F-2025",
    "competition_title": "Roller Derby World Cup",
    "sport_name": "Roller Derby",
    "league_abbreviation": "RDWC",
    "home_team": {
      "team_id": "TEAM-USA-RD",
      "team_name": "Team USA"
    },
    "away_team": {
      "team_id": "TEAM-ENG-RD",
      "team_name": "Team England"
    },
    "match_status": "Final",
    "match_date": "2025-12-14",
    "match_time_utc": "20:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 250,
      "away_score": 150
    }
  },
  {
    "match_id": 1146,
    "match_title": "ESports - League of Legends World Championship Final",
    "competition_id": "COMP-LOLWC-2025",
    "competition_title": "League of Legends World Championship",
    "sport_name": "Esports (League of Legends)",
    "league_abbreviation": "LoL Worlds",
    "home_team": {
      "team_id": "TEAM-T1",
      "team_name": "T1"
    },
    "away_team": {
      "team_id": "TEAM-GENG",
      "team_name": "Gen.G"
    },
    "match_status": "Upcoming",
    "match_date": "2025-11-02",
    "match_time_utc": "12:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1147,
    "match_title": "Beach Volleyball World Tour - Final",
    "competition_id": "COMP-BVWT-2025",
    "competition_title": "FIVB Beach Volleyball World Tour",
    "sport_name": "Beach Volleyball",
    "league_abbreviation": "FIVB BW",
    "home_team": {
      "team_id": "TEAM-BRA-BV",
      "team_name": "Brazil Men's Duo"
    },
    "away_team": {
      "team_id": "TEAM-NOR-BV",
      "team_name": "Norway Men's Duo"
    },
    "match_status": "Final",
    "match_date": "2025-08-31",
    "match_time_utc": "16:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": "2-0",
      "away_score": "0-2"
    }
  },
  {
    "match_id": 1148,
    "match_title": "Australian Baseball League - Regular Season",
    "competition_id": "COMP-ABL-REG-2026",
    "competition_title": "Australian Baseball League",
    "sport_name": "Baseball",
    "league_abbreviation": "ABL",
    "home_team": {
      "team_id": "TEAM-SYD-BLUE",
      "team_name": "Sydney Blue Sox"
    },
    "away_team": {
      "team_id": "TEAM-PER-HEAT",
      "team_name": "Perth Heat"
    },
    "match_status": "Live",
    "match_date": "2026-01-10",
    "match_time_utc": "05:00:00Z",
    "live_duration_minutes": 100,
    "match_score": {
      "home_score": 4,
      "away_score": 3
    }
  },
  {
    "match_id": 1149,
    "match_title": "Curling World Men's Championship Final",
    "competition_id": "COMP-CWM-F-2026",
    "competition_title": "World Men's Curling Championship",
    "sport_name": "Curling",
    "league_abbreviation": "WCF",
    "home_team": {
      "team_id": "TEAM-CAN",
      "team_name": "Team Canada"
    },
    "away_team": {
      "team_id": "TEAM-SWE",
      "team_name": "Team Sweden"
    },
    "match_status": "Final",
    "match_date": "2026-04-05",
    "match_time_utc": "16:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": 7,
      "away_score": 6
    }
  },
  {
    "match_id": 1150,
    "match_title": "EuroLeague Women - Final Four",
    "competition_id": "COMP-ELW-F4-2026",
    "competition_title": "EuroLeague Women",
    "sport_name": "Basketball",
    "league_abbreviation": "ELW",
    "home_team": {
      "team_id": "TEAM-UMMC",
      "team_name": "UMMC Ekaterinburg"
    },
    "away_team": {
      "team_id": "TEAM-FENE",
      "team_name": "Fenerbahçe Women's Basketball"
    },
    "match_status": "Upcoming",
    "match_date": "2026-04-18",
    "match_time_utc": "17:00:00Z",
    "live_duration_minutes": null,
    "match_score": {
      "home_score": null,
      "away_score": null
    }
  },
  {
    "match_id": 1151,
    "match_title": "Rugby Premiership - Semi-Final",
    "competition_id": "COMP-RPREM-2026",
    "competition_title": "Gallagher Premiership Rugby",
    "sport_name": "Rugby Union",
    "league_abbreviation": "Prem Rugby",
    "home_team": {
      "team_id": "TEAM-LEIC",
      "team_name": "Leicester Tigers"
    },
    "away_team": {
      "team_id": "TEAM-HARL",
      "team_name": "Harlequins"
    },
    "match_status": "Live",
    "match_date": "2026-06-13",
    "match_time_utc": "15:00:00Z",
    "live_duration_minutes": 65,
    "match_score": {
      "home_score": 18,
      "away_score": 15
    }
  }
];

export default matches;





