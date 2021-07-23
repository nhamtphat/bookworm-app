import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'
import scrollToTop from "../_function/scrollToTop"
// // Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// Fonticons
import '../../assets/fonts/fontawesome/css/all.min.css'
import '../../assets/fonts/feathericons/css/iconfont.css'
import '../../assets/fonts/material-icons/css/materialdesignicons.css'
// Custom style
import '../../assets/sass/ui.scss'
import '../../assets/sass/responsive.scss'
import '../../assets/sass/_variables-custom.scss'
// Package
import 'react-toastify/dist/ReactToastify.css'

export default function Layout(props) {
  const { pathname } = useLocation()

  useEffect(() => {
    scrollToTop()
  }, [pathname])

  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
