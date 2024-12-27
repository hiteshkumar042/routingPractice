import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  httpService = inject(HttpService);
  users = signal<any[]>([])
  isUserDetailsPage=false;

  
  ngOnInit(): void {
    this.httpService.getuser().subscribe((data:any)=>{
      console.log(data);
      this.users.set(data)
    })
  }
}
