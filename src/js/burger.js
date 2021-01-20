export default class Burger {
  constructor(burgerClassName, menuClassName) {
    this.menuClassName = menuClassName;
    this.burger = document.querySelector(burgerClassName);
    this.menu = document.querySelector(menuClassName);
    this.isOpen = false;
  }

  init() {
    this.addListeners();

  }

  disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

  enableScrolling(){
  window.onscroll=function(){};
}

  toggleMenu(e) {
    e.preventDefault();
    // забираем первоначальные классы меню в переменную
    if (!this.initialMenuClassList) {
      this.initialMenuClassList = this.menu.classList.value;
    }
    
    // при нажатии присваиваем другой класс
    if(!this.isOpen) {
      this.isOpen = !this.isOpen;
      this.menu.className = 'burgerMenu animate__animated animate__fadeInTopRight';
      this.burger.classList.remove('fa-bars');
      this.burger.classList.add('fa-times');
      this.disableScrolling();
    // При повторном нажатии возвращаем класс
    } else {
      this.isOpen = !this.isOpen;
      this.menu.classList = this.initialMenuClassList;
      this.burger.classList.remove('fa-times');
      this.burger.classList.add('fa-bars');
      this.enableScrolling();
    }
    
  }

  addListeners() {
    this.burger.addEventListener('click', this.toggleMenu.bind(this));
  }
}
