import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 390 });

const texts = EStyleSheet.create({
    titleText: {
        color: '#611f66',
        fontSize: '32rem',
        fontWeight: 'bold',
    },
    buttonText: {
        color: '#f7f0ea',
        fontSize: '16rem',
        fontWeight: 'bold',
    },
    descriptionText: {
        color: '#197278',
        fontSize: '16rem',
    },
    input: {
        borderColor: '#000000',
        borderRadius: '6rem',
        borderWidth: '1rem',
        fontSize: '16rem',
        height: '48rem',
        paddingLeft: '10rem',
    },
    linkText: {
        color: '#197278',
        fontSize: '16rem',
        textDecorationLine: 'underline',
    },
});

export default texts;