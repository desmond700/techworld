import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Laptop } from './class/laptop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:3000/api';
  result: any;

  constructor(private _http: HttpClient,
			  private formBuilder: FormBuilder) { }
  
  getProducts() {
    return this._http.get(`${this.baseUrl}/products`);
  }
  
  getproductbyid(id) {
    return this._http.get(`${this.baseUrl}/product/` + id);
  }

  getProductObj(category) {
    return this._http.get(`${this.baseUrl}/products/` + category );
  }

  addLaptop(laptop: Laptop) {
      return this._http.post(`${this.baseUrl}/product/laptop`, laptop);
  }

  addCamera(camera: any) {
    return this._http.post(`${this.baseUrl}/product/camera`, camera);
  }

  addTv(tv: any) {
    return this._http.post(`${this.baseUrl}/product/tv`, tv);
  }

  addCellphone(cellphone: any) {
    return this._http.post(`${this.baseUrl}/product/cell-phone`, cellphone);
  }
  
  updateProduct(id: any, product: any){
	  return this._http.put(`${this.baseUrl}/product/update/` + id, product);
  }

  getUsers() {
    return this._http.get(`${this.baseUrl}/users/`);
  }

  removeUsers(id: any) {
    return this._http.delete(`${this.baseUrl}/users/` + id);
  }
  
  removeProduct(id: any) {
    return this._http.delete(`${this.baseUrl}/product/delete/` + id);
  }
  
  laptopFormBuilder(){
	  return this.formBuilder.group({
        name: ['', Validators.required],
        manufacturer: ['', Validators.required],
        model: ['', Validators.required],
        type: ['', Validators.required],
        img: ['', Validators.required],
        price: ['', Validators.required],
        specs: this.formBuilder.group({
            Screen_size: ['', Validators.required],
            Touch_screen: ['', Validators.required],
            Storage_type: ['', Validators.required],
            Hard_drive_type: ['', Validators.required],
            Hard_drive_capacity: ['', Validators.required],
            Solid_state_drive_capacity: ['', Validators.required],
            Graphics: ['', Validators.required],
            System_memory: ['', Validators.required],
            Processor_speed: ['', Validators.required],
            Processor_model: ['', Validators.required],
            Processor_model_number: ['', Validators.required],
            Operating_system: ['', Validators.required]
        }),
        bulletpoints: this.formBuilder.group({
            point1: ['', Validators.required],
            point2: ['', Validators.required],
            point3: ['', Validators.required],
            point4: ['', Validators.required],
            point5: ['', Validators.required]
        })
    });
  }
  
  tvFormBuilder(){
	  return this.formBuilder.group({
      name: ['', Validators.required],
      manufacturer: ['', Validators.required],
      model: ['', Validators.required],
      type: ['', Validators.required],
      img: ['', Validators.required],
      price: ['', Validators.required],
      specs: this.formBuilder.group({
          Screen_Technology: ['', Validators.required],
          WiFi: ['', Validators.required],
          Speakers: ['', Validators.required],
          Panel_Type: ['', Validators.required],
          Display_Size: ['', Validators.required],
          Headphone_Jack: ['', Validators.required],
          Image_Aspect_Ratio: ['', Validators.required],
          Display_Resolution: ['', Validators.required],
          VGA_Port: ['', Validators.required],
          Refresh_Rate: ['', Validators.required],
          Includes_Remote: ['', Validators.required],
          ThreeD_Ready: ['', Validators.required]
      }),
      bulletpoints: this.formBuilder.group({
        point1: ['', Validators.required],
        point2: ['', Validators.required],
        point3: ['', Validators.required],
        point4: ['', Validators.required],
        point5: ['', Validators.required]
      })
    });
  }
  
  cameraFormBuilder(){
	  return this.formBuilder.group({
        name: ['', Validators.required],
        manufacturer: ['', Validators.required],
        model: ['', Validators.required],
        type: ['', Validators.required],
        img: ['', Validators.required],
        price: ['', Validators.required],
        specs: this.formBuilder.group({
            WiFi: ['', Validators.required],
            Bluetooth: ['', Validators.required],
            Battery_Type: ['', Validators.required],
            Back_up_Battery: ['', Validators.required],
            Width: ['', Validators.required],
            Height: ['', Validators.required],
            Depth: ['', Validators.required],
            Weight: ['', Validators.required],
            NFC_Enabled: ['', Validators.required],
            Sensor_Type: ['', Validators.required],
            Effective_Pixels: ['', Validators.required],
            Total_Pixels: ['', Validators.required],
            Colour_Filter_System: ['', Validators.required],
            LCD_Size: ['', Validators.required],
            LCD_Resolution: ['', Validators.required]
        }),
        bulletpoints: this.formBuilder.group({
            point1: ['', Validators.required],
            point2: ['', Validators.required],
            point3: ['', Validators.required],
            point4: ['', Validators.required],
            point5: ['', Validators.required]
        })
    });
  }
  
  cellphoneFormBuilder(){
	  return this.formBuilder.group({
      name: ['', Validators.required],
      manufacturer: ['', Validators.required],
      model: ['', Validators.required],
      type: ['', Validators.required],
      img: ['', Validators.required],
      price: ['', Validators.required],
      specs: this.formBuilder.group({
        Bluetooth: ['', Validators.required],
        Memory_Built_in: ['', Validators.required],
        CPU: ['', Validators.required],
        RAM_Size: ['', Validators.required],
        SIM_Card: ['', Validators.required],
        Battery_Talk_Time: ['', Validators.required],
        Battery_Type: ['', Validators.required],
        Supported_Network_Bands: ['', Validators.required],
        NFC: ['', Validators.required],
        Headphone_Jack: ['', Validators.required],
        Rear_Camera_Resolution: ['', Validators.required],
        Front_Video_Capture_Resolution: ['', Validators.required],
        Camera_Flash: ['', Validators.required],
        Display_Resolution: ['', Validators.required],
        Display_Size: ['', Validators.required],
        Fingerprint_Scanning: ['', Validators.required],
        Operating_system: ['', Validators.required],
        Dimensions_cm: ['', Validators.required],
        Dimensions_in: ['', Validators.required],
        Weight: ['', Validators.required]
      }),
      bulletpoints: this.formBuilder.group({
        point1: ['', Validators.required],
        point2: ['', Validators.required],
        point3: ['', Validators.required],
        point4: ['', Validators.required],
        point5: ['', Validators.required]
      })
    });
  }
  
  getProductFormbuilder(type: String){
	  let genericForm: any;
	  switch(type){
		  case 'laptop':
			genericForm = this.laptopFormBuilder();
			break;
		  case 'tv':
			genericForm = this.tvFormBuilder();
			break;
		  case 'camera':
			genericForm = this.cameraFormBuilder();
			break;
		  case 'cellphone':
			genericForm = this.cellphoneFormBuilder();
			break;
	  }
	  
	  return genericForm;
  }
  
  setControls(formBuilder: any, productObj: any){
	  
	  switch(productObj.type){
		  case 'laptop':
			formBuilder.get('name').setValue(productObj.name);
			formBuilder.get('manufacturer').setValue(productObj.manufacturer);
			formBuilder.get('model').setValue(productObj.model);
			formBuilder.get('type').setValue(productObj.type);
			formBuilder.get('img').setValue(productObj.img);
			formBuilder.get('price').setValue(productObj.price);
			formBuilder.get('specs').get('Screen_size').setValue(productObj.specs.Screen_size);
			formBuilder.get('specs').get('Touch_screen').setValue(productObj.specs.Touch_screen);
			formBuilder.get('specs').get('Storage_type').setValue(productObj.specs.Storage_type);
			formBuilder.get('specs').get('Hard_drive_type').setValue(productObj.specs.Hard_drive_type);
			formBuilder.get('specs').get('Hard_drive_capacity').setValue(productObj.specs.Hard_drive_capacity);
			formBuilder.get('specs').get('Solid_state_drive_capacity').setValue(productObj.specs.Solid_state_drive_capacity);
			formBuilder.get('specs').get('Graphics').setValue(productObj.specs.Graphics);
			formBuilder.get('specs').get('System_memory').setValue(productObj.specs.System_memory);
			formBuilder.get('specs').get('Processor_speed').setValue(productObj.specs.Processor_speed);
			formBuilder.get('specs').get('Processor_model').setValue(productObj.specs.Processor_model);
			formBuilder.get('specs').get('Processor_model_number').setValue(productObj.specs.Processor_model_number);
			formBuilder.get('specs').get('Operating_system').setValue(productObj.specs.Operating_system);
			formBuilder.get('bulletpoints').get('point1').setValue(productObj.bulletpoints.point1);
			formBuilder.get('bulletpoints').get('point2').setValue(productObj.bulletpoints.point2);
			formBuilder.get('bulletpoints').get('point3').setValue(productObj.bulletpoints.point3);
			formBuilder.get('bulletpoints').get('point4').setValue(productObj.bulletpoints.point4);
			formBuilder.get('bulletpoints').get('point5').setValue(productObj.bulletpoints.point5);
			break;
		  case 'tv':
			formBuilder.get('name').setValue(productObj.name);
			formBuilder.get('manufacturer').setValue(productObj.manufacturer);
			formBuilder.get('model').setValue(productObj.model);
			formBuilder.get('type').setValue(productObj.type);
			formBuilder.get('img').setValue(productObj.img);
			formBuilder.get('price').setValue(productObj.price);
			formBuilder.get('specs').get('Screen_Technology').setValue(productObj.specs.Screen_Technology);
			formBuilder.get('specs').get('WiFi').setValue(productObj.specs.WiFi);
			formBuilder.get('specs').get('Speakers').setValue(productObj.specs.Speakers);
			formBuilder.get('specs').get('Panel_Type').setValue(productObj.specs.Panel_Type);
			formBuilder.get('specs').get('Display_Size').setValue(productObj.specs.Display_Size);
			formBuilder.get('specs').get('Headphone_Jack').setValue(productObj.specs.Headphone_Jack);
			formBuilder.get('specs').get('Image_Aspect_Ratio').setValue(productObj.specs.Image_Aspect_Ratio);
			formBuilder.get('specs').get('Display_Resolution').setValue(productObj.specs.Display_Resolution);
			formBuilder.get('specs').get('VGA_Port').setValue(productObj.specs.VGA_Port);
			formBuilder.get('specs').get('Refresh_Rate').setValue(productObj.specs.Refresh_Rate);
			formBuilder.get('specs').get('Includes_Remote').setValue(productObj.specs.Includes_Remote);
			formBuilder.get('specs').get('ThreeD_Ready').setValue(productObj.specs.ThreeD_Ready);
			formBuilder.get('bulletpoints').get('point1').setValue(productObj.bulletpoints.point1);
			formBuilder.get('bulletpoints').get('point2').setValue(productObj.bulletpoints.point2);
			formBuilder.get('bulletpoints').get('point3').setValue(productObj.bulletpoints.point3);
			formBuilder.get('bulletpoints').get('point4').setValue(productObj.bulletpoints.point4);
			formBuilder.get('bulletpoints').get('point5').setValue(productObj.bulletpoints.point5);
			break;
		  case 'camera':
			formBuilder.get('name').setValue(productObj.name);
			formBuilder.get('manufacturer').setValue(productObj.manufacturer);
			formBuilder.get('model').setValue(productObj.model);
			formBuilder.get('type').setValue(productObj.type);
			formBuilder.get('img').setValue(productObj.img);
			formBuilder.get('price').setValue(productObj.price);
			formBuilder.get('specs').get('WiFi').setValue(productObj.specs.WiFi);
			formBuilder.get('specs').get('Bluetooth').setValue(productObj.specs.Bluetooth);
			formBuilder.get('specs').get('Battery_Type').setValue(productObj.specs.Battery_Type);
			formBuilder.get('specs').get('Back_up_Battery').setValue(productObj.specs.Back_up_Battery);
			formBuilder.get('specs').get('Width').setValue(productObj.specs.Width);
			formBuilder.get('specs').get('Height').setValue(productObj.specs.Height);
			formBuilder.get('specs').get('Depth').setValue(productObj.specs.Depth);
			formBuilder.get('specs').get('Weight').setValue(productObj.specs.Weight);
			formBuilder.get('specs').get('NFC_Enabled').setValue(productObj.specs.NFC_Enabled);
			formBuilder.get('specs').get('Sensor_Type').setValue(productObj.specs.Sensor_Type);
			formBuilder.get('specs').get('Total_Pixels').setValue(productObj.specs.Total_Pixels);
			formBuilder.get('specs').get('Effective_Pixels').setValue(productObj.specs.Effective_Pixels);
			formBuilder.get('specs').get('Colour_Filter_System').setValue(productObj.specs.Colour_Filter_System);
			formBuilder.get('specs').get('LCD_Size').setValue(productObj.specs.LCD_Size);
			formBuilder.get('specs').get('LCD_Resolution').setValue(productObj.specs.LCD_Resolution);
			formBuilder.get('bulletpoints').get('point1').setValue(productObj.bulletpoints.point1);
			formBuilder.get('bulletpoints').get('point2').setValue(productObj.bulletpoints.point2);
			formBuilder.get('bulletpoints').get('point3').setValue(productObj.bulletpoints.point3);
			formBuilder.get('bulletpoints').get('point4').setValue(productObj.bulletpoints.point4);
			formBuilder.get('bulletpoints').get('point5').setValue(productObj.bulletpoints.point5);
			break;
		  case 'cellphone':
			formBuilder.get('name').setValue(productObj.name);
			formBuilder.get('manufacturer').setValue(productObj.manufacturer);
			formBuilder.get('model').setValue(productObj.model);
			formBuilder.get('type').setValue(productObj.type);
			formBuilder.get('img').setValue(productObj.img);
			formBuilder.get('price').setValue(productObj.price);
			formBuilder.get('specs').get('Bluetooth').setValue(productObj.specs.Bluetooth);
			formBuilder.get('specs').get('Memory_Built_in').setValue(productObj.specs.Memory_Built_in);
			formBuilder.get('specs').get('CPU').setValue(productObj.specs.CPU);
			formBuilder.get('specs').get('RAM_Size').setValue(productObj.specs.RAM_Size);
			formBuilder.get('specs').get('SIM_Card').setValue(productObj.specs.SIM_Card);
			formBuilder.get('specs').get('Battery_Talk_Time').setValue(productObj.specs.Battery_Talk_Time);
			formBuilder.get('specs').get('Battery_Type').setValue(productObj.specs.Battery_Type);
			formBuilder.get('specs').get('Supported_Network_Bands').setValue(productObj.specs.Supported_Network_Bands);
			formBuilder.get('specs').get('NFC').setValue(productObj.specs.NFC);
			formBuilder.get('specs').get('Headphone_Jack').setValue(productObj.specs.Headphone_Jack);
			formBuilder.get('specs').get('Rear_Camera_Resolution').setValue(productObj.specs.Rear_Camera_Resolution);
			formBuilder.get('specs').get('Front_Video_Capture_Resolution').setValue(productObj.specs.Front_Video_Capture_Resolution);
			formBuilder.get('specs').get('Camera_Flash').setValue(productObj.specs.Camera_Flash);
			formBuilder.get('specs').get('Display_Resolution').setValue(productObj.specs.Display_Resolution);
			formBuilder.get('specs').get('Display_Size').setValue(productObj.specs.Display_Size);
			formBuilder.get('specs').get('Fingerprint_Scanning').setValue(productObj.specs.Fingerprint_Scanning);
			formBuilder.get('specs').get('Operating_system').setValue(productObj.specs.Operating_system);
			formBuilder.get('specs').get('Dimensions_cm').setValue(productObj.specs.Dimensions_cm);
			formBuilder.get('specs').get('Dimensions_in').setValue(productObj.specs.Dimensions_in);
			formBuilder.get('specs').get('Weight').setValue(productObj.specs.Weight);
			formBuilder.get('bulletpoints').get('point1').setValue(productObj.bulletpoints.point1);
			formBuilder.get('bulletpoints').get('point2').setValue(productObj.bulletpoints.point2);
			formBuilder.get('bulletpoints').get('point3').setValue(productObj.bulletpoints.point3);
			formBuilder.get('bulletpoints').get('point4').setValue(productObj.bulletpoints.point4);
			formBuilder.get('bulletpoints').get('point5').setValue(productObj.bulletpoints.point5);
			break;
	  }
  }

}
