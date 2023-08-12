import JsBarcode from 'jsbarcode'
import { useEffect, useState } from 'react'

const BarcodeItemScreen = () => {
  const [imageUrl, setImageUrl] = useState("")
  const barcodeNumber = "20230812"
  useEffect(() => {
    const canvas = document.createElement('canvas')
    JsBarcode(canvas, barcodeNumber, { margin: 8,fontSize: 15, height: 30, width:1.5, displayValue: true })
    setImageUrl(canvas.toDataURL('image/png'))
  }, [])

  return <div>{imageUrl && <img src={imageUrl} />}</div>
}

export default BarcodeItemScreen