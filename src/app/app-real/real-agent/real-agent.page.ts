import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { NavController} from '@ionic/angular';

import { RealestateService } from '../../services/realestate.service';
import { IonicComponentService} from '../../services/ionic-component.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-real-agent',
  templateUrl: './real-agent.page.html',
  styleUrls: ['./real-agent.page.scss'],
})
export class RealAgentPage implements OnInit {

  public agentId: any;
  public agents: Observable<any[]>;

  constructor( 
    public realestateService: RealestateService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    private ionicComponentService: IonicComponentService
  )
    { 
        this.agentId = this.activatedRoute.snapshot.paramMap.get('agentId');
      //console.log("Get activatedRoute categoryId="+ this.activatedRoute.snapshot.paramMap.get('agentId'));
      //console.log(this.router.url,"Current URL");
   
    }

  ngOnInit() {
    this.agents = this.realestateService.getAgent();
 
  }

}

