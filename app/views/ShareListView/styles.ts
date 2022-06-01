import { StyleSheet } from 'react-native';

import { fontSize } from '../../lib/theme';
import { isIOS } from '../../utils/deviceInfo';
import sharedStyles from '../Styles';

export default StyleSheet.create({
	container: {
		flex: 1
	},
	emptyContainer: {
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	centered: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	flatlist: {
		marginTop: isIOS ? 6 : 0, // the height of the navigation bar with the searchbar is larger
		width: '100%'
	},
	bordered: {
		...sharedStyles.separatorVertical
	},
	borderBottom: {
		...sharedStyles.separatorBottom
	},
	headerContainer: {
		paddingHorizontal: 15,
		paddingBottom: 10,
		paddingTop: 17
	},
	headerText: {
		...sharedStyles.textRegular,
		fontSize: 15,
		letterSpacing: 0.27
	},
	separator: {
		...sharedStyles.separatorBottom,
		marginLeft: 48
	},
	fileMime: {
		...sharedStyles.textBold,
		...sharedStyles.textAlignCenter,
		fontSize: fontSize[20],
		marginBottom: 20
	},
	title: {
		fontSize: fontSize[14],
		...sharedStyles.textBold
	},
	permissionTitle: {
		fontSize: 15,
		marginHorizontal: 30,
		...sharedStyles.textMedium,
		...sharedStyles.textAlignCenter
	},
	permissionMessage: {
		fontSize: fontSize[14],
		marginHorizontal: 30,
		...sharedStyles.textRegular,
		...sharedStyles.textAlignCenter
	}
});
