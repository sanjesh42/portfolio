import loadrunner from '../app/assets/svg/skills/loadrunner.png';
import appdynamics from '../app/assets/svg/skills/appdynamics.png';
import microsoftappinsights from '../app/assets/svg/skills/microsoftappinsights.jpeg';
import sqlserver from '../app/assets/svg/skills/sqlserver.png';
import dbserver from '../app/assets/svg/skills/dbserver.jpeg';
import dynatrace from '../app/assets/svg/skills/dynatrace.png';
import performancecenter from '../app/assets/svg/skills/performancecenter.png';
import fiddler from '../app/assets/svg/skills/fiddler.jpeg';
import jmeter from '../app/assets/svg/skills/jmeter.png';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'loadrunner':
      return loadrunner;
    case 'jmeter':
      return jmeter;
    case 'performancecenter':
      return performancecenter;
    case 'appdynamics':
      return appdynamics;
    case 'dynatrace':
      return dynatrace;
    case 'sqlserver':
      return sqlserver;
    case 'dbserver':
      return dbserver;
    case 'fiddler':
      return fiddler;
    case 'microsoftappinsights':
      return microsoftappinsights;
    default:
      break;
  }
}
