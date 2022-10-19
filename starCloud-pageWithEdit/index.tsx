import { Card } from '@fruits-chain/react-bailu'
import { Button, Space } from 'antd'
import type { FC } from 'react'
import React, { useRef } from 'react'

// TODO: 修改 api 访问接口
import { PageAdjustmentBillDocument } from '@/graphql/operations/finance-center/expense-durian/__generated__/expense-adjustment'
import useTablePagingGQL from '@/hooks/useTablePaging/gql'

import type { IEditModalRef } from './components/edit-modal'
import EditModal from './components/edit-modal'
import ListFilter from './components/filter'
import ListTable from './components/table'

const NewPage: FC = () => {
  const editModalRef = useRef<IEditModalRef>(null)

  const { tableProps, form, submit, reset, refresh } = useTablePagingGQL({
    // TODO: 修改 api 访问接口
    gql: PageAdjustmentBillDocument,
    gqlKey: 'xxxPage',
    isSingleParams: true,
    defaultParams: {},
    paramsValueTypeMap: {},
    formatParams: v => v,
  })

  const openEdit = (row?: any) => {
    editModalRef.current?.open(row)
  }

  return (
    <div className="pageWrap">
      <Card.Group>
        <Card.Search>
          <ListFilter form={form} submit={submit} reset={reset} />
        </Card.Search>
        <Card.Table
          toolBar={
            <Button type="primary" onClick={() => editModalRef.current?.open()}>
              新增
            </Button>
          }>
          <ListTable
            tableProps={tableProps}
            openEdit={openEdit}
            refresh={refresh}
          />
        </Card.Table>
      </Card.Group>

      <EditModal ref={editModalRef} refresh={refresh} />
    </div>
  )
}

export default NewPage
