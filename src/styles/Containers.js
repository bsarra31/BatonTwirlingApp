import EStyleSheet from "react-native-extended-stylesheet";

const containers = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f0ea',
    },
    scrollContainer: {
        flex: 5,
        marginHorizontal: '20rem',
        justifyContent: 'center',
    },
    backButtonContainer: {
        marginHorizontal: '20rem',
        marginTop: '20rem',
        justifyContent: 'center',
    },
    titleContainer: {
        flex: 1,
        marginHorizontal: '20rem',
        justifyContent: 'center',
    },
    submitButtonContainer: {
        width: '100%',
        height: '48rem',
        backgroundColor: '#611f66',
        borderRadius: '6rem',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default containers;