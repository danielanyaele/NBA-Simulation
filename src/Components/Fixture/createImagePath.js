import ImagePaths from "../../assetsPath/images.js";

const createImagePath = (fixture) => {
  const teams = fixture.split(" - ");
  const homeTeam = teams[0];
  const awayTeam = teams[1];

  const teamOneNames = homeTeam.split(" ");
  const teamOneSvgName = teamOneNames[teamOneNames.length - 1];

  const teamTwoNames = awayTeam.split(" ");
  const teamTwoSvgName = teamTwoNames[teamTwoNames.length - 1];

  const teamOnePath = `${ImagePaths[teamOneSvgName]}`;
  const teamTwoPath = `${ImagePaths[teamTwoSvgName]}`;

  return {
    homeTeam,
    awayTeam,
    teamOnePath,
    teamTwoPath,
  };
};

export default createImagePath;
