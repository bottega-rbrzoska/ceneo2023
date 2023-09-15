import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  @Input() product!: Product;
  @Output() saveProduct = new EventEmitter<any>()

  productForm!: FormGroup;
   
  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl(this.product?.name || '', {
        nonNullable: true,
        validators: [Validators.required,Validators.minLength(6) ]
      }),
      description: new FormControl({ value: this.product?.description || 'init description', disabled: true}, this.dupaValidator),
      price: new FormControl(this.product?.price || 0)
  })

    this.productForm.get('name')?.statusChanges.subscribe(v => {
      if(v === 'VALID') {
        this.productForm.get('description')?.enable()
      } else {
        this.productForm.get('description')?.disable()
      }
    })
  }

  ratuj() {
   if(this.productForm.valid) {
    this.saveProduct.emit(this.productForm.getRawValue())
   }
  }

  dupaValidator(control: AbstractControl): ValidationErrors | null {
    return control.value.includes('dupa') ? { dupaError: 'OMG!'} : null
  }

}
