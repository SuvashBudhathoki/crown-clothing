import React from "react";
import "./collection-overview.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import selectCollections from "../../redux/shop/shop.selector";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollection }) => (
      <CollectionPreview key={id} {...otherCollection} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
