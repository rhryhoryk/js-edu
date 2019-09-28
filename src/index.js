/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(focus, knowsProgramming, config) {

    const basic = 500;
    const master = 800;
    const fromScratch = master + basic;
    let result = 0;

    if (knowsProgramming) {
      result += Math.ceil(master / config[focus]);
    } else {
      result += Math.ceil(fromScratch / config[focus]);
    };

    return result;
  };
  