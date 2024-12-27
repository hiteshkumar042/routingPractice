import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
 
ngOnInit(): void {
  
}
}
