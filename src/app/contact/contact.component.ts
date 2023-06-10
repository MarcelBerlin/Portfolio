import { Component, ElementRef, ViewChild } from '@angular/core';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

})
export class ContactComponent {
  @ViewChild('myForm') myFrom!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  
  name: string;
  email: string;
  message: string;  
  inputValue: string;
  isEmailValid: boolean = false;
  isInputNameEmpty: boolean = true; // Initialize as empty
  isInputEmailEmpty: boolean = true; // Initialize as empty
  isInputMessageEmpty: boolean = true; // Initialize as empty
  constructor() {

  }
  

  validateEmail() {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    this.isEmailValid = emailRegex.test(this.email);
  }

  handleNameInputChange() {    
    if (this.name.length >= 1) {
      this.isInputNameEmpty = false;      
    } else {
      this.isInputNameEmpty = true;      
    }
  }

  handleEmailInputChange() {   
    if (this.email.length >= 1) {
      this.isInputEmailEmpty = false;   
    } else {
      this.isInputEmailEmpty = true;
    }
  }

  handleMessageInputChange() {   
    if (this.message.length >= 1) {
      this.isInputMessageEmpty = false;    
    } else {
      this.isInputMessageEmpty = true;    
    }
  }

  onInputFocus(inputField: HTMLInputElement | HTMLTextAreaElement) {
    inputField.previousElementSibling.classList.add('active');
  }

  onInputBlur(inputField: HTMLInputElement | HTMLTextAreaElement) {
    if (!inputField.value) {
      inputField.previousElementSibling.classList.remove('active');
    }
  }

  sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    this.mailSendToServer(nameField, emailField, messageField);
    this.BtnDisable();
  }

  async mailSendToServer(nameField: HTMLInputElement, emailField: HTMLInputElement, messageField: HTMLInputElement) {
    let fd = new FormData();
    fd.append('nameField', nameField.value)
    fd.append('emailField', emailField.value)
    fd.append('messageField', messageField.value)
    await fetch('https://www.marcelberlin-developer.de/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    )
  }
  BtnDisable() {
    this.nameField.nativeElement.disabled = true;
    this.emailField.nativeElement.disabled = true;
    this.messageField.nativeElement.disabled = true;
    document.getElementById('loader')?.classList.remove('loaderDNone');
    this.inputValueNull();
  }

  inputValueNull() {
    this.nameField.nativeElement.value = '';
    this.emailField.nativeElement.value = '';
    this.messageField.nativeElement.value = '';

    // Ladeanimation ausblenden und Bestätigung anzeigen
    setTimeout(() => {
      document.getElementById('loader')?.classList.add('loaderDNone');
      document.getElementById('sendEmail')?.classList.remove('loaderDNone');

      // Bestätigung ausblenden
      setTimeout(() => {
        document.getElementById('sendEmail')?.classList.add('loaderDNone');

        // Felder aktivieren
        setTimeout(() => {
          this.nameField.nativeElement.disabled = false;
          this.emailField.nativeElement.disabled = false;
          this.messageField.nativeElement.disabled = false;
        }, 5000);
      }, 5000);
    }, 3000);
  }
}
