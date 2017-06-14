import React, { Component } from 'react';
import { StyleSheet, View, ListView, Image, Text } from 'react-native';

const basketIcon = require('./images/bola2.png');
var URL="http://mhs.rey1024.com/1415051041/index_lapangan.php";

class MainApp extends Component {
  constructor(props){
    super(props);
    var ds = new 
    ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
       dataSource: ds,
    };
  }

  AmbilDataMahasiswa() {
    fetch(URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows
        (responseData),
      });
    }) .done();
  }

  renderRow(record) {
    return (
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Image source={basketIcon} style={styles.icon} />
        </View>
        <View style={styles.info}>
          <Text style={styles.items}>{record.Nama_Lap} </Text>
          <Text style={styles.address}>{record.AlamatLap}</Text>
        </View>
              </View>
    );
  }

  render() {
    this.AmbilDataMahasiswa();
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>DAFTAR LAPANGAN</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    backgroundColor: '#2962FF',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 40,
    textAlign: 'center',
  },
  row: {
    borderColor: '#E3F2FD',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#90CAF9',
    borderColor: '#90CAF9',
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
  icon: {
    tintColor: '#fff',
    height: 22,
    width: 22,
  },
  info: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  items: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  address: {
    color: '#ccc',
    fontSize: 14,
  },
  total: {
    width: 80,
  },
  date: {
    fontSize: 12,
    marginBottom: 5,
  },
  price: {
    color: '#1cad61',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default MainApp;
