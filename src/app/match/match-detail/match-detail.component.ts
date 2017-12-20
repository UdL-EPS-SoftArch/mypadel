import {Component, OnInit} from "@angular/core";
import {Match} from "../Match";
import {ActivatedRoute} from "@angular/router";
import {MatchService} from "../Match.service";

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {
  public match: Match;
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private matchService: MatchService) {
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this.matchService.getMatch(`${id}`).subscribe(
            match => this.match = match,
            error => this.errorMessage = <any>error.message);
        }
      );
  }

}
