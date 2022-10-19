import { Card } from '@fruits-chain/react-bailu'
import type { FC } from 'react'
import React from 'react'

import ButtonExport from '@/components/_business/button-export'
// TODO: 修改 api 访问接口
import {
  ExportPaymentReturnDocument,
  PagePaymentReturnDocument,
} from '@/graphql/operations/finance-center/expense-peach/__generated__/expense-payment-return'
import useTablePagingGQL from '@/hooks/useTablePaging/gql'

import ListFilter from './components/filter'
import ListTable from './components/table'

const NewPage: FC = () => {
  const { tableProps, form, submit, reset, refresh } = useTablePagingGQL({
    // TODO: 修改 api 访问接口
    gql: PagePaymentReturnDocument,
    gqlKey: 'xxxPage',
    isSingleParams: true,
    defaultParams: {},
    paramsValueTypeMap: {},
    formatParams: v => v,
  })

  return (
    <div className="pageWrap">
      <Card.Group>
        <Card.Search>
          <ListFilter form={form} submit={submit} reset={reset} />
        </Card.Search>
        <Card.Table
          toolBar={
            <ButtonExport
              text="导出"
              gql={ExportPaymentReturnDocument}
              gqlKey="exportPaymentReturn"
              params={{}}
            />
          }>
          <ListTable tableProps={tableProps} refresh={refresh} />
        </Card.Table>
      </Card.Group>
    </div>
  )
}

export default NewPage
