import Head from 'next/head'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { PLACEHOLDER_IMAGE } from '../constants'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Head>
        <title>ALX Listing App</title>
      </Head>

      <h1 className="text-3xl font-bold mb-6">Welcome to the ALX Listing App</h1>

      <Card
        title="Modern Apartment in Accra"
        description="Spacious and clean apartment with WiFi and AC"
        imageUrl={PLACEHOLDER_IMAGE}
      />

      <div className="mt-4">
        <Button label="Book Now" onClick={() => alert('Booked!')} />
      </div>
    </div>
  )
}
