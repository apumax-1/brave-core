/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import { LocaleContext } from '../../shared/lib/locale_context'
import { PublisherInfo } from '../lib/interfaces'
import { TokenAmount } from '../../shared/components/token_amount'
import { CaretIcon } from '../../shared/components/icons/caret_icon'

import * as style from './monthly_tip_view.style'

interface Props {
  publisherInfo: PublisherInfo
  onUpdateClick: () => void
  onCancelClick: () => void
}

export function MonthlyTipView (props: Props) {
  const { getString } = React.useContext(LocaleContext)
  const [showActions, setShowActions] = React.useState(false)

  const { monthlyContribution } = props.publisherInfo

  function cancelLink (evt: React.UIEvent) {
    evt.preventDefault()
  }

  if (monthlyContribution <= 0) {
    return (
      <style.root>
        <style.setBox onClick={cancelLink}>
          <a
            href='#'
            onClick={props.onUpdateClick}
            data-test-id='set-monthly-tip-button'
          >
            {getString('set')}
          </a>
        </style.setBox>
      </style.root>
    )
  }

  function toggleActionBubble () {
    setShowActions(!showActions)
  }

  return (
    <style.root>
      <style.amountBox>
        <style.amount>
          <button
            onClick={toggleActionBubble}
            data-test-id='monthly-tip-actions-button'
          >
            <TokenAmount
              amount={monthlyContribution}
              minimumFractionDigits={0}
            /> <CaretIcon direction='down' />
          </button>
        </style.amount>
        {
          showActions &&
            <style.actionBubble onClick={cancelLink}>
              <style.actionBubbleContent>
                <style.action>
                  <a
                    href='#'
                    onClick={props.onUpdateClick}
                    data-test-id='change-monthly-tip-button'
                  >
                    {getString('changeAmount')}
                  </a>
                </style.action>
                <style.action>
                  <a
                    href='#'
                    onClick={props.onCancelClick}
                    data-test-id='cancel-monthly-tip-button'
                  >
                    {getString('cancel')}
                  </a>
                </style.action>
                <style.backdrop onClick={toggleActionBubble} />
              </style.actionBubbleContent>
            </style.actionBubble>
        }
      </style.amountBox>
    </style.root>
  )
}
