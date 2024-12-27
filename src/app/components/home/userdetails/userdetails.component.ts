import { Component, inject, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.scss'
})
export class UserdetailsComponent implements OnInit {
  route = inject(ActivatedRoute)
  httpservice=inject(HttpService)
  userData:any;
  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.httpservice.getuserData(data['id']).subscribe(res=>{
        this.userData=res;
      })
    })
  }
}
