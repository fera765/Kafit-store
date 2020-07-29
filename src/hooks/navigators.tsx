import React, { createRef } from 'react'
import { NavigationContainerRef } from '@react-navigation/native'

const navigationRef = createRef<NavigationContainerRef>()

function navigate(routeName: string, params = {}) {
  if (!navigationRef.current) return
  navigationRef.current.navigate(routeName, params)
}

function goBack() {
  if (!navigationRef.current) return
  navigationRef.current.goBack()
}

function dispatch(opts: any) {
  if (!navigationRef.current) return
  navigationRef.current.dispatch(opts)
}

export { navigate, goBack, navigationRef, dispatch }
