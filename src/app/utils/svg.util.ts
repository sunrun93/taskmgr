import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSVGResource = (ir: MatIconRegistry, ds: DomSanitizer) => {
    const imgDir = 'assets/imgs';
    const navBar = `${imgDir}/sidebar`;
    const daydir = `${imgDir}/days`;
    const avatarDir = `${imgDir}/avatar`;
    const iconDir = `${imgDir}/icons`;
    ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${navBar}/day.svg`));
    ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${navBar}/month.svg`));
    ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${navBar}/week.svg`));
    ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl(`${navBar}/project.svg`));
    ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${navBar}/projects.svg`));
    ir.addSvgIcon('add', ds.bypassSecurityTrustResourceUrl(`${iconDir}/add.svg`));
    ir.addSvgIcon('move', ds.bypassSecurityTrustResourceUrl(`${iconDir}/move.svg`));
    ir.addSvgIcon('delete', ds.bypassSecurityTrustResourceUrl(`${iconDir}/delete.svg`));
    ir.addSvgIcon('unassigned', ds.bypassSecurityTrustResourceUrl(`${iconDir}/unassigned.svg`));

    const date = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    date.forEach(d=>{
        ir.addSvgIcon(`day${d}`, ds.bypassSecurityTrustResourceUrl(`${daydir}/day${d}.svg`));
    });
    ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));
}