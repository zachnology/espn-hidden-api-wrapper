const lib = require('./index');

it('gets team/id mapping', async () => {
  const resp = await lib.getTeamIdMapping(
    lib.sports.FOOTBALL,
    lib.leagues.COLLEGE_FOOTBALL
  );
  await expect(resp).not.toBeNull();
});

it('gets LSU football schedule', async () => {
  const resp = await lib.getTeamScheduleRaw(
    lib.sports.FOOTBALL,
    lib.leagues.COLLEGE_FOOTBALL,
    99
  );
  await expect(resp).not.toBeNull();
});

it('gets LSU football simple schedule', async () => {
  const resp = await lib.getTeamSchedule(
    lib.sports.FOOTBALL,
    lib.leagues.COLLEGE_FOOTBALL,
    99
  );
  await expect(resp).not.toBeNull();
});

it('gets college football rankings', async () => {
  const resp = await lib.getRankingsRaw(
    lib.sports.FOOTBALL,
    lib.leagues.COLLEGE_FOOTBALL
  );
  await expect(resp).not.toBeNull();
});

it('gets college football simple rankings', async () => {
  const resp = await lib.getRankings(
    lib.sports.FOOTBALL,
    lib.leagues.COLLEGE_FOOTBALL
  );
  console.log(resp);
  await expect(resp).not.toBeNull();
});