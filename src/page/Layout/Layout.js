import { getBillist } from '@/store/modules/billStore'
import { Button } from 'antd-mobile'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

export default function Layout() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBillist())
  }, [dispatch])

  return (
    <div>
      <Outlet />
      我是layout
      {/* 测试全局生效样式 */}
      <Button color='primary'>测试全局</Button>
      <div className='puple'>
        <Button color='primary'>测试局部</Button>
      </div>
    </div>
  )
}
