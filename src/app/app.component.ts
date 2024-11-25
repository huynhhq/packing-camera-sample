import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { NgxPackingCameraComponent } from 'ngx-packing-camera';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [NgxPackingCameraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'demo-packing-camera-lib';
  orderCode = '';
  productName = '';

  @ViewChild(NgxPackingCameraComponent) camera!: NgxPackingCameraComponent;

  changeProductName() {
    const products = ['Product A', 'Product B', 'Product C'];
    this.productName = products[Math.floor(Math.random() * products.length)];
  }

  start() {
    console.log('dddd :>> ', this.camera.devices);
    this.orderCode = `ORD${Math.floor(Math.random() * 1000000)}`;
    const products = ['Product A', 'Product B', 'Product C'];
    this.productName = products[Math.floor(Math.random() * products.length)];
    this.camera.startRecording();
  }

  stop() {
    this.orderCode = '';
    this.productName = '';
    this.camera.stopRecording();
  }
}
