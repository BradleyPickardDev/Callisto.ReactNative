import { NativeModules } from 'react-native';

export default class WhiteLabelConfig {
	public static readonly APP_NAME: string = NativeModules.WhiteLabelConfig.getAppName();
	public static readonly GREETING_TEXT: string = NativeModules.WhiteLabelConfig.getGreetingText();
	public static readonly APP_LOGO_PATH: string = NativeModules.WhiteLabelConfig.getLogoPath();
	public static readonly SERVER_PLACEHOLDER: string = NativeModules.WhiteLabelConfig.getServerPlaceHolder();
}
