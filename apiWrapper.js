const fetch = require('node-fetch');

const getTeamIdMapping = async (sport, league) => {
  const resp = await getTeams(sport, league);
  if (!resp.sports.length || !resp.sports[0].leagues.length) return {};
  return resp.sports[0].leagues[0].teams.map(t => ({
    id: t.team.id,
    abbreviation: t.team.abbreviation,
    displayName: t.team.displayName,
    shortDisplayName: t.team.shortDisplayName,
    nickname: t.team.nickname
  }))
};

const getTeams = async (sport, league) => {
  const resp = await fetch(`http://site.api.espn.com/apis/site/v2/sports/${sport}/${league}/teams`);
  return await resp.json();
};

const getTeamInfo = async (sport, league, teamId) => {
  const resp = await fetch(`http://site.api.espn.com/apis/site/v2/sports/${sport}/${league}/teams/${teamId}`);
  return await resp.json();
};

const getTeamScheduleRaw = async (sport, league, teamId) => {
  const resp = await fetch(`http://site.api.espn.com/apis/site/v2/sports/${sport}/${league}/teams/${teamId}/schedule`);
  return await resp.json();
}

const getTeamSchedule = async (sport, league, teamId) => {
  const resp = await getTeamScheduleRaw(sport, league, teamId);
  return resp.events.map(e => ({
    name: e.name,
    shortName: e.shortName,
    dateAndTime: e.date
  }));
}

const getRankingsRaw = async (sport, league) => {
  const resp = await fetch(`http://site.api.espn.com/apis/site/v2/sports/${sport}/${league}/rankings`);
  return await resp.json();
}

const getRankings = async (sport, league) => {
  const resp = await getRankingsRaw(sport, league);
  return resp.rankings.map(r => ({
    name: r.name,
    shortName: r.shortName,
    type: r.type,
    headline: r.headline,
    shortHeadline: r.shortHeadline,
    date: r.date,
    ranks: r.ranks.map(s => ({
      current: s.current,
      previous: s.previous,
      points: s.points,
      firstPlaceVotes: s.firstPlaceVotes,
      trend: s.trend,
      team: {
        id: s.team.id,
        name: s.team.name,
        nickname: s.team.nickname,
        abbreviation: s.team.abbreviation,
        logo: s.team.logo
      }
    }))
  }));
}

module.exports = {
  getTeamIdMapping,
  getTeams,
  getTeamInfo,
  getTeamScheduleRaw,
  getTeamSchedule,
  getRankingsRaw,
  getRankings
};