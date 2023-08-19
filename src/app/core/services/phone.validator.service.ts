import { Injectable } from '@angular/core';
import { Phone } from 'src/types/phone';

@Injectable({
  providedIn: 'root'
})
export class PhoneValidatorService {
  validatePhone(phone: Phone) {
    let message = '';
    if (phone.make.length < 3) {
      message = 'make should be more than 3 characters long'
    } else if (phone.model.length < 1) {
      message = 'model should be more than 1 character long'
    } else if (phone.year < 2010 || phone.year > 2023){
      message = 'production year should be between 2010 and 2023'
    } else if (phone.OS.length < 2) {
      message = 'operating system should be more than 1 character long'
    } else if (phone.condition.length < 10) {
      message = 'you must use at least 10 charactes for the condition'
    } else if (phone.price < 1) {
      message = 'phone price cannot be a negative number'
    } else if (phone.imageUrl === '') {
      message = 'url cannot be empty'
    } else {
      message = 'OK'
    }
    return message;
  }
}
