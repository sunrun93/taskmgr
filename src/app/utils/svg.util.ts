import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSVGResource = (ir: MatIconRegistry, ds: DomSanitizer) => {
    ir.addSvgIcon('strawberry', ds.bypassSecurityTrustResourceUrl('assets/imgs/strawberry.svg'));

}