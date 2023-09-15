import { Component } from "@angular/core";
import { ProductFormComponent } from "./product-form.component"

describe('Products Form', () => {

    let component: ProductFormComponent;

    beforeEach(()=> {
        component = new ProductFormComponent();
    })

    it('creates form with default values on init', () => {

        //when
        component.ngOnInit();

        //then
        expect(component.productForm).toBeTruthy();
        expect(component.productForm.getRawValue()).toEqual({
            name: '',
            description: 'init description',
            price: 0
        })
    })

    it('should validate description content with dupaValidator', ()=>{
        component.ngOnInit();
        component.productForm.get('name')?.setValue('asdasdasdasdasd');
        component.productForm.get('description')?.setValue('dssdfsdfdupa');

        expect(component.productForm.get('description')?.value).toBe('dssdfsdfdupa');
        expect(component.productForm.get('description')?.errors).not.toBeNull()
    })
})