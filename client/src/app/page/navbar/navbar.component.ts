import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItemsService } from '../common/nav-items.service';
import { UserService } from '../../common/services/user.service';
import { NavItem } from '../common/nav-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  name: string;
  surname: string;
  avatar: string;
  active: boolean;
  menuList: NavItem[];
  userType: string;

  constructor(private readonly navItemsService: NavItemsService,
              private readonly userService: UserService,
              private readonly router: Router) { }

  ngOnInit(): void {
    this.navItemsService.getNavList()
      .subscribe(list => this.menuList = list);
    this.userType = this.userService.getUserType();
    this.navItemsService.currentRouter(this.router.url);
    this.router.events.subscribe((event) => {
      this.navItemsService.currentRouter(this.router.url);
    });
  }

  closeBurgerMenu(event): void {
    this.active = event;
  }

  toggleIsActive(): boolean {
    this.active = !this.active;

    return false;
  }

  trackById(index: number, link: NavItem): string {
    return link.id;
  }
}
