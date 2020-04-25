import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item/MenuItem";
import directorySelector from "../../redux/directory/directory.selector";

//styled component

import { DirectoryContainer } from "./directory.styles";

const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: directorySelector,
});

export default connect(mapStateToProps)(Directory);
