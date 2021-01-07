import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    setInterval(() => {
      if (this.timerEnable) {

        this.slideIndex += this.ind;
        var x = document.getElementsByClassName("mySlides");
        if (this.slideIndex > x.length) { this.slideIndex = 1 }
        if (this.slideIndex < 1) { this.slideIndex = x.length }
      }
    }, 3000);
   }

  ngOnInit(): void {
  }
  
  slideIndex = 1;
  ind = 1
  timerEnable = true
  slider(n) {
    this.timerEnable = false
    this.ind = n;
    this.slideIndex += n;
    var x = document.getElementsByClassName("mySlides");
    if (this.slideIndex > x.length) { this.slideIndex = 1 }
    if (this.slideIndex < 1) { this.slideIndex = x.length }
    setTimeout(() => {
      this.timerEnable = true;
    }, 3000);
  }
  ComingSoon(){
    swal.fire({
      title: "به زودی",
      text: `این ویژگی در بروزرسانی های آینده اضافه می شود`,
      confirmButtonColor: '#3085d6',
      confirmButtonText: "باشه",
    })
  }

}
