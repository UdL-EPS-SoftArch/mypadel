import {Component, OnInit} from '@angular/core';
import {Court} from '../../court/Court';
import {ActivatedRoute} from '@angular/router';
import {PrivateMatchService} from '../private-match.service';
import {PrivateMatch} from '../PrivateMatch';

@Component({
  selector: 'app-private-match-detail',
  templateUrl: './private-match-detail.component.html',
  styleUrls: ['./private-match-detail.component.css']
})
export class PrivateMatchDetailComponent implements OnInit {
  public privateMatch: PrivateMatch;
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private privateMatchService: PrivateMatchService) {
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this.privateMatchService.getPrivateMatch(`${id}`).subscribe(
            privateMatch => this.privateMatch = privateMatch,
            error => this.errorMessage = <any>error.message);
        }
      );
  }

}
