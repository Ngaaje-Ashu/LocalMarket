import React ,{useState, useEffect}from 'react'
import { StyleSheet, Text, View ,SafeAreaView ,TouchableOpacity ,Image ,Button ,Dimensions} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import CustomButton from '../Components/CustomButton';
import CustomInput from '../Components/CustomInput';
import CustomLink from '../Components/CustomLink';

export default function product_image() {
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [ image, setImage ] = useState(null);

    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');
        })();
    }, []);

    const pickImage = async () => {
        let result  =  await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality:1,
        });

        console.log(result);

        if (!result.cancelled){
            setImage(result.uri);
        }
    };

    if (hasGalleryPermission === false){
        return <Text>No access to internal storage</Text>
    }

  return (
   <view style={{flex:1, justifyContent:'center'}}>
     <Button title='pick Image' onPress={() => pickImage()} style={{marginTop:30}} /> 
     {image && <Image source={{uri: image}} style={{flex:1/2}} />}

   </view>
  );
}
    

  
export default product_image