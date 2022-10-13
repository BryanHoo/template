import { Button, Space } from 'antd'
import type { FC } from 'react'
import React, { useRef } from 'react'

import BaseCard from '@/components/base-card'
// TODO: 修改 api 访问接口
import { xxx } from '@/graphql/operations/base-data/__generated__/xxx'
import useTablePagingGQL from '@/hooks/useTablePaging/gql'

import type { IEditModalRef } from './components/edit-modal'
import EditModal from './components/edit-modal'
import ListFilter from './components/filter'
import ListTable from './components/table'

const NewPage: FC = () => {
  const editModalRef = useRef<IEditModalRef>(null)

  // TODO: 修改 api 访问接口
  const { tableProps, form, submit, reset, refresh } = useTablePagingGQL({
    gql: xxx,
    gqlKey: 'storageYardPage',
  })

  const openEdit = (row?: any) => {
    editModalRef.current?.open(row)
  }

  return (
    <div className="pageWrap">
      <ListFilter form={form} submit={submit} reset={reset} />
      <BaseCard>
        <Space direction="vertical" size="large" className="pw100">
          <Button type="primary" onClick={() => editModalRef.current?.open()}>
            新增
          </Button>
          <ListTable tableProps={tableProps} openEdit={openEdit} refresh={refresh} />
        </Space>
      </BaseCard>

      <EditModal ref={editModalRef} refresh={refresh} />
    </div>
  )
}

export default NewPage
