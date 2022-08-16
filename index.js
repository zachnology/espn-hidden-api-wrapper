const sports = require ('./sports');
const leagues = require ('./leagues');
const {
  getTeamIdMapping,
  getTeams,
  getTeamInfo,
  getTeamScheduleRaw,
  getTeamSchedule,
  getRankingsRaw,
  getRankings
} = require('./apiWrapper');

module.exports = {
  sports,
  leagues,
  getTeamIdMapping,
  getTeams,
  getTeamInfo,
  getTeamScheduleRaw,
  getTeamSchedule,
  getRankingsRaw,
  getRankings
};