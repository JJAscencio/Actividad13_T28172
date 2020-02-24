import { Component, OnInit } from '@angular/core';
import {textareaAutoResize} from 'materialize-css';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  notes = [];

  ngOnInit(): void {
    $('.collapsible').collapsible();
  }

  addNote(input1: HTMLInputElement, input2: HTMLInputElement){
    const titulo = input1.value;
    const texto = input2.value;

    if (titulo === '' || texto === '') {
      alert ('Please ente an input');
    } else {
      input1.value = '';
      input2.value = '';
      const note = {
        title: titulo,
        body: texto
      };
      this.notes.unshift(note);
      $('#titulo').val('');
      $('#textarea').val('');
      textareaAutoResize($('#textarea'));

    }
  }
}
