import React from 'react';
import { Button, TextInput, StyleSheet, Text, View, Image } from 'react-native';

const grndlevelIcon = require('./images/ground_level.png');
const humidityIcon = require('./images/humadity.png');
const mainIcon = require('./images/main.png');
const maindescIcon = require('./images/main_desc.png');
const pressureIcon = require('./images/presure.png');
const sealevelIcon = require('./images/sea_level.png');
const sunriseIcon = require('./images/sunrise.png');
const sunsetIcon = require('./images/sunset.png');
const tempIcon = require('./images/temp.png');
const windspeedIcon = require('./images/wind_speed.png');

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: '',
                    forecast: {
                      main: '-',
                      description: '-',
                      temp: 0,
                      speed: 0,
                      sunrise: 0,
                      sunset: 0,
                      pressure: 0,
                      humidity: 0,
                      sea_level: 0,
                      grnd_level: 0,
                    }
                  };
  }

getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=8100cee5be6c6e1add2a16eb3691a35b&units=metric';
  fetch (url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast: {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        speed: responseJson.wind.speed,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sea_level: responseJson.main.sea_level,
        grnd_level: responseJson.main.grnd_level

      }
    });
  });
}

  render() {
    return (
    <View style={styles.containerMain}>
      <Text style={styles.textHeader}>Prakiraan Cuaca</Text>

      <View style={styles.box1}>
        <View style={styles.box2}>
          <Text style={styles.textMain}>Masukkan nama kota</Text>
            <View style={styles.boxInput}>
            <TextInput
              style={{ textAlign: 'center', color: 'black', height: 20 }}
              //placeholder="Masukkan Kota"
              onChangeText={(city) => this.setState({ city })}
            />
            </View>

            <View style={styles.button}>
              <Button
                onPress={() => this.getWeather({
                })}
                title="Lihat"
                accessbilityLabel="Klik untuk melihat"
              />
            </View>

        </View>

        <View style={styles.box3}>
          <View style={styles.boxListHor}>
            <View style={styles.boxListVer}>
              <Image source={mainIcon} style={styles.icon} />
                <View style={styles.boxListVerIn}>
                  <Text>Cuaca: {this.state.forecast.main} </Text>
                </View>
            </View>
            <View style={styles.boxListVer}>
              <Image source={tempIcon} style={styles.icon} />
                <View style={styles.boxListVerIn}>
                  <Text>Temp: {this.state.forecast.temp} </Text>
                </View>
            </View>
            <View style={styles.boxListVer}>
              <Image source={sunriseIcon} style={styles.icon} />
                <View style={styles.boxListVerIn}>
                  <Text>Sunrise: {this.state.forecast.sunrise} </Text>
                </View>
            </View>
            <View style={styles.boxListVer}>
            <Image source={pressureIcon} style={styles.icon} />
                <View style={styles.boxListVerIn}>
                  <Text>Tekanan Udara: {this.state.forecast.pressure} </Text>
                </View>
            </View>
            <View style={styles.boxListVer}>
              <Image source={sealevelIcon} style={styles.icon} />
                <View style={styles.boxListVerIn}>
                  <Text>Gelombang Air Laut: {this.state.forecast.sea_level} </Text>
                </View>
            </View>
          </View>

          <View style={styles.boxListHor}>
            <View style={styles.boxListVer}>
              <Image source={windspeedIcon} style={styles.icon} />
                <View style={styles.boxListVerIn}>
                  <Text>Kecepatan Angin: {this.state.forecast.speed} </Text>
                </View>
            </View>
            <View style={styles.boxListVer}>
              <Image source={maindescIcon} style={styles.icon} />
                <View style={styles.boxListVerIn}>
                  <Text>Keterangan Cuaca: {this.state.forecast.description} </Text>
                </View>
            </View>
            <View style={styles.boxListVer}>
              <Image source={sunsetIcon} style={styles.icon} />
                <View style={styles.boxListVerIn}>
                  <Text>Sunset: {this.state.forecast.sunset} </Text>
                </View>
            </View>
            <View style={styles.boxListVer}>
            <Image source={humidityIcon} style={styles.icon} />
                <View style={styles.boxListVerIn}>
                  <Text>Tinggi Air Laut: {this.state.forecast.humidity} </Text>
                </View>
            </View>
            <View style={styles.boxListVer}>
              <Image source={grndlevelIcon} style={styles.icon} />
                <View style={styles.boxListVerIn}>
                  <Text>Tekanan tanah: {this.state.forecast.grnd_level} </Text>
                </View>
            </View>
          </View>

        </View>

      </View>

      <Text style={styles.textFooter}>Copyright @deksudiana</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    padding: 20
  },
  textMain: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
  textFooter: {
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
    padding: 10
  },

  containerMain: {
    backgroundColor: '#64B5F6',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    //alignItems: 'center'
  },
  box1: {
    flex: 1,
    backgroundColor: '#B9F6CA',
    justifyContent: 'space-around'
  },
  box2: {
    flex: 1.5,
    margin: 10,
    backgroundColor: '#B71C1C',
  },
  boxInput: {
    flex: 0.5,
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: 'white',
    justifyContent: 'space-around'
  },
  box3: {
    flex: 3,
    marginTop: 10,
    flexDirection: 'row'
  },
  button: {
    flex: 0.5,
    marginLeft: 100,
    marginRight: 100,
    justifyContent: 'center'
  },
  boxListHor: {
    flex: 1,
    margin: 10,
    //backgroundColor: 'white'
  },
  boxListVer: {
    flex: 1,
    margin: 2,
    backgroundColor: '#1DE9B6',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  boxListVerIn: {
    flex: 1,
    //margin: 5,
    backgroundColor: '#FFEB3B',
    justifyContent: 'space-around',
    //alignItems: 'center'
    //flexDirection: 'column'
  },
  icon: {
    tintColor: '#FF3D00',
    height: 45,
    width: 45
  },
});
