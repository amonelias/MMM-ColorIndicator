# MMM-ColorIndicator
A MagicMirror² module to validate incoming data and send specified (color)data. 

# Config

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
