import cv from '../files/derekpesaCV.pdf'

export default function useDownload(){

    const download = async() => {
        const a = document.createElement('a')
        a.href = cv
        a.download = "DerekPesaCV.pdf"

        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)

    }
    return download
}