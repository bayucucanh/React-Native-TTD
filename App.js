import React from 'react';
import {Text, View, Button} from 'react-native';

// import Video from 'react-native-video';
// import Pdf from 'react-native-pdf';

class App extends React.Component {
  state = {
    pdfLink: '',
  };

  onButtonOpenClick = () => {
    this.setState({
      pdfLink: 'http://samples.leanpub.com/thereactnativebook-sample.pdf'
    })
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#696969',
        }}>
        {/* <Text>My Video Project</Text>
        <Video 
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          style={{ width: 300, height: 300 }}
          fullscreen={true}
          controls={true}
          poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/English_Cocker_Spaniel_4.jpg/800px-English_Cocker_Spaniel_4.jpg"
        /> */}

        <Text>My Document Project</Text>
        <Button title="Open PDF Document" onPress={this.onButtonOpenClick}/>

        {/* {this.state.pdfLink ? (
          <Pdf
            source={{uri: this.state.pdfLink}}
            style={{width: 500, height: 500}}
          />
        ) : null} */}
      </View>
    );
  }
}

export default App;
