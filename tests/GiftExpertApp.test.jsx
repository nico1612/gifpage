import { fireEvent, render, screen} from "@testing-library/react"
import {GiftExpertApp} from '../src/GiftExpertApp'

describe('test en guftExpertApp',()=>{

    test('cuando hay algun valor en el input ',()=>{
        render(<GiftExpertApp/>)
        const input=screen.getByRole('textBox')
        const form=screen.getByRole('form')

        fireEvent.input(input,{target:{value:'homero'}})
        expect(input.value).toBe('homero')
        fireEvent.submit(form)
    })
})