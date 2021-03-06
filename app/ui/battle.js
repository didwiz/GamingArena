import React from 'react';
import { StyleSheet, TouchableOpacity, Text,Image, View, Dimensions, ImageBackground } from 'react-native';
import * as firebase from 'firebase';
import fireConfig from '../auth'
import stage1 from '../elements/images/stages/burners.jpg'
import colors from '../math/bit_map/colors'
import avatar from '../elements/cookies/avatar'
import tempAi from '../elements/cookies/tempAi'

// Initialize Firebase
const firebaseConfig = {
  apiKey: fireConfig.apiKey,
  authDomain: fireConfig.authDomain,
  databaseURL: fireConfig.databaseURL,
  storageBucket: fireConfig.storageBucket,
};

var {height, width} = Dimensions.get('window');
var vehicleWidth = width - 80;
var vehicleHeight = height/2 - (height/7);

const firebaseApp = firebase.initializeApp(firebaseConfig);
var enemy1hp = vehicleWidth/2 - 12
var enemy2hp = vehicleWidth/2 - 12

//This could potentially contain a lot of state data and logic methodology
// We're going to try to keep this as clean as possible 

export default class BattleArena extends React.Component {
  constructor(){
    super()

    this.state = {
      enemy1hp: enemy1hp,
      enemy2hp:enemy2hp,
      vehicles : {
        left:0
      }
    }
  }

  _onTurnEnded(){

  }

  _Rivalcharacter(x){
    return(<TouchableOpacity style={{flex:1, padding:5, flexDirection:'row', alignItems:'center'}}>
      <Image source = {x.image} resizeMode="contain" style={{width:90 ,height:110, borderRadius:25}} />
      <View style={{flex:1}}>
      <Text style={{color:'#fff', fontSize:12}}>{x.first_name.toUpperCase()}</Text>
      <Text style={{color:'#fff', fontSize:7}}>{x.fun_fact}</Text>
      <Text style={{color:'#fff', fontSize:13, marginTop:35}}>{(this.state.enemy2hp/enemy1hp) * 100}%</Text>
      </View>
      </TouchableOpacity>)
  }

  _vehicleUIRival(){
    return(<View style={{width:vehicleWidth, borderRadius:5, padding:5, height:vehicleHeight, margin:5, backgroundColor:colors[1]}}>
     <Text style={{position:'absolute', color:colors[0], fontSize:26}}>87%</Text>
      <View style={{flex:5}}>
      <Text style={{margin:10, color:'#fff', fontSize:11, marginBottom:0, fontWeight:'300'}}>{tempAi.name.toUpperCase()}</Text>
        <View style={{margin:5, marginTop:0}}>
          <Text style={{margin:5, marginBottom:0, color:'#fff', fontSize:19, fontWeight:'100'}}>{tempAi.characters[2].name.toUpperCase()}</Text>
        </View>
        <View style={{flexDirection:'row', margin:5, marginBottom:-31, alignItems:'center', justifyContent:'space-between'}}>
        <View style={{height:1, backgroundColor:colors[3], width:this.state.enemy1hp}} /><View style={{height:1, backgroundColor:colors[2], width:this.state.enemy2hp}} />
        </View>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <View style={{alignItems:'center', borderColor:colors[0], borderRadius:2, flex:1, padding:10, paddingBottom:0, flexDirection:'row',}}>
          
          {this._Rivalcharacter(tempAi.characters[0])}
          <View style={{width:1, height:30, backgroundColor:colors[0]}} />
          {this._Rivalcharacter(tempAi.characters[1])}
        </View>
        </View>
      </View>
      <View style={{flex:1, flexDirection:'row', borderWidth:1, borderColor:colors[3], backgroundColor:colors[0], borderRadius:5, borderTopEndRadius:0, borderTopStartRadius:0, marginBottom:0}}>
      <View style={{flex:1}} />
      <View style={{flex:1}}><Image source ={tempAi.characters[2].image} style={{width:120, height: 80, marginTop:-15}} resizeMode='contain' /></View>
      <View style={{flex:1}} />
      </View>
      </View>)
  }

  _vehicleUIMe(){
    return(<View style={{width:vehicleWidth, borderRadius:5, alignSelf:'flex-end', margin:5, padding:5, height:vehicleHeight, backgroundColor:colors[1]}}>
        <View style={{flex:5}}>
      <Text style={{margin:10, color:'#fff', fontSize:11, marginBottom:0, fontWeight:'300'}}>{avatar.name.toUpperCase()}</Text>
        <View style={{margin:5, marginTop:0}}>
          <Text style={{margin:5, marginBottom:0, color:'#fff', fontSize:19, fontWeight:'100'}}>{avatar.characters[2].name.toUpperCase()}</Text>
        </View>
        <View style={{flexDirection:'row', margin:5, marginBottom:-31, alignItems:'center', justifyContent:'space-between'}}>
        <View style={{height:1, backgroundColor:colors[0], width:this.state.enemy1hp}} /><View style={{height:1, backgroundColor:colors[2], width:this.state.enemy2hp}} />
        </View>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <View style={{alignItems:'center', borderColor:colors[0], borderRadius:2, flex:1, padding:10, paddingBottom:0, flexDirection:'row',}}>
          
          {this._Rivalcharacter(avatar.characters[0])}
          <View style={{width:1, height:30, backgroundColor:colors[0]}} />
          {this._Rivalcharacter(avatar.characters[1])}
        </View>
        </View>
      </View>
      <TouchableOpacity style={{flex:1, flexDirection:'row', backgroundColor:colors[2], borderRadius:5, borderWidth:1, borderColor:colors[0], borderTopEndRadius:0, borderTopStartRadius:0, marginBottom:0}}>
      <View style={{flex:1}} />
      <View style={{flex:1}}><Image source ={avatar.characters[2].image} style={{width:120, height:80, marginTop:-15}} resizeMode='contain' /></View>
      <View style={{flex:1}} />
      </TouchableOpacity>
      </View>)
  }


  render() {
    return (
      <ImageBackground source={stage1} style={styles.dock}>
        <View style={{height:25}} />
        <View style={{flex:3}}>
        {this._vehicleUIRival()}
        </View>
        <View style={{flexDirection:'row', flex:1, backgroundColor:'rgba(0,0,0,0.3)'}}>
        <View style={{width:60, backgroundColor:colors[0]}} />
        </View>
        <View style={{flex:3, justifyContent:'flex-end'}}>
        {this._vehicleUIMe()}
        </View>
        <View style={{height:60, backgroundColor:colors[1]}}></View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
   dock: {
    flex: 1,
    width:null,
    height:null,

  },
});
