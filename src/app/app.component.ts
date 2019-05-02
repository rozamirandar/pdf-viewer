import { Component } from '@angular/core';

import LiferayParams from '../types/LiferayParams'

declare const Liferay: any;

@Component({
	templateUrl: '/o/pdf-viewer/app/app.component.html'
})
export class AppComponent {
	src = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
	params: LiferayParams;
	labels: any;

	constructor() {
		this.labels = {        
			
			portletNamespace: 'Porlet Namespace',
        	contextPath: 'Context Path',
			portletElementId: 'Portlet Element Id'
		}
	}

	get configurationJSON() {
		return JSON.stringify(this.params.configuration, null, 2);
	}
}
