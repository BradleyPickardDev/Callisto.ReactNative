//
//  WhiteLabelConfig.m
//  RocketChatRN
//
//  Created by Abdul Rahman Majeed on 27/07/2022.
//  Copyright © 2022 Facebook. All rights reserved.
//

#import "WhiteLabelConfig.h"

@implementation WhiteLabelConfig

RCT_EXPORT_MODULE(WhiteLabelConfig);

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getAppName) {
//  return [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleDisplayName"];
  return NSLocalizedString(@"strJovianApp", @"App name");

}

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getGreetingText) {
  return NSLocalizedString(@"strJovianApp", @"App name");
}

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getLogoPath) {
  return @"Launch Screen Icon";
}

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getServerPlaceHolder) {
  return NSLocalizedString(@"strServerUrlPlaceholder", @"App name");
}



RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getClientName) {
  return NSLocalizedString(@"clientName", @"App name");
}

@end
