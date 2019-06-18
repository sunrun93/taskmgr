import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { QuoteService } from 'src/app/services/quote.service';
import { Quote } from '../../domain/quote';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  quotes: Quote
  constructor(private fb: FormBuilder, private quoteService$: QuoteService) {
    this.quoteService$.getQuote().subscribe(quotes=>{
      quotes;
    })
   }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['wang@163.com', Validators.compose([Validators.required, Validators.email, this.validate]) ],
      password: ['', Validators.required]
    })
  }

  onSubmit({value, valid}, ev: Event){
    ev.preventDefault();
    console.log(value);
    console.log(valid);
  }

  validate(c: FormControl): { [key: string]: any } {
    if(!c.valid){
      return null;
    }
    const pattern = /^wang+/;
    if(pattern.test(c.value)){
      return null;
    }
    return {
      emailNotValid:'The email must start with wang!'
    }
  }
}
