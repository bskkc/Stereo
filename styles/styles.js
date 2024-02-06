import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from './colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 15
    },
    flatListContainer: {
        margin: 5,
    },
    songCards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 16,
        alignItems: "center",
    },
    listItem: {
        padding: 16,
        marginBottom: 8,
        backgroundColor: COLORS.white,
        borderRadius: 8,
        elevation: 4,
        shadowColor: COLORS.black,
        width: width <= 600 ? "100%" : width / 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    listItemText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
    },
    listItemSingerText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: "center",
        color: COLORS.clickable
    },
    listItemDetail: {
        fontSize: 13,
    },
    tinyLogo: {
        width: 150,
        height: 150,
        alignSelf: "center",
        marginTop: 20,
    },
    playStopButtons: {
        borderRadius: 18,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        marginTop: 5,
        alignSelf: "center",
        color: COLORS.pink
    },
    horizontalLineView: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 20
    },
    horizontalLine: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.pink,
    },
    horizontalLineText: {
        width: 50,
        textAlign: "center"
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderColor: COLORS.gray,
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 10,
        padding: 8,
        marginTop: 16,
        borderRadius: 10,
        width: width / 15
    },
    searchButton: {
        alignSelf: 'flex-end',
        marginTop: width <= 600 ? 10 : 0,
    }
});

export default styles;