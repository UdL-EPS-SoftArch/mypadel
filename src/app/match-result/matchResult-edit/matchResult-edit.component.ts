import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchResult } from '../MatchResult';
import { MatchResultService } from '../MatchResult.service';

@Component({
    selector: 'app-matchResult-edit',
    templateUrl: './matchResult-edit.component.html'
})
export class PublicMatchFormComponent implements OnInit {
    public matchResult: MatchResult;
    public matchResultForm: FormGroup;
    public errorMessage: string;

    constructor(private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private matchResultService: MatchResultService) {
        this.matchResultForm = fb.group({
            'winningPair': ['The Winning pair', Validators.required],
            'losingPair': ['The Loosing pair', Validators.required],
            'isDraw': ['Draw', Validators.required],
            'match': ['Match', Validators.required],
        });
    }

    ngOnInit() {
        this.matchResult = new MatchResult();
        this.route.params
            .map(params => params['id'])
            .subscribe((id) =>
                this.matchResultService.getMatchResult(id).subscribe(
                    matchResult => this.matchResult = matchResult,
                    error => this.errorMessage = <any>error.message));
    }

    onSubmit(): void {
        this.matchResultService.addMatchResult(this.matchResult)
            .subscribe(
            matchResult => this.router.navigate([matchResult.uri]),
            error => {
                this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
            });
    }
}


