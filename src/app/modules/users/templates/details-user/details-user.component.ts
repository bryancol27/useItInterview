import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Import Rxjs operators
import { take } from 'rxjs/operators';

@Component({
	selector: 'app-details-user',
	templateUrl: './details-user.component.html',
	styleUrls: ['./details-user.component.scss'],
})
export class DetailsUserComponent implements OnInit {
	dynamicParam: string = '';

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.paramMap.pipe(take(1)).subscribe((params) => {
			const dynamic = params.get('id');

			if (typeof dynamic == 'string') {
				this.dynamicParam = dynamic;
			}
			console.log(this.dynamicParam);
		});
	}
}
