import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { createUseStyles } from 'react-jss'
import { MapStyles } from './GMap.styles'

const useStyles = createUseStyles(MapStyles)

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

const GMap = () => {
  const classes = useStyles()

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY
  })

  const shopCoordinates = useMemo(() => ({
    lat: 46.179021672224685,
    lng: 21.34059981381673
  }))

  return (
    isLoaded && (
      <GoogleMap
        zoom={15}
        center={shopCoordinates}
        mapContainerClassName={classes.mapContainer}
      >
        <Marker position={shopCoordinates} />
      </GoogleMap>
    )
  )
}

export default GMap
