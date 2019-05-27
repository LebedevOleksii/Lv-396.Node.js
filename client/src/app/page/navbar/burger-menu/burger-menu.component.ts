import { Component, OnInit, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { NavItemsService } from '../../common/nav-items.service';
import { NavItem } from '../../common/nav-item';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})

export class BurgerMenuComponent implements OnInit {
  @Input() public userType: string;
  @Input() public active: boolean;
  @Input() public menuList: NavItem[];
  @Output() readonly focusOut: EventEmitter<boolean> = new EventEmitter();

  constructor(private readonly navItemsService: NavItemsService) { }

  @HostListener('mouseleave') mouseleave(): void {
    setTimeout(() => {
      this.focusOut.emit(false);
    }, 100);
  }
  @HostListener('window:scroll') onScroll(): void {
    this.focusOut.emit(false);
  }

  ngOnInit(): void {
  }

  closeBurgerMenu(): boolean {
    this.focusOut.emit(false);

    return false;
  }

  trackById(link: NavItem): string {
    return link.id;
  }

}
