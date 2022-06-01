import { PixelRatio, StyleSheet } from 'react-native';

import { fontSize } from '../../lib/theme';
import sharedStyles from '../../views/Styles';

export const ROW_HEIGHT = 75 * PixelRatio.getFontScale();
export const ROW_HEIGHT_CONDENSED = 60 * PixelRatio.getFontScale();
export const ACTION_WIDTH = 80;
export const SMALL_SWIPE = ACTION_WIDTH / 2;
export const LONG_SWIPE = ACTION_WIDTH * 3;

export default StyleSheet.create<any>({
	flex: {
		flex: 1
	},
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 14,
		height: ROW_HEIGHT
	},
	containerCondensed: {
		height: ROW_HEIGHT_CONDENSED
	},
	centerContainer: {
		flex: 1,
		paddingVertical: 10,
		paddingRight: 14,
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	title: {
		flex: 1,
		fontSize: fontSize[16],
		...sharedStyles.textMedium
	},
	alert: {
		...sharedStyles.textMedium
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start'
	},
	wrapUpdatedAndBadge: {
		alignItems: 'flex-end'
	},
	titleContainer: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	date: {
		fontSize: fontSize[12],
		marginLeft: 4,
		...sharedStyles.textRegular
	},
	updateAlert: {
		...sharedStyles.textMedium
	},
	status: {
		marginRight: 2
	},
	markdownText: {
		flex: 1,
		fontSize: fontSize[14],
		...sharedStyles.textRegular
	},
	avatar: {
		marginRight: 10
	},
	upperContainer: {
		overflow: 'hidden'
	},
	actionsContainer: {
		position: 'absolute',
		left: 0,
		right: 0,
		height: ROW_HEIGHT
	},
	actionsLeftContainer: {
		flexDirection: 'row',
		position: 'absolute',
		left: 0,
		right: 0,
		height: ROW_HEIGHT
	},
	actionLeftButtonContainer: {
		position: 'absolute',
		height: ROW_HEIGHT,
		justifyContent: 'center',
		top: 0,
		right: 0
	},
	actionRightButtonContainer: {
		position: 'absolute',
		height: ROW_HEIGHT,
		justifyContent: 'center',
		top: 0
	},
	actionButton: {
		width: ACTION_WIDTH,
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	tagContainer: {
		alignSelf: 'center',
		alignItems: 'center',
		borderRadius: 4,
		marginHorizontal: 4
	},
	tagText: {
		fontSize: fontSize[12],
		paddingHorizontal: 4,
		...sharedStyles.textMedium
	},
	typeIcon: {
		height: ROW_HEIGHT,
		justifyContent: 'center'
	}
});
