document.addEventListener("DOMContentLoaded", (function () {
    const tabLinks = document.querySelectorAll(".production__btn");
    const tabContainers = document.querySelectorAll(".product__list");
    let currentTab = 0;
    
    // Функция для переключения между вкладками
    function changeTab(n) {
      for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
      }
      tabLinks[n].classList.add("active");
    
      for (let j = 0; j < tabContainers.length; j++) {
        tabContainers[j].style.display = "none";
      }
    
      tabContainers[n].style.display = "grid";
      currentTab = n;
    }
    
    // Обработка кликов по ссылкам
    tabLinks.forEach((link, index) => {
      link.addEventListener("click", () => {
        changeTab(index);
      });
    });

}))