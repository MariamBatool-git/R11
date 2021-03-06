import {ScrollView,View,Image,StyleSheet} from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import React, {Component} from 'react';
import {Avatar,Title, Caption , Text,TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile =() => {
  return(
    <ScrollView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
        <Avatar.Image 
          source={require('../assets/profile.jpg')}
          size={80}
        />
        <View style={{marginLeft: 20}}>
          <Title style={[
            styles.title, 
            {
            marginTop:15,
            marginBottom: 5,}]}>
              Afia Abdul Rahman
          </Title>
          <Caption style={styles.caption}>@afiaabdulrehman2</Caption>
        </View>
      </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>afiaabdulrehman2@gmail.com</Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}
        >
          <Title>30</Title>
          <Caption>Favorites</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>30</Title>
          <Caption>Likes</Caption>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#9B1454" size={25}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="camera-image" color="#9B1454" size={25}/>
            <Text style={styles.menuItemText}>Your Photos</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>{}}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#9B1454" size={25}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#9B1454" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>  
      </View>  
    </ScrollView>
  );
} 
export default Profile;
// styling for this component
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },    
});
  