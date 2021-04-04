# MMM-ColorIndicator
A MagicMirror² module to validate incoming data and send specified (color)data.

## Installation
1. Navigate to the `/modules` folder of you MagicMirror²
2. Clone this repository using the following command: `git clone https://github.com/amonelias/MMM-ColorIndicator.git`

## Config
<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>msgin</code></td>
      <td>Message to receive data<br><br><strong>Type:</strong> <code>string</code></td>
    </tr>
    <tr>
      <td><code>msgout</code></td>
      <td>Message to send (color)data<br><br><strong>Type:</strong> <code>string</code></td>
    </tr>
    <tr>
      <td><code>limits</code></td>
      <td><strong>Default: [0, "0000FF"]</strong><br>Array of values and the data that should be send if the incoming data is above<br><br><strong>Type:</strong> <code>array:[[number, string], ...]</code></td>
    </tr>
  </tbody>
</table>


To use this module, add it to the modules array in the `config/config.js` file:
```javascript
  {
    module: 'MMM-ColorIndicator',
    position: 'top_right', // any possible region
    config: {
      msgin: "",
      msgout: "",
      limits:[
        [0, "0000FF"]
      ]
    },
  },
```

## Update
Navigate to the folder of the module in the `/modules` folder and get the latest version using the command `git pull`.
