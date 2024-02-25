import { getBillist } from '@/store/modules/billStore'
import { Button } from 'antd-mobile'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  BillOutline,
  CalculatorOutline,
  AddCircleOutline
} from 'antd-mobile-icons'
import './index.scss'

const tabs = [
  {
    key: '/month',
    title: '月度账单',
    icon: <BillOutline />,
  },
  {
    key: '/new',
    title: '记账',
    icon: <AddCircleOutline />,
  },
  {
    key: '/year',
    title: '年度账单',
    icon: <CalculatorOutline />,
  },
]

export default function Layout() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBillist())
  }, [dispatch])

  const navigate = useNavigate()

  const switchRoute=(path)=>{
    console.log(path)
    navigate(path)
  }

  return (
    <div className="kaLayout">
      <div className="page">
        {/* 二级路由出口 */}
        <Outlet />
      </div>

      <TabBar onChange={switchRoute}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  )
}
