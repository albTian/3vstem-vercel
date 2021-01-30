import React from "react"
import { Link } from 'gatsby'
import PageHeader from '../components/PageHeader'

export default function Home() {
  return (
    <>
      <PageHeader />
      <div className="home">changing!</div>
      <Link to="about">TO STAGING HAHA</Link>
    </>
  )
}
