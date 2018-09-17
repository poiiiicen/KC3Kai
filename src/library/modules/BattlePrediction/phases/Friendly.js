(function () {
  const Friendly = {};
  const { pipe, map, filter, Side } = KC3BattlePrediction;

  /*--------------------------------------------------------*/
  /* --------------------[ PUBLIC API ]-------------------- */
  /*--------------------------------------------------------*/

  Friendly.parseFriendly = ({ api_hougeki }) => {
    const {
      hougeki: { parseHougekiFriend },
    } = KC3BattlePrediction.battle.phases;

    return parseHougekiFriend(api_hougeki);
  };

  /*--------------------------------------------------------*/
  /* ---------------------[ EXPORTS ]---------------------- */
  /*--------------------------------------------------------*/

  Object.assign(KC3BattlePrediction.battle.phases.friendly, Friendly);
}());
