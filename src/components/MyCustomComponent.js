import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

class MyCustomComponent extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  state = {
    dropdownOpen: false,
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    })
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>{this.props.title}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}

export default MyCustomComponent
