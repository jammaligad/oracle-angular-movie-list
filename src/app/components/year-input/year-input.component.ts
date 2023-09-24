import { Component, Input } from '@angular/core';

@Component({
  selector: 'year-input',
  templateUrl: './year-input.component.html',
  styleUrls: ['./year-input.component.scss']
})
export class YearInputComponent {
  @Input() placeholder: string = ''
  @Input() onChange!: (year: number) => void

  componentOnChange = (e: any) => {
    e.preventDefault()

    const value = e.target.value

    this.onChange(value)
  }
}
