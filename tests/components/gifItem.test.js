import { render,screen } from "@testing-library/react"
import { GiftItem } from "../../src/components/GifItem"


describe('pruebas en <GifItem.jsx />',()=>{
    const title ='saitama'
    const url ='http://one-punch.com/saitama.jpg'

    test('debe ser match con el snapshot',()=>{
        const {container}=render(<GiftItem title={title} url={url}/>)
        expect(container).toMatchSnapshot()
    })

    test('debe mostrar la imagen con el url y el alt indicado',()=>{
        render(<GiftItem title={title} url={url}/>)
        //expect(screen.getByRole('img').src).toBe(url);
        //expect(screen.getByRole('img').alt).toBe(title)
        const {src,alt}=screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('debe mostrar el titulo en el componente',()=>{
        render(<GiftItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy()
    })
})