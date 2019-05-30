import React, {Component} from 'react';

class Graph extends Component {

    render(){
        return (
            <div>
              <iframe src="https://thingspeak.com/channels/779397/charts/1?bgcolor=%23gggggg&color=%23d62020&dynamic=true&results=20&title=PH+Tracking&type=line&xaxis=Time&yaxis=Value+pH" width="500" height="300" frameborder="0" allowfullscreen></iframe>
            </div>
          )
    }
}

export default Graph;

