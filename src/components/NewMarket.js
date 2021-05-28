import React from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { createMarket } from '../graphql/mutations';
import { Form, Button, Dialog, Input, Select, Notification } from 'element-react';
import { UserContext } from '../App';

class NewMarket extends React.Component {
  state = {
    addMarketDialog: false,
    name: "",
    tags: ["Arts", "web Dev", "Technolegy", "Creafts", "Entertainment"],
    selectedTags: [],
    options: []
  };

  handleAddMarket = async user => {
    try{
      this.setState({ addMarketDialog: false});
      const input = {
        name: this.state.name,
        owner: user.username,
        tags: this.state.selectedTags
      }
      const result = await API.graphql(graphqlOperation(createMarket, { input }));
      console.log({ result });
      console.info(`Created market: id ${result.data.createMarket.id}`);
      this.setState({ name: "", selectedTags: [] })
    } catch(err) {
      console.error('Error adding new market', err);
      Notification.error({
        title: "Error",
        message: `${err.message || "Error adding market"}`
      })
    }
  }

  handleFilterTags = query => {
    const options = this.state.tags
      .map(tag => ({ value: tag, label: tag}))
      .filter(tag => tag.label.toLowerCase().includes(query.toLowerCase()))
    this.setState({ options })
  }

  render() {
    return (
      <UserContext.Consumer>
      {({ user }) => <>
        <div className="market-header">
          <h1 className="market-title">
            Create Your MarketPlace
            <Button
              type="text"
              icon="edit"
              className="market-title-button"
              onClick={() => this.setState({ addMarketDialog: true })}
            />
          </h1>
          <Form inline={true} onSubmit={this.props.handleSearch}>
            <Form.Item>
              <Input 
                placeholder="Search Markets..."
                icon="circle-cross"
                value={this.props.searchTerm}
                onChange={this.props.handleSearchChange}
                onIconClick={this.props.handleClearSearch}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="info"
                icon="search"
                onClick={this.props.handleSearch}
                loading={this.props.isSearching}
              >
                Search
              </Button>
            </Form.Item>
          </Form>
        </div>

        <Dialog
          title="Create New Market"
          visible={this.state.addMarketDialog}
          onCancel={() => this.setState({ addMarketDialog: false })}
          size="large"
          customClass="dialog"
        >
          <Dialog.Body>
            <Form>
              <Form.Item label="Add Market Name">
                <Input 
                  placeholder="Market Name"
                  trim={true}
                  onChange={name => this.setState({ name })}
                  value={this.state.name}
                />
              </Form.Item>
              <Form.Item label="Add Tags">
                <Select 
                  multiple={true}
                  filterable={true}
                  placeholder="Market Tags"
                  onChange={ selectedTags => this.setState({ selectedTags })}
                  remoteMethod={this.handleFilterTags}
                  remote={true}
                >
                  {this.state.options.map(option => (
                    <Select.Option 
                      key={option.value}
                      label={option.label}
                      value={option.value}
                    />
                  ))}
                </Select>
              </Form.Item>
            </Form>
          </Dialog.Body>
          <Dialog.Footer>
            <Button onClick={() => this.setState({ addMarketDialog: false })}>
              Cancel
            </Button>
            <Button
              type="primary"
              disabled={!this.state.name}
              onClick={() => this.handleAddMarket(user)}
            >
              Add
            </Button>
          </Dialog.Footer>
        </Dialog>
      </>}
      </UserContext.Consumer>
    )
  }
}

export default NewMarket;
