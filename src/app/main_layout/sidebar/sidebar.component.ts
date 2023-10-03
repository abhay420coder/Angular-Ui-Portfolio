import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { menus as mainMenus } from './allSideBarMenuLinks';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit ,AfterViewInit{
  menus :any[]= [];

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');

  }


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.menus = mainMenus;
  }


  parentToggle(parentMenu:any , childMenu:any){
    childMenu.classList?.toggle("hidden")
  }
}
