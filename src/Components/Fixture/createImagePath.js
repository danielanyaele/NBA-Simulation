import imagesPath from "../../assetsPath/images";

const createImagePath = (fixture) => {
  const teams = fixture.split(" - ");
  const homeTeam = teams[0];
  const awayTeam = teams[1];

  const teamOneNames = homeTeam.split(" ");
  const teamOneSvgName = teamOneNames[teamOneNames.length - 1];

  const teamTwoNames = awayTeam.split(" ");
  const teamTwoSvgName = teamTwoNames[teamTwoNames.length - 1];

  const teamOnePath = `${imagesPath[teamOneSvgName]}`;
  const teamTwoPath = `${imagesPath[teamTwoSvgName]}`;

  return {
    homeTeam,
    awayTeam,
    teamOnePath,
    teamTwoPath,
  };
};

export default createImagePath;
