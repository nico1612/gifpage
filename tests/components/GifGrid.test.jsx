import { render,screen } from "@testing-library/react"
import {GifGrid} from '../../src/components/GifGrid'
import { useFetchGif } from '../../src/hooks/useFetchGif';

jest.mock( '../../src/hooks/useFetchGif')

describe('pruebas en <gifGrid/>',()=>{
    
    const category='one punch'
    
    test('debe de mostrar el loading inicialmente',()=>{
        useFetchGif.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category}/>)
        expect(screen.getByText('cagando...'))
        expect(screen.getByText(category))
    })

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifts',()=>{
        const gifs=[
            {
                id:'ABC',
                title:'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id:'123',
                title:'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]
        useFetchGif.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(2)
    })
})