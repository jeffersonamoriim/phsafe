import React, {Component} from 'react';

class Json extends Component {

  state = {
    isLoading: true,
    data: [],
    error: null
  };

  fetchData() {
    fetch(`https://api.thingspeak.com/channels/779397/feeds`)
      .then(response => response.json())
      .then(data => 
        this.setState({
          data: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { isLoading, data, error } = this.state;
    return (
      <React.Fragment>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          data.feeds.map(feeds => {
            const { entry_id , field1 } = feeds;
            if (entry_id === data.channel.last_entry_id) {
              return (
                <div key={entry_id}>
                  {field1}
                </div>
              )
            }
            })
        ) : (
          <h3>Carregando...</h3>
        )}
      </React.Fragment>
    );
  }

}
export default Json;