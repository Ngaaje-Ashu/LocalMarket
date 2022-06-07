import React ,{useState}from 'react'
import { StyleSheet, Text, View ,SafeAreaView ,TouchableOpacity ,Image ,Button ,Dimensions} from 'react-native';
import CustomButton from '../Components/CustomButton';
import CustomInput from '../Components/CustomInput';
import CustomLink from '../Components/CustomLink';

function add_product({navigation }) {
  const [productname, setProductname] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [category, setCategory] = useState('')

  const {height ,width}= Dimensions.get('window')
  onGoBackPress=()=>{
    navigation.navigate('Homescreen')
  }
  onLoginPress=()=>{
    navigation.navigate('Login')
  }
  return (
    <SafeAreaView 
    style={{
      flex:1,
    
    }}>
    <View style={{height:height ,backgroundColor:'white', alignItems:'center'}}  >
      <View style={{alignItems:'center' ,marginTop:40 }}>
      <Text style={styles.titleText }>Next</Text> 
      </View>
         
      <CustomInput placeholder='rice' value={productname} setValue={setProductname} inputText='Product Name:' />
      <CustomInput placeholder='Price' value={price} setValue={setPrice} inputText='Price:'/>
      <CustomInput placeholder='Quantity' value={quantity} setValue={setQuantity} inputText='Quantity:' secureTextEntry={false}/>
      <CustomInput placeholder='category' value={category} setValue={setCategory} inputText=' Category:' secureTextEntry={false}/>

      <CustomButton navigation={navigation} Btext="Next" onGoBackPress={onGoBackPress}/>
      <CustomLink navigation={navigation} onLoginPress={onLoginPress}/>
      </View>
      
   
    </SafeAreaView>
  )
}
const styles= StyleSheet.create({
  titleText:{
    fontWeight:'bold',
    fontSize:36,
    color: '#3C3C3C',
    alignItems:'center'
    
  },
  


})
export default add_product