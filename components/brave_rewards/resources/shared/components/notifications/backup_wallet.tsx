/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import { LocaleContext } from '../../lib/locale_context'

import { NotificationViewProps } from './notification_view'

export function BackupWallet (props: NotificationViewProps) {
  const { getString } = React.useContext(LocaleContext)
  const { Title, Body, Action } = props

  return (
    <div>
      <Title text={getString('notificationBackupWalletTitle')} />
      <Body>{getString('notificationBackupWalletText')}</Body>
      <Action
        notification={props.notification}
        label={getString('notificationBackupWalletAction')}
        action={{ type: 'backup-wallet' }}
      />
    </div>
  )
}
