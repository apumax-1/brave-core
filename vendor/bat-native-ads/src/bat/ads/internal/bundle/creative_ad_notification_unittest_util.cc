/* Copyright (c) 2021 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

#include "bat/ads/internal/bundle/creative_ad_notification_unittest_util.h"

#include "base/guid.h"
#include "bat/ads/internal/bundle/creative_ad_unittest_util.h"

namespace ads {

CreativeAdNotificationInfo GetCreativeAdNotification() {
  CreativeAdInfo creative_ad = GetCreativeAd();
  const CreativeAdNotificationInfo* creative_ad_notification =
      static_cast<CreativeAdNotificationInfo*>(&creative_ad);

  CreativeAdNotificationInfo creative_ad_notification_mutable =
      *creative_ad_notification;

  creative_ad_notification_mutable.title = "Test Ad Title";
  creative_ad_notification_mutable.body = "Test Ad Body";

  return creative_ad_notification_mutable;
}

CreativeAdNotificationInfo GetCreativeAdNotification(const std::string& segment,
                                                     const double ptr,
                                                     const int priority) {
  CreativeAdNotificationInfo creative_ad_notification =
      GetCreativeAdNotification();
  creative_ad_notification.priority = priority;
  creative_ad_notification.ptr = ptr;
  creative_ad_notification.segment = segment;

  return creative_ad_notification;
}

CreativeAdNotificationInfo GetCreativeAdNotification(
    const std::string& creative_instance_id,
    const std::string& segment) {
  CreativeAdNotificationInfo creative_ad_notification =
      GetCreativeAdNotification();

  creative_ad_notification.creative_instance_id = creative_instance_id;
  creative_ad_notification.segment = segment;

  return creative_ad_notification;
}

CreativeAdNotificationInfo GetCreativeAdNotificationForAdvertiser(
    const std::string& advertiser_id) {
  CreativeAdNotificationInfo creative_ad_notification =
      GetCreativeAdNotification();

  creative_ad_notification.advertiser_id = advertiser_id;

  return creative_ad_notification;
}

CreativeAdNotificationInfo GetCreativeAdNotificationForSegment(
    const std::string& segment) {
  CreativeAdNotificationInfo creative_ad_notification =
      GetCreativeAdNotification();

  creative_ad_notification.segment = segment;

  return creative_ad_notification;
}

}  // namespace ads
