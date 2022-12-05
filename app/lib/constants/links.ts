import { isIOS } from '../methods/helpers';
import whiteLabelConfig from '../../whitelabel/whiteLabelConfig';

export const PLAY_MARKET_LINK = `https://play.google.com/store/apps/details?id=${whiteLabelConfig.BUNDLE_ID}`;
export const APP_STORE_LINK = `https://itunes.apple.com/app/id${whiteLabelConfig.STORE_APPLICATION_ID}`;
export const STORE_REVIEW_LINK = isIOS
	? `itms-apps://itunes.apple.com/app/id${whiteLabelConfig.STORE_APPLICATION_ID}?action=write-review`
	: `market://details?id=${whiteLabelConfig.BUNDLE_ID}`;
