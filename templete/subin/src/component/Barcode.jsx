import JsBarcode from 'jsbarcode'
import { useEffect, useState } from 'react'
function getFormattedDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}
const BarcodeItemScreen = () => {
  
  const [imageUrl, setImageUrl] = useState("")
  const barcodeNumber = getFormattedDate()
  useEffect(() => {
    const canvas = document.createElement('canvas')
    JsBarcode(canvas, barcodeNumber, { margin: 8,fontSize: 15, height: 30, width:1.5, displayValue: true })
    setImageUrl(canvas.toDataURL('image/png'))
  }, [])

  return <div className='barcode'>{imageUrl && <img src={imageUrl} />}</div>
}

export default BarcodeItemScreen