import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import "./UserLinks.scss";

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link => (
      <Button
        flat={labeled}
        href={link.url}
        icon={!labeled}
        iconClassName={link.iconClassName}
        key={link.label}
        secondary
        style={{ color: 'white' }}
      >
        {labeled ? link.label : ""}
      </Button>
    ));
  }

  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
