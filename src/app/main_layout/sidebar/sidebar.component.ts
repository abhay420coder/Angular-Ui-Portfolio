import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { menus as mainMenus } from './allSideBarMenuLinks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit ,AfterViewInit{
  menus :any[]= [];

  constructor(private router: Router,){}

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');

  }


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.menus = mainMenus;
  }


  parentToggle(parentMenu:any , childMenu:any , menu:any){
    childMenu.classList?.toggle("hidden")
    if(menu.menuPath.length>0){
      let url = menu.menuPath;
      this.router.navigate([url])
    }
  }

  childMenuOpen(submenu:any){
    if(submenu.subMenuPath.length>0){
      let url = submenu.subMenuPath;
      this.router.navigate([url])
    }
  }
}
