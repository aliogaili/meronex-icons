export const BRAND_TITLE = "Meronex Icons";
export const BRAND_TITLE_MONO = "@meronex/icons";
export const BRAND_DESCRIPTION =
  "Include popular icons in your React projects easily with meronex icons.";
export const BRAND_KEYWORDS = "React, Icons, Tree Shaking, SVG";

export const HOME_USAGE_DEFAULT = `
import FaBeer from '@meronex/icons/fa/FaBeer';

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}`;

export const HOME_USAGE_NAMED = `
import { FaBeer } from '@meronex/icons/fa';

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}`;
