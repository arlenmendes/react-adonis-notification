import React from 'react';

import Ws from '@adonisjs/websocket-client'
const ws = Ws('ws://192.168.0.19:3333')

class App extends React.Component {

  constructor(props) {
    super(props)

    ws.connect()

    ws.on('open', () => {
      const notifications = ws.subscribe('notifications')

      notifications.on('rdo', (data) => {
        console.log(data)
      })

      notifications.on('abnormality', (data) => {
        console.log(data)
      })
    })
  }

  render() {
    return (
      <div className="App">
        Arlens
      </div>
    );
  }
  
}

export default App;
